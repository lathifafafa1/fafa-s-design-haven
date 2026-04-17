import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 px-4 pb-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-cream p-6 text-center shadow-soft">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Made with</span>
          <Heart className="h-4 w-4 fill-primary text-primary" />
          <span>by Fafa · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
