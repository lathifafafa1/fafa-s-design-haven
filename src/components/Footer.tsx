import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  const whatsappNumber = "6288806455040";
  const defaultMessage = "Halo Fafa, saya melihat portofolio Anda dan tertarik untuk bekerja sama.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <footer className="mt-20 px-4 pb-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-cream p-8 text-center shadow-soft md:p-10">
        <div className="mx-auto max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3.5 py-1 text-xs font-medium text-foreground/80 shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Let's create something together!
          </span>

          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Tertarik berkolaborasi?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            Punya ide proyek, diskusi UI/UX, atau tawaran kerja sama? Hubungi saya langsung melalui WhatsApp!
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Fafa via WhatsApp"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-cute transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20ba59] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2"
            >
              <svg
                className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.488-8.414z" />
              </svg>
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>by Fafa · {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
