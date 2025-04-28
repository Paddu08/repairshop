import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Only need this one

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export function Navbutton({ icon: Icon, label, href }: Props) {
  return (
    <Link href={href}>
      <Button variant="ghost" size="icon" title={label}>
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </Button>
    </Link>
  );
}
