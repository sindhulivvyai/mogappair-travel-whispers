import { Phone, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";

const EmergencyContacts = () => {
  const emergencyNumbers = [
    {
      service: "Ambulance",
      number: "108",
      description: "24/7 Emergency Medical Services"
    },
    {
      service: "Police",
      number: "100",
      description: "Chennai Police Emergency"
    },
    {
      service: "Fire Service",
      number: "101",
      description: "Fire & Rescue Services"
    },
    {
      service: "Women Helpline",
      number: "1091",
      description: "Women in Distress"
    }
  ];

  return (
    <section id="emergency" className="py-12 px-4 bg-muted/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <AlertCircle className="w-8 h-8 text-destructive" />
          <h2 className="text-3xl md:text-4xl text-center text-foreground">
            Emergency Contacts
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyNumbers.map((contact) => (
            <Card 
              key={contact.service}
              className="p-6 border-2 border-destructive/20 hover:border-destructive/40 transition-all hover:shadow-lg"
            >
              <div className="text-center space-y-4">
                <Phone className="w-8 h-8 text-destructive mx-auto" />
                <h3 className="text-xl font-bold text-foreground">
                  {contact.service}
                </h3>
                <a 
                  href={`tel:${contact.number}`}
                  className="block text-4xl font-bold text-destructive hover:text-destructive/80 transition-colors"
                >
                  {contact.number}
                </a>
                <p className="text-sm text-muted-foreground">
                  {contact.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Tap any number to call directly in case of emergency
        </p>
      </div>
    </section>
  );
};

export default EmergencyContacts;