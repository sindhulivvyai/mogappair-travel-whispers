import { Utensils, MapPin, Hotel, Bus, ShoppingBag, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { icon: Utensils, text: "Best restaurants", query: "What are the best restaurants in Mogappair?", color: "text-orange-500" },
  { icon: MapPin, text: "Tourist attractions", query: "What are the top tourist attractions near Mogappair?", color: "text-primary" },
  { icon: Hotel, text: "Hotels near me", query: "Recommend good hotels near Mogappair", color: "text-blue-500" },
  { icon: Bus, text: "Transportation", query: "What are the transportation options in Mogappair?", color: "text-green-500" },
  { icon: ShoppingBag, text: "Shopping spots", query: "Where are the best places to shop in Mogappair?", color: "text-purple-500" },
  { icon: Stethoscope, text: "Hospitals nearby", query: "What are the top hospitals and clinics in Mogappair?", color: "text-red-500" },
];

interface QuickLinksProps {
  onQueryClick: (query: string) => void;
}

export const QuickLinks = ({ onQueryClick }: QuickLinksProps) => {
  const handleClick = (query: string) => {
    // Scroll to chat section
    const chatSection = document.getElementById("chat-section");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
    // Trigger the query after a short delay for scroll
    setTimeout(() => {
      onQueryClick(query);
    }, 300);
  };

  return (
    <section id="quick-links" className="py-12 px-4 bg-muted/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Quick Links</h2>
          <p className="text-muted-foreground">Click to instantly get information about Mogappair</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex flex-col items-center gap-3 h-auto py-6 px-4 hover:shadow-soft hover:border-primary/50 transition-all duration-300 group bg-background"
              onClick={() => handleClick(link.query)}
            >
              <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                <link.icon className={`w-6 h-6 ${link.color} group-hover:scale-110 transition-transform`} />
              </div>
              <span className="text-sm font-medium text-center">{link.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
