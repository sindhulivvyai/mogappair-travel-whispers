import { Card } from "@/components/ui/card";
import { Brain, Navigation, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations based on your preferences and local expertise",
  },
  {
    icon: Navigation,
    title: "Local Navigation",
    description: "Discover the best routes and transportation options in Mogappair",
  },
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "Uncover hidden gems and authentic local spots loved by residents",
  },
  {
    icon: Shield,
    title: "Trusted Advice",
    description: "Reliable information curated from local knowledge and verified sources",
  },
];

export const Features = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground">Your perfect companion for exploring Mogappair</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 group"
            >
              <div className="p-3 rounded-lg bg-gradient-hero w-fit mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
