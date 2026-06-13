/**
 * Renders the portfolio footer and copyright line.
 */
import { Mail } from "lucide-react";

import { GithubIcon } from "@/components/icons/github-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/70 px-4 py-6 text-muted-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <span>A222 &copy; 2026</span>
        <div className="flex gap-3">
          <a href="https://github.com/A222moq3e" target="_blank" rel="noreferrer" className="transition hover:text-primary">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="mailto:moq3e2000@gmail.com" className="transition hover:text-primary">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
