/**
 * Renders the hero introduction and contact information card.
 */
import { Globe, Mail, Phone, ShieldCheck, Sparkles } from "lucide-react";

import { GithubIcon } from "@/components/icons/github-icon";
import { AnimatedName } from "@/components/portfolio/animated-name";
import { ScrollReveal } from "@/components/portfolio/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection({ dictionary }) {
  return (
    <section className="px-4 py-16 md:py-24" data-nav-title={dictionary.hero.name}>
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.4fr_0.6fr]">
        <ScrollReveal className="flex flex-col justify-center" direction="left">
          <Badge variant="outline" className="mb-4 w-fit bg-card">
            <Sparkles className="me-1 h-3.5 w-3.5" />
            {dictionary.hero.eyebrow}
          </Badge>
          <AnimatedName name={dictionary.hero.name} />
          {dictionary.hero.arabicName && (
            <p className="mt-4 text-xl font-bold text-primary" lang="ar" dir="rtl">
              {dictionary.hero.arabicName}
            </p>
          )}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{dictionary.hero.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="!text-white hover:!text-white">
              <a href="#projects">{dictionary.hero.primaryAction}</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:moq3e2000@gmail.com">{dictionary.hero.secondaryAction}</a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={120}>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>{dictionary.sections.info}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                [Mail, dictionary.contact.email, "mailto:moq3e2000@gmail.com"],
                [Phone, dictionary.contact.phone, "tel:+966507485316"],
                [Globe, dictionary.contact.website, "https://a222ghoul.com"],
                [GithubIcon, dictionary.contact.github, "https://github.com/A222moq3e"],
                [ShieldCheck, dictionary.contact.cyberhub, "https://cyberhub.sa/profile/a222_a222"],
              ].map(([Icon, label, href]) =>
                href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex min-w-0 items-center gap-3 text-sm text-muted-foreground transition hover:text-primary"
                    key={label}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-secondary" />
                    <span className="truncate">{label}</span>
                  </a>
                ) : (
                  <span className="flex min-w-0 items-center gap-3 text-sm text-muted-foreground" key={label}>
                    <Icon className="h-4 w-4 shrink-0 text-secondary" />
                    <span>{label}</span>
                  </span>
                )
              )}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
