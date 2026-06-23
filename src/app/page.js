import CTAAndFooter from "@/Components/Shared/CTAAndFooter";
import FeaturesSection from "@/Components/Shared/FeaturesSection";
import HeroSection from "@/Components/Shared/HeroSection";
import JobGridSection from "@/Components/Shared/JobGridSection";
import Lorem from "@/Components/Shared/Lorem";
import Navbar from "@/Components/Shared/Navbar";
import PricingSection from "@/Components/Shared/PricingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <JobGridSection />
      <FeaturesSection />
      <PricingSection />
      <CTAAndFooter />
      {/* <Lorem />  */}
    </main>
  );
}




{/* <form action="/api/checkout_sessions" method="POST">
  <section>
    <button type="submit" role="link">
      Checkout
    </button>
  </section>
</form> */}