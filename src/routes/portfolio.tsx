import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import smoothiesPink from "@/assets/Smoothies-Pink.png";
import smoothiesYellow from "@/assets/Smoothies-Yellow.png";
import smoothiesGreen from "@/assets/Smoothies-Green.png";
import smoothiesBlue from "@/assets/Smoothies-Blue.png";
import jacketGreen from "@/assets/Jacket-Green.png";
import jacketOrange from "@/assets/Jacket-Orange.png";
import jacketYellow from "@/assets/Jacket-Yellow.png";
import donutPurple from "@/assets/Donut-Purple.png";
import donutGreen from "@/assets/Donut-Green.png";
import jordanPink from "@/assets/Jordan-Pink.png";
import jordanAbu from "@/assets/Jordan-Abu.png";
import bioskop1 from "@/assets/Bioskop-1.png";
import bioskop2 from "@/assets/Bioskop-2.png";
import sinaw1 from "@/assets/Sinaw-1.png";
import sinaw2 from "@/assets/Sinaw-2.png";
import sinaw3 from "@/assets/Sinaw-3.png";
import sinaw4 from "@/assets/Sinaw-4.png";
import studyGrow1 from "@/assets/Study-Grow-1.png";
import studyGrow2 from "@/assets/Study-Grow-2.png";
import studyGrow3 from "@/assets/Study-Grow-3.png";
import studyGrow4 from "@/assets/Study-Grow-4.png";
import aman1 from "@/assets/Aman-1.png";
import aman2 from "@/assets/Aman-2.png";
import perluDicek1 from "@/assets/Perlu-Dicek-1.png";
import perluDicek2 from "@/assets/Perlu-DIcek-2.png";
import tidakLayak1 from "@/assets/Tidak-Layak-1.png";
import tidakLayak2 from "@/assets/Tidak-Layak-2.png";
import jordanHijau from "@/assets/Jordan-Hijau.png";

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
    title: "Study Grow Design (11th Final Grade of National INNOVERA Competition)",
    desc: "An interactive e-learning app UI designed to make online education engaging and user-friendly.",
    img: studyGrow1,
    tag: "UI/UX",
    tone: "bg-gradient-blue",
    gallery: [studyGrow1, studyGrow2, studyGrow3, studyGrow4],
  },
  {
    title: "Smart Food Safety Detector (Runner Up of National IONIC Competition - Proposal)",
    desc: "A mobile app UI for food safety detection that helps users make informed choices about food quality.",
    img: aman1,
    tag: "UI/UX",
    tone: "bg-gradient-pink",
    gallery: [aman1, aman2, perluDicek1, perluDicek2, tidakLayak1, tidakLayak2],
  },
  {
    title: "Smoothies-Design",
    desc: "UI design for a smoothies & healthy food app with a fresh, vibrant look.",
    img: smoothiesPink,
    tag: "UI/UX",
    tone: "bg-gradient-pink",
    gallery: [smoothiesPink, smoothiesYellow, smoothiesGreen, smoothiesBlue],
  },
  {
    title: "RideStore Design",
    desc: "E-commerce UI design for a snow jacket store with a bold and modern aesthetic.",
    img: jacketGreen,
    tag: "UI/UX",
    tone: "bg-gradient-blue",
    gallery: [jacketGreen, jacketOrange, jacketYellow],
  },
  {
    title: "Donut Design",
    desc: "Visual design poster for a donut brand with a fun and eye-catching layout.",
    img: donutPurple,
    tag: "UI/UX",
    tone: "bg-gradient-cream",
    gallery: [donutPurple, donutGreen],
  },
  {
    title: "Air Jordan Mid SE Design",
    desc: "A clean and stylish e-commerce UI design for a women's sneaker product page.",
    img: jordanPink,
    tag: "UI/UX",
    tone: "bg-gradient-pink",
    gallery: [jordanPink, jordanAbu, jordanHijau],
  },
  {
    title: "Movie Design",
    desc: "A mobile app UI design for a movie ticketing platform with a sleek, modern layout.",
    img: bioskop1,
    tag: "UI/UX",
    tone: "bg-gradient-blue",
    gallery: [bioskop1, bioskop2],
  },
  {
    title: "Sinaw Design",
    desc: "A friendly and accessible e-learning app UI designed for seamless online learning experience.",
    img: sinaw1,
    tag: "UI/UX",
    tone: "bg-gradient-cream",
    gallery: [sinaw1, sinaw2, sinaw3, sinaw4],
  },
];

function PortfolioPage() {
  const [openGallery, setOpenGallery] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenGallery = (projectIndex: number) => {
    setOpenGallery(projectIndex);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    const gallery = projects[openGallery!].gallery;
    if (gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? gallery.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    const gallery = projects[openGallery!].gallery;
    if (gallery) {
      setCurrentImageIndex((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="px-4 py-12">
      <SectionHeader
        eyebrow="Portfolio"
        title="My little projects"
        subtitle="Beberapa karya kecil yang aku buat sambil belajar."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-transform hover:-translate-y-1 hover:shadow-cute group ${
              i < 2 ? "md:col-span-3" : "md:col-span-2"
            }`}
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
                onClick={() => p.gallery && handleOpenGallery(i)}
                className="mt-4 inline-flex items-center justify-center gap-1 self-start rounded-full bg-gradient-pink px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                View project
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Gallery Modal */}
      {openGallery !== null && projects[openGallery].gallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-card shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpenGallery(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main Image */}
            <div className={`relative w-full overflow-hidden bg-black ${
              openGallery === 4 
                ? "aspect-auto max-h-[90vh] flex items-center justify-center" 
                : "aspect-square md:aspect-auto md:max-h-[70vh]"
            }`}>
              <img
                src={projects[openGallery].gallery![currentImageIndex]}
                alt={`${projects[openGallery].title} - Image ${currentImageIndex + 1}`}
                className={`${
                  openGallery === 4 
                    ? "max-h-full max-w-full object-contain" 
                    : "h-full w-full object-contain"
                }`}
                width={openGallery === 4 ? 1080 : 768}
                height={openGallery === 4 ? 1350 : 576}
              />
            </div>

            {/* Navigation Buttons */}
            {projects[openGallery].gallery!.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image Counter and Thumbnails */}
            <div className="border-t border-border/60 bg-card px-4 py-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {currentImageIndex + 1} / {projects[openGallery].gallery!.length}
                </span>
              </div>
              {projects[openGallery].gallery!.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {projects[openGallery].gallery!.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        idx === currentImageIndex
                          ? "border-primary"
                          : "border-border/40"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
