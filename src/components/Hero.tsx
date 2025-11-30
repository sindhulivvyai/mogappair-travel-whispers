import { MapPin } from "lucide-react";
import heroImage from "@/assets/mogappair-hero.jpg";

export const Hero = () => {
  return (
    <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm border border-white/20 mb-6">
            <MapPin className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Mogappair, Chennai</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-2xl">
            Sindhu's travel guide for Mogappair
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium drop-shadow-lg">
            Discover hidden gems, authentic experiences, and insider tips powered by AI
          </p>
        </div>
      </div>
    </div>
  );
};
