import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  ArrowRight,
  LogIn,
  Mail,
  Shield,
  HeartHandshake,
  Sparkles,
  Apple,
  Sun,
  Moon,
  BookOpen,
  Paintbrush,
  Trees,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import heroImg from "@/assets/hero-playroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Little Stars Home Daycare — Where Little Stars Shine Bright" },
      { name: "description", content: "A warm, loving home daycare in your neighborhood. Licensed care for ages 0–5 with play-based learning, nutritious meals, and a nurturing environment." },
      { property: "og:title", content: "Little Stars Home Daycare" },
      { property: "og:description", content: "Warm, licensed home daycare where children learn, play, and grow." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <DailyRhythm />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-foreground shadow-[0_4px_0_oklch(0.7_0.18_85)]">
        <Star className="h-5 w-5 fill-foreground" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-xl font-bold">Little Stars</span>
        <span className="block text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
          HOME DAYCARE
        </span>
      </span>
    </a>
  );
}

function Header() {
  const links = [
    { label: "Home", href: "#", active: true },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                l.active
                  ? "bg-primary text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-foreground/70 hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> Enquiries
          </a>
          <a
            href="#"
            className="ml-2 flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-foreground shadow-[0_4px_0_oklch(0.7_0.18_85)] transition-transform active:translate-y-0.5 active:shadow-[0_2px_0_oklch(0.7_0.18_85)]"
          >
            <LogIn className="h-4 w-4" /> Parent Portal
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[oklch(0.97_0.06_90)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
            <Star className="h-3.5 w-3.5 fill-foreground" />
            Enrolling now for 2026
          </span>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Where Little{" "}
            <span className="text-[oklch(0.78_0.18_85)]">Stars</span> Shine
            Bright
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            A warm, loving home daycare where your child will learn, play, and
            grow in a safe and nurturing environment.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-foreground shadow-[0_6px_0_oklch(0.7_0.18_85)] transition-transform active:translate-y-1 active:shadow-[0_2px_0_oklch(0.7_0.18_85)]"
            >
              Enroll Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              className="rounded-full border border-border bg-card px-7 py-4 text-base font-bold text-foreground shadow-[0_4px_0_oklch(0.92_0.03_90)] transition-transform active:translate-y-0.5"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -top-3 right-6 z-10 rounded-2xl bg-secondary px-4 py-2 text-xs font-bold text-foreground shadow-soft">
            Licensed &amp; Insured
          </span>
          <img
            src={heroImg}
            width={1280}
            height={896}
            alt="Children playing happily with wooden blocks and toys in a sunlit home daycare playroom"
            className="w-full rounded-[2rem] border border-border/60 object-cover shadow-soft"
          />
          <span className="absolute -bottom-3 left-6 z-10 rounded-2xl bg-accent px-4 py-2 text-xs font-bold text-foreground shadow-soft">
            Ages 0–5
          </span>
          <span className="absolute -left-2 top-12 h-4 w-4 rounded-full bg-[oklch(0.9_0.07_20)]" />
          <span className="absolute -right-3 bottom-20 h-6 w-6 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Shield,
      title: "Safe & Licensed",
      body: "Fully licensed home with rigorous safety standards and small group sizes for individualized care.",
      color: "bg-secondary",
    },
    {
      icon: HeartHandshake,
      title: "Family Feel",
      body: "A low caregiver-to-child ratio means every little star gets the warmth and attention they deserve.",
      color: "bg-[oklch(0.9_0.07_20)]",
    },
    {
      icon: Sparkles,
      title: "Play-Based Learning",
      body: "Sensory exploration, music, art, and outdoor adventure spark curiosity and confidence.",
      color: "bg-accent",
    },
    {
      icon: Apple,
      title: "Wholesome Meals",
      body: "Fresh, home-cooked meals and healthy snacks made daily with whole, seasonal ingredients.",
      color: "bg-primary/70",
    },
  ];
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Why Families Love Us
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every detail is thoughtfully designed to help your child thrive.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((f) => (
          <div
            key={f.title}
            className="rounded-[1.75rem] border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
          >
            <span
              className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${f.color}`}
            >
              <f.icon className="h-6 w-6 text-foreground" />
            </span>
            <h3 className="text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      icon: Moon,
      tag: "Infants",
      age: "6 weeks – 18 months",
      title: "Cuddle Bugs",
      body: "Snuggles, sensory play, and gentle routines that follow each baby's own rhythm.",
      tint: "bg-secondary/60",
    },
    {
      icon: BookOpen,
      tag: "Toddlers",
      age: "18 months – 3 years",
      title: "Tiny Explorers",
      body: "Language, motor skills, and big feelings — discovered through guided play and song.",
      tint: "bg-accent/60",
    },
    {
      icon: Paintbrush,
      tag: "Pre-K",
      age: "3 – 5 years",
      title: "Bright Sparks",
      body: "Early literacy, numbers, and creative arts that get little ones ready for kindergarten.",
      tint: "bg-primary/40",
    },
  ];
  return (
    <section id="programs" className="bg-[oklch(0.97_0.05_90)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Our Programs
            </h2>
            <p className="mt-4 text-muted-foreground">
              A nurturing path for every age and stage.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background"
          >
            Schedule a Visit
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-[2rem] border border-border bg-card p-8 shadow-soft"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl ${p.tint}`}
              >
                <p.icon className="h-6 w-6" />
              </span>
              <span className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {p.tag} · {p.age}
              </span>
              <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DailyRhythm() {
  const schedule = [
    { time: "7:30", icon: Sun, title: "Welcome & Free Play", body: "Soft arrival with puzzles, books, and quiet table activities." },
    { time: "9:30", icon: Sparkles, title: "Morning Circle & Music", body: "Songs, calendar, and a read-aloud to begin the day together." },
    { time: "11:00", icon: Trees, title: "Outdoor Adventure", body: "Backyard play, nature walks, and sandbox building." },
    { time: "12:30", icon: Apple, title: "Family-Style Lunch", body: "Home-cooked meal shared together at the little table." },
    { time: "1:30", icon: Moon, title: "Rest & Quiet Time", body: "Cozy naps with soft music and dim lighting." },
    { time: "3:30", icon: Paintbrush, title: "Art & Free Choice", body: "Messy art, building, and dramatic play before pickup." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
          <Clock className="h-3.5 w-3.5" /> A Day at Little Stars
        </span>
        <h2 className="mt-5 font-display text-4xl font-bold md:text-5xl">
          Our Daily Rhythm
        </h2>
        <p className="mt-4 text-muted-foreground">
          A predictable, gentle flow that helps children feel safe and confident.
        </p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {schedule.map((s) => (
          <div
            key={s.title}
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/60">
              <s.icon className="h-5 w-5" />
            </span>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-bold text-[oklch(0.6_0.18_85)]">
                  {s.time}
                </span>
                <h4 className="text-base font-bold">{s.title}</h4>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote: "Our daughter runs to the door every morning. Miss Sarah has created a second home filled with kindness and laughter.",
      name: "The Thompson Family",
    },
    {
      quote: "The level of attention is unmatched. We get sweet photo updates and our son has blossomed socially in just months.",
      name: "Elena & Marcus K.",
    },
    {
      quote: "Warm, safe, and so thoughtfully run. We feel completely at ease knowing our little one is here.",
      name: "Priya R.",
    },
  ];
  return (
    <section className="bg-[oklch(0.97_0.05_90)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Loved by Local Families
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-[2rem] border border-border bg-card p-8 shadow-soft"
            >
              <div className="flex gap-1 text-[oklch(0.78_0.18_85)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold text-muted-foreground">
                — {q.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-12 text-center shadow-soft md:p-20">
        <span className="absolute left-10 top-10 h-8 w-8 rounded-full bg-secondary" />
        <span className="absolute right-16 top-20 h-5 w-5 rounded-full bg-accent" />
        <span className="absolute bottom-12 left-1/4 h-6 w-6 rounded-full bg-[oklch(0.9_0.07_20)]" />
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">
          Come visit and feel the warmth.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-foreground/80">
          Two openings remain for the upcoming season. Book a tour — bring your
          little one along!
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-foreground px-7 py-4 text-base font-bold text-background shadow-[0_6px_0_oklch(0.1_0.04_255)] transition-transform active:translate-y-1"
          >
            Book a Tour
          </a>
          <a
            href="#"
            className="rounded-full border-2 border-foreground/20 bg-background/80 px-7 py-4 text-base font-bold text-foreground"
          >
            Download Handbook
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-foreground/80">
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 012-3456</span>
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@littlestars.care</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Sunshine Lane</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <Logo />
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          © 2026 Little Stars Home Daycare · Made with care
        </p>
      </div>
    </footer>
  );
}
