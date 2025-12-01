import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";
import { Features } from "@/components/Features";
import EmergencyContacts from "@/components/EmergencyContacts";
import HealthcareDirectory from "@/components/HealthcareDirectory";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmergencyContacts />
      <HealthcareDirectory />
      <ChatInterface />
      <Features />
    </div>
  );
};

export default Index;
