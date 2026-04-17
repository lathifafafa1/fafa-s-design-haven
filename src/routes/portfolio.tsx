import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import projectUi from "@/assets/project-ui.jpg";
import projectWeb from "@/assets/project-web.jpg";
import projectCanva from "@/assets/project-canva.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio · Fafa" },
      { name: "description", content: "Kumpulan karya UI design, website, dan desain visual oleh Fafa." },
      { property: "og:title", content: "Portfolio · Fafa" },
      { property: "og:description", content: "UI design, website, dan desain visual buatan Fafa." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "UI Design Project",
    desc: "Mobile app UI design focusing on user-friendly interface.",
    img: projectUi,
    tag: "UI/UX",
    tone: "bg-gradient-pink",
  },
  {
    title: "Website Project",
    desc: "Simple website using HTML and CSS.",
    img: projectWeb,
    tag: "Web",
    tone: "bg-gradient-blue",
  },
  {
    title: "Canva Design",
    desc: "Visual design and poster collection.",
    img: projectCanva,
    tag: "Visual",
    tone: "bg-gradient-cream",
  },
];

function PortfolioPage() {
  return (
    <section className="px-4 py-12">
      <SectionHeader
        eyebrow="Portfolio"
        title="My little projects 🎀"
        subtitle="Beberapa karya kecil yang aku buat sambil belajar."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-transform hover:-translate-y-1 hover:shadow-cute"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                width={768}
                height={576}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className={`absolute left-3 top-3 rounded-full ${p.tone} px-3 py-1 text-xs font-medium shadow-soft`}>
                {p.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.desc}</p>
              <button
                type="button"
                className="mt-4 inline-flex items-center justify-center gap-1 self-start rounded-full bg-gradient-pink px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                View project
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
