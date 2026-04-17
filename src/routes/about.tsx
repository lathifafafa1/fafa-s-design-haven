import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, Heart, Sparkles, Target, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Fafa" },
      { name: "description", content: "Tentang Lathifa Ramadanti Putri — keluarga, pendidikan, hobi, dan cita-cita sebagai UI/UX Designer." },
      { property: "og:title", content: "About · Fafa" },
      { property: "og:description", content: "Tentang Fafa — keluarga, pendidikan, hobi, dan cita-cita." },
    ],
  }),
  component: AboutPage,
});

const education = [
  { school: "TK Kuntum Mekar", year: "2015 – 2016" },
  { school: "SDN Pleburan 02", year: "2016 – 2021" },
  { school: "SMPN 2 Semarang", year: "2021 – 2024" },
  { school: "SMKN 7 Semarang", year: "2024 – sekarang" },
];

const hobbies = [
  { emoji: "🎧", text: "Mendengarkan musik" },
  { emoji: "🎨", text: "Mendesain (UI sederhana / Canva)" },
  { emoji: "📱", text: "Eksplor aplikasi & tampilan digital" },
];

const softSkills = ["Komunikasi", "Cepat belajar", "Kreatif", "Teliti", "Teamwork"];
const hardSkills = [
  "UI/UX Design (Figma, Canva)",
  "Editing desain",
  "HTML, CSS, basic JavaScript",
  "Wireframing & prototyping",
];

function Card({
  icon: Icon,
  title,
  children,
  tone = "pink",
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  tone?: "pink" | "blue" | "cream";
  delay?: number;
}) {
  const toneClass =
    tone === "pink" ? "bg-gradient-pink" : tone === "blue" ? "bg-gradient-blue" : "bg-gradient-cream";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
    >
      <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${toneClass} shadow-soft`}>
        <Icon className="h-5 w-5 text-foreground" />
      </div>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-foreground/80">{children}</div>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <section className="px-4 py-12">
      <SectionHeader
        eyebrow="About me"
        title="Sedikit cerita tentang aku ✿"
        subtitle="Keluarga, sekolah, hobi, dan mimpi — semua yang membentuk Fafa hari ini."
      />

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        <Card icon={Heart} title="Keluarga" tone="pink">
          Saya berasal dari keluarga yang sederhana dan suportif, yang selalu mendukung saya
          dalam pendidikan dan pengembangan diri.
        </Card>

        <Card icon={GraduationCap} title="Pendidikan" tone="blue" delay={0.05}>
          <ul className="space-y-2">
            {education.map((e) => (
              <li key={e.school} className="flex items-center justify-between gap-3 rounded-xl bg-muted/60 px-3 py-2">
                <span>{e.school}</span>
                <span className="text-xs text-muted-foreground">{e.year}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card icon={Sparkles} title="Hobi" tone="cream" delay={0.1}>
          <ul className="grid gap-2">
            {hobbies.map((h) => (
              <li key={h.text} className="flex items-center gap-3 rounded-xl bg-muted/60 px-3 py-2">
                <span className="text-xl">{h.emoji}</span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card icon={Target} title="Minat & Cita-cita" tone="pink" delay={0.15}>
          <p className="mb-2">
            <span className="font-medium">Interest:</span> UI/UX Designer
          </p>
          <p>
            Saya bercita-cita menjadi seorang UI/UX Designer yang mampu menciptakan desain aplikasi
            atau website yang tidak hanya menarik secara visual, tetapi juga mudah digunakan dan
            memberikan pengalaman terbaik bagi pengguna.
          </p>
        </Card>

        <Card icon={Heart} title="Soft Skills" tone="blue" delay={0.2}>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {s}
              </span>
            ))}
          </div>
        </Card>

        <Card icon={Wrench} title="Hard Skills" tone="cream" delay={0.25}>
          <ul className="grid gap-2">
            {hardSkills.map((s) => (
              <li key={s} className="rounded-xl bg-muted/60 px-3 py-2">{s}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
