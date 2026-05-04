import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import profile from "@/assets/photo_profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fafa · UI/UX Designer Portfolio" },
      { name: "description", content: "Halo! Saya Fafa, calon UI/UX Designer yang suka mendesain pengalaman digital yang simple dan bermakna." },
      { property: "og:title", content: "Fafa · UI/UX Designer Portfolio" },
      { property: "og:description", content: "Designing simple ideas into meaningful experiences." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <section className="relative px-4 pt-10 md:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-foreground/80 shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Hi, welcome to my little corner!
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            I'm <span className="bg-gradient-pink bg-clip-text text-transparent">Fafa</span>
            <span className="block text-foreground/90">aspiring UI/UX Designer ✿</span>
          </h1>
          <p className="mt-3 text-lg italic text-muted-foreground">
            "Designing simple ideas into meaningful experiences."
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
            Saya adalah siswi SMKN 7 Semarang jurusan SIJA yang memiliki minat besar di bidang UI/UX Design.
            Saya senang mempelajari bagaimana desain dapat memberikan pengalaman yang nyaman dan
            menarik bagi pengguna. Dengan semangat belajar yang tinggi, saya terus mengembangkan
            kemampuan untuk menjadi UI/UX Designer profesional di masa depan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-pink px-6 py-3 font-medium text-primary-foreground shadow-cute transition-transform hover:-translate-y-0.5"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium text-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              About me
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div>
              <p className="font-display text-2xl font-bold text-foreground">6+</p>
              <p>Projects</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">∞</p>
              <p>Curiosity</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-display text-2xl font-bold text-foreground">100%</p>
              <p>Passion</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 animate-blob bg-gradient-pink opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-card bg-card shadow-cute">
            <img
              src={profile}
              alt="Lathifa Ramadanti Putri (Fafa) — UI/UX designer portrait"
              width={768}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-10 rounded-2xl bg-card px-3 py-2 text-sm shadow-soft"
          >
            <span className="mr-1">🎨</span> UI/UX
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 bottom-16 rounded-2xl bg-gradient-blue px-3 py-2 text-sm shadow-soft"
          >
            <span className="mr-1">✨</span> Figma
          </motion.div>
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft"
          >
            <Heart className="mr-1 inline h-4 w-4 fill-primary text-primary" />
            Fafa
          </motion.div>
        </motion.div>
      </div>

      {/* Quick highlight strip */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-3">
        {[
          { emoji: "🌷", title: "Friendly Design", desc: "Soft, warm, dan mudah bergaul." },
          { emoji: "🧩", title: "Problem Solver", desc: "Mendesain dari kebutuhan pengguna." },
          { emoji: "🌱", title: "Always Learning", desc: "Setiap hari = belajar hal baru." },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-3xl border border-border/60 bg-card/80 p-5 shadow-soft backdrop-blur transition-transform hover:-translate-y-1"
          >
            <div className="text-3xl">{c.emoji}</div>
            <h3 className="mt-2 font-display text-lg">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
