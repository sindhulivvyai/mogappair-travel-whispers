import { useState, useCallback } from "react";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { ChatInterface } from "@/components/ChatInterface";
import { Features } from "@/components/Features";
import EmergencyContacts from "@/components/EmergencyContacts";
import HealthcareDirectory from "@/components/HealthcareDirectory";
import { QuickLinks } from "@/components/QuickLinks";
import LocalEvents from "@/components/LocalEvents";
import WeatherWidget from "@/components/WeatherWidget";

const Index = () => {
  const [pendingQuery, setPendingQuery] = useState<string | undefined>();

  const handleQueryClick = useCallback((query: string) => {
    setPendingQuery(query);
  }, []);

  const handleQueryProcessed = useCallback(() => {
    setPendingQuery(undefined);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="max-w-md mx-auto px-4 -mt-8 mb-8 relative z-10">
        <WeatherWidget />
      </div>
      <EmergencyContacts />
      <HealthcareDirectory />
      <LocalEvents />
      <QuickLinks onQueryClick={handleQueryClick} />
      <div id="chat-section">
        <ChatInterface initialQuery={pendingQuery} onQueryProcessed={handleQueryProcessed} />
      </div>
      <Features />
    </div>
  );
};

export default Index;
