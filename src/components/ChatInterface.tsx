import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Sparkles, MapPin, Coffee, ShoppingBag, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const suggestedQuestions = [
  { icon: MapPin, text: "Best places to visit in Mogappair", color: "text-primary" },
  { icon: Coffee, text: "Popular cafes and restaurants", color: "text-secondary" },
  { icon: ShoppingBag, text: "Local markets and shopping", color: "text-accent" },
  { icon: Utensils, text: "Must-try local cuisine", color: "text-primary" },
];

export const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    
    // Placeholder - will integrate with Lovable AI
    setTimeout(() => {
      toast({
        title: "Coming Soon!",
        description: "AI-powered travel tips will be available shortly.",
      });
      setIsLoading(false);
      setMessage("");
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="p-6 md:p-8 shadow-elevated bg-gradient-card border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-hero">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Ask Me Anything</h2>
            <p className="text-muted-foreground">Get personalized travel recommendations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {suggestedQuestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              className="justify-start h-auto py-3 px-4 hover:shadow-soft transition-all duration-300 group"
              onClick={() => handleSuggestionClick(suggestion.text)}
            >
              <suggestion.icon className={`w-5 h-5 mr-3 ${suggestion.color} group-hover:scale-110 transition-transform`} />
              <span className="text-left">{suggestion.text}</span>
            </Button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about places to visit, food recommendations, local tips..."
            className="min-h-[120px] resize-none border-border/50 focus:border-primary transition-colors"
          />
          
          <Button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity shadow-soft"
            size="lg"
          >
            {isLoading ? (
              <>
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                Thinking...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Get Travel Tips
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};
