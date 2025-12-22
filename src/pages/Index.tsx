import { useState, useCallback } from "react";
import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";
import { Features } from "@/components/Features";
import EmergencyContacts from "@/components/EmergencyContacts";
import HealthcareDirectory from "@/components/HealthcareDirectory";
import { QuickLinks } from "@/components/QuickLinks";
import LocalEvents from "@/components/LocalEvents";

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
      <Hero />
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
