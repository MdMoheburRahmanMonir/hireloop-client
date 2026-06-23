
import { Bars, Bell, Envelope, Gear, Magnifier, Person } from "@gravity-ui/icons";
import { IoIosNotificationsOutline, IoMdBusiness } from "react-icons/io";
import { MdOutlineDashboard, MdOutlineSettingsApplications, MdSettingsApplications } from "react-icons/md";
import { Button, Drawer } from "@heroui/react";
import { LayoutSideContent } from '@gravity-ui/icons';
import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";

export default function DashboardSidebar() {
  const navItems = [
    { icon: MdOutlineDashboard, label: "Dashboard", link: "/dashboard/recruiter" },
    { icon: MdOutlineCreateNewFolder, label: "Create Job", link: "/dashboard/recruiter/jobs/new" },
    { icon: IoMdBusiness, label: "My Company", link: "/dashboard/recruiter/company" },
    { icon: IoBagOutline, label: "Manage Jobs", link: "/notifications" },
    { icon: MdOutlineSettingsApplications, label: "Applications", link: "/messages" },
    { icon: CiSettings, label: "Settings", link: "/profile" },
  ];
  const NavData = <nav className="flex flex-col gap-1">
    {navItems.map((item) => (
      <Link
        key={item.label}
        href={item.link}
      >
        <button
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </button>
      </Link>
    ))}
  </nav>



  return (
    <Drawer>
      <aside className="hidden h-full w-64 flex-col gap-4 p-4 lg:flex">
        <div>
          <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
        </div>
        {NavData}
      </aside>
      <Button className="lg:hidden ms:black" variant="secondary">
        <LayoutSideContent />
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog className="pl-2 w-64">
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body className="p-0 w-64">
              {NavData}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}