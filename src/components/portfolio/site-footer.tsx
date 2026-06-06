import { Code2, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground px-4 py-6 text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <span>A222 &copy; 2026</span>
        <div className="flex gap-3">
          <a href="https://github.com/A222moq3e" target="_blank" rel="noreferrer">
            <Code2 className="h-5 w-5" />
          </a>
          <a href="mailto:moq3e2000@gmail.com">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
