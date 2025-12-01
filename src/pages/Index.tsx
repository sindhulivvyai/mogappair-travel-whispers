import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";
import { Features } from "@/components/Features";
import EmergencyContacts from "@/components/EmergencyContacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmergencyContacts />
      <ChatInterface />
      <Features />
    </div>
  );
};

export default Index;
