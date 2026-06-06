import Link from "next/link";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";

export function LocaleSwitcher({ dictionary }) {
  return (
    <Button asChild variant="outline" size="sm">
      <Link href={dictionary.nav.localeHref}>
        <Languages className="h-4 w-4" />
        {dictionary.nav.localeLabel}
      </Link>
    </Button>
  );
}
