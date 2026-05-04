import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, User } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import fotoCv from "@/assets/Foto CV.jpeg";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV · Fafa" },
      { name: "description", content: "Curriculum Vitae Lathifa Ramadanti Putri (Fafa) — pendidikan, pengalaman, dan skills." },
      { property: "og:title", content: "CV · Fafa" },
      { property: "og:description", content: "CV singkat Fafa — pendidikan, pengalaman, dan skills." },
    ],
  }),
  component: CVPage,
});

const personalData = [
  { label: "Name", value: "Lathifa Ramadanti Putri" },
  { label: "Nickname", value: "Embuy" },
  { label: "Birth", value: "26 August 2009" },
  { label: "Address", value: "Singosari X, No. 26" },
  { label: "Email", value: "lathifafafa1@gmail.com" },
  { label: "Phone", value: "+62 888 064 550 40" },
  { label: "Figma", value: "lathifa fafa" },
  { label: "LinkedIn", value: "lathifaramadanti" },
];

const education = [
  { school: "SMKN 7 Semarang", year: "2024 – now" },
  { school: "SMPN 2 Semarang", year: "2021 – 2024" },
  { school: "SDN Pleburan 02", year: "2016 – 2021" },
];

const experience = ["UI design projects", "School IT projects", "Study Grow Design (11th Final Grade of National INNOVERA Competition)", "Smart Food Safety Detector (Runner Up of National IONIC Competition - Proposal)"];
const skills = ["UI/UX Design", "Figma", "Canva", "HTML, CSS", "Editing"];

function CVPage() {
  return (
    <section className="px-4 py-12">
      <SectionHeader
        eyebrow="Curriculum Vitae"
        title="My CV"
        subtitle="Sebuah ringkasan singkat tentang aku."
      />

      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-1 rounded-3xl border border-border/60 bg-gradient-pink p-6 shadow-cute flex flex-col items-center text-center"
        >
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full overflow-hidden shadow-soft border-2 border-foreground/40">
            <img
              src={fotoCv}
              alt="Lathifa Ramadanti Putri (Fafa) - CV Photo"
              width={64}
              height={64}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <h2 className="font-display text-xl font-semibold">Personal Data</h2>
          <dl className="mt-4 space-y-2 text-sm w-full">
            {personalData.map((p) => (
              <div key={p.label} className="flex items-center justify-between rounded-xl bg-card/70 px-3 py-2 backdrop-blur">
                <dt className="text-foreground/70">{p.label}</dt>
                <dd className="font-medium">{p.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="space-y-5 md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <GraduationCap className="h-3.5 w-3.5" /> Education
            </div>
            <ul className="space-y-2 text-sm">
              {education.map((e) => (
                <li key={e.school} className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2">
                  <span className="font-medium">{e.school}</span>
                  <span className="text-muted-foreground">{e.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
                <Briefcase className="h-3.5 w-3.5" /> Experience
              </div>
              <ul className="space-y-2 text-sm">
                {experience.map((e) => (
                  <li key={e} className="rounded-xl bg-muted/60 px-3 py-2">{e}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-blue px-3 py-1 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5" /> Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-3xl bg-gradient-cream p-6 text-center shadow-soft"
          >
            <p className="font-display text-2xl italic">
              "Long story short, I survived -Taylor Swift"
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
