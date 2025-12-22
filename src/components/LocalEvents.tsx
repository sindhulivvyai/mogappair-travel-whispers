import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    name: "Pongal Festival Celebrations",
    date: "January 14-17, 2025",
    time: "9:00 AM - 9:00 PM",
    location: "Mogappair Golden Flats Ground",
    description: "Traditional Pongal celebrations with kolam competition, cultural programs, and traditional games.",
    category: "Festival",
    featured: true,
  },
  {
    id: 2,
    name: "Mogappair Annual Marathon",
    date: "February 2, 2025",
    time: "5:30 AM - 10:00 AM",
    location: "Starting from Anna Nagar Tower Park",
    description: "5K, 10K, and 21K marathon categories. Registration open for all age groups.",
    category: "Sports",
    featured: true,
  },
  {
    id: 3,
    name: "Street Food Festival",
    date: "February 15-16, 2025",
    time: "4:00 PM - 11:00 PM",
    location: "Mogappair West Main Road",
    description: "Experience the best street food from across Tamil Nadu with live music and entertainment.",
    category: "Food",
    featured: false,
  },
  {
    id: 4,
    name: "Classical Music Concert",
    date: "February 22, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Mogappair Community Hall",
    description: "Carnatic music concert featuring renowned artists. Free entry with prior registration.",
    category: "Cultural",
    featured: false,
  },
  {
    id: 5,
    name: "Summer Kids Camp",
    date: "April 15 - May 15, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Various locations in Mogappair",
    description: "Month-long summer camp with art, sports, music, and educational activities for children.",
    category: "Education",
    featured: false,
  },
  {
    id: 6,
    name: "Diwali Mela",
    date: "October 20-25, 2025",
    time: "5:00 PM - 10:00 PM",
    location: "Mogappair East Grounds",
    description: "Shopping mela with fireworks, food stalls, and Diwali special performances.",
    category: "Festival",
    featured: true,
  },
];

const categoryColors: Record<string, string> = {
  Festival: "bg-orange-500/10 text-orange-600 border-orange-200",
  Sports: "bg-green-500/10 text-green-600 border-green-200",
  Food: "bg-red-500/10 text-red-600 border-red-200",
  Cultural: "bg-purple-500/10 text-purple-600 border-purple-200",
  Education: "bg-blue-500/10 text-blue-600 border-blue-200",
};

const LocalEvents = () => {
  const featuredEvents = events.filter((e) => e.featured);
  const upcomingEvents = events.filter((e) => !e.featured);

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Local Events & Festivals</h2>
          <p className="text-muted-foreground">
            Stay updated with upcoming events and celebrations in Mogappair
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Ticket className="w-5 h-5 text-primary" />
            Featured Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-soft transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">{event.name}</CardTitle>
                    <Badge
                      variant="outline"
                      className={categoryColors[event.category]}
                    >
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            More Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-soft transition-all duration-300"
              >
                <CardContent className="pt-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium">{event.name}</h4>
                    <Badge
                      variant="outline"
                      className={`text-xs ${categoryColors[event.category]}`}
                    >
                      {event.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalEvents;
