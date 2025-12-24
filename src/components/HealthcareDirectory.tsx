import { Hospital, Stethoscope, Pill, Phone, MapPin, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const HealthcareDirectory = () => {
  const hospitals = [
    {
      name: "Apollo Clinic",
      address: "Mogappair West, Chennai - 600037",
      phone: "+91 44 2656 5000",
      specialties: "General Medicine, Pediatrics, Cardiology",
      hours: "24/7 Emergency Services"
    },
    {
      name: "Vijaya Health Centre",
      address: "Ambattur-Padi Road, Near Mogappair, Chennai - 600050",
      phone: "+91 44 2656 4000",
      specialties: "Multi-specialty, ICU, Laboratory",
      hours: "Open 24 hours"
    },
    {
      name: "Sri Ramachandra Medical Centre",
      address: "Mogappair East, Chennai - 600037",
      phone: "+91 44 2656 7000",
      specialties: "Orthopaedics, Neurology, General Surgery",
      hours: "8:00 AM - 10:00 PM"
    },
    {
      name: "Medway Hospital",
      address: "Ambattur Industrial Estate Road, Near Mogappair",
      phone: "+91 44 2656 8000",
      specialties: "Emergency Care, Diagnostics, Pharmacy",
      hours: "24/7 Services"
    }
  ];

  const clinics = [
    {
      name: "Dr. Kumar's Family Clinic",
      address: "Mogappair East Main Road, Chennai - 600037",
      phone: "+91 44 2656 1234",
      specialties: "General Physician, Vaccination",
      hours: "9:00 AM - 9:00 PM"
    },
    {
      name: "Mogappair Dental Care",
      address: "Everest Colony, Mogappair East, Chennai",
      phone: "+91 44 2656 2345",
      specialties: "Dental Care, Orthodontics, Root Canal",
      hours: "10:00 AM - 8:00 PM"
    },
    {
      name: "Children's Health Clinic",
      address: "Mogappair West, Chennai - 600037",
      phone: "+91 44 2656 3456",
      specialties: "Pediatrics, Child Vaccination, Growth Monitoring",
      hours: "9:00 AM - 7:00 PM (Closed Sunday)"
    },
    {
      name: "Eye Care Centre",
      address: "Pari Road, Mogappair East, Chennai",
      phone: "+91 44 2656 4567",
      specialties: "Ophthalmology, Eye Testing, Contact Lenses",
      hours: "10:00 AM - 8:00 PM"
    }
  ];

  const pharmacies = [
    {
      name: "Apollo Pharmacy",
      address: "Mogappair West Main Road, Chennai - 600037",
      phone: "+91 44 2656 5678",
      specialties: "Prescription Medicines, OTC, Home Delivery",
      hours: "24/7 Open"
    },
    {
      name: "MedPlus",
      address: "Mogappair East, Near Bus Stop, Chennai",
      phone: "+91 44 2656 6789",
      specialties: "Generic Medicines, Health Supplements, Medical Devices",
      hours: "8:00 AM - 11:00 PM"
    },
    {
      name: "Netmeds Pharmacy",
      address: "Ambattur-Mogappair Link Road, Chennai",
      phone: "+91 44 2656 7890",
      specialties: "Online Orders, Quick Delivery, Health Products",
      hours: "9:00 AM - 10:00 PM"
    },
    {
      name: "Guardian Pharmacy",
      address: "Everest Colony, Mogappair East, Chennai",
      phone: "+91 44 2656 8901",
      specialties: "Prescription Drugs, Baby Care, First Aid",
      hours: "8:00 AM - 10:00 PM"
    }
  ];

  const renderCard = (item: typeof hospitals[0], icon: React.ReactNode) => (
    <Card key={item.name} className="p-6 hover:shadow-lg transition-all border-border">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>{item.address}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
              <a 
                href={`tel:${item.phone}`}
                className="text-secondary hover:text-secondary/80 transition-colors font-medium"
              >
                {item.phone}
              </a>
            </div>
            
            <div className="flex items-start gap-2 text-muted-foreground">
              <Stethoscope className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
              <span>{item.specialties}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{item.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="healthcare" className="py-16 px-4 bg-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Hospital className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl text-foreground">
              Healthcare Directory
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find trusted hospitals, clinics, and pharmacies in Mogappair with contact details and specialties
          </p>
        </div>

        <Tabs defaultValue="hospitals" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="hospitals" className="flex items-center gap-2">
              <Hospital className="w-4 h-4" />
              <span className="hidden sm:inline">Hospitals</span>
            </TabsTrigger>
            <TabsTrigger value="clinics" className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              <span className="hidden sm:inline">Clinics</span>
            </TabsTrigger>
            <TabsTrigger value="pharmacies" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              <span className="hidden sm:inline">Pharmacies</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hospitals" className="space-y-4">
            {hospitals.map(hospital => renderCard(hospital, 
              <Hospital className="w-8 h-8 text-primary" />
            ))}
          </TabsContent>

          <TabsContent value="clinics" className="space-y-4">
            {clinics.map(clinic => renderCard(clinic, 
              <Stethoscope className="w-8 h-8 text-secondary" />
            ))}
          </TabsContent>

          <TabsContent value="pharmacies" className="space-y-4">
            {pharmacies.map(pharmacy => renderCard(pharmacy, 
              <Pill className="w-8 h-8 text-accent" />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HealthcareDirectory;