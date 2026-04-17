import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills · Fafa" },
      { name: "description", content: "Skills Fafa: HTML, CSS, JavaScript, dan UI/UX Design." },
      { property: "og:title", content: "Skills · Fafa" },
      { property: "og:description", content: "Progress skills Fafa di dunia desain dan web." },
    ],
  }),
  component: SkillsPage,
});

const skills = [
  { name: "HTML", value: 20, color: "bg-gradient-pink" },
  { name: "CSS", value: 20, color: "bg-gradient-blue" },
  { name: "JavaScript", value: 20, color: "bg-gradient-cream" },
  { name: "UI/UX Design & Editing", value: 80, color: "bg-gradient-pink" },
];

function SkillsPage() {
  return (
    <section className="px-4 py-12">
      <SectionHeader
        eyebrow="Skills"
        title="Apa yang sedang aku pelajari ✎"
        subtitle="Setiap hari sedikit demi sedikit — fokus utama di UI/UX Design."
      />

      <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-border/60 bg-card p-6 shadow-soft md:p-8">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="mb-2 flex items-end justify-between">
              <span className="font-display text-base font-semibold">{s.name}</span>
              <span className="text-sm text-muted-foreground">{s.value}%</span>
            </div>
            <div className="h-4 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${s.color} shadow-soft`}
              />
            </div>
          </motion.div>
        ))}

        <div className="mt-4 rounded-2xl bg-gradient-cream p-4 text-sm text-foreground/80">
          🌱 <span className="font-medium">Catatan:</span> Persentase ini menunjukkan tahap belajarku
          sekarang — selalu bertumbuh setiap harinya!
        </div>
      </div>
    </section>
  );
}
