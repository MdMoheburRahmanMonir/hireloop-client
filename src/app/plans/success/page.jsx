    import { redirect } from 'next/navigation'

    import { stripe } from '../../../lib/stripe'

    export default async function Success({ searchParams }) {
        const { session_id } = await searchParams
        console.log('session_id', session_id)
        if (!session_id)
            throw new Error('Please provide a valid session_id (`cs_test_...`)')

        const {
            status,
            customer_details: { email: customerEmail }
        } = await stripe.checkout.sessions.retrieve(session_id, {
            expand: ['line_items', 'payment_intent']
        })
        console.log('status is ',  status, 'and customer email is ', customerEmail );
        
        if (status === 'open') {
            console.log(status)
            return redirect('/')
        }

        if (status === 'complete') {
            console.log(status)
            return (
                <section id="success">
                    <p>
                        We appreciate your business! A confirmation email will be sent to{' '}
                        {customerEmail}. If you have any questions, please email{' '}
                        <a href="mailto:orders@example.com">orders@example.com</a>.
                    </p>
                </section>
            )
        }
    }
