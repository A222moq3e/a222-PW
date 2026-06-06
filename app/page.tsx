/**
 * Redirects the bare root route into the default locale route.
 */
import { redirect } from "next/navigation";

import { defaultLocale } from "@/lib/i18n";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
