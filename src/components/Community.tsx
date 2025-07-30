import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Globe, BookOpen } from 'lucide-react';

export const Community = () => {
  const features = [
    {
      icon: Heart,
      title: "Inner Well-being",
      description: "Empowering children with indestructible tools to promote mental and emotional health through African wisdom.",
      color: "bg-gradient-heritage"
    },
    {
      icon: Users,
      title: "Welcoming Community",
      description: "Join families worldwide who are committed to raising culturally aware and emotionally intelligent children.",
      color: "bg-gradient-savanna"
    },
    {
      icon: Globe,
      title: "Global Citizens",
      description: "Preparing the next generation to navigate the world with confidence, wisdom, and cultural appreciation.",
      color: "bg-gradient-earth"
    },
    {
      icon: BookOpen,
      title: "Ancient Wisdom",
      description: "Connecting modern children to timeless African knowledge and values that have guided humanity for millennia.",
      color: "bg-gradient-sunset"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground font-ubuntu max-w-4xl mx-auto leading-relaxed">
            Joining the Bokobokids movement means joining a welcoming community of families who desire 
            to empower children with indestructible tools to promote inner well being.
          </p>
        </div>

        {/* Quote Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-warm">
            <CardContent className="p-8 md:p-12 text-center">
              <blockquote className="font-playfair text-2xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                "If it takes a village to raise a child, it will take a Bokobokids village to raise 
                the next generation of global citizens."
              </blockquote>
              <cite className="text-muted-foreground font-ubuntu text-lg">
                — Bokobokids Village Philosophy
              </cite>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-warm transition-all duration-500 hover:-translate-y-2 border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-ubuntu leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-background to-muted rounded-2xl shadow-deep border border-primary/20">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Ready to Begin the Journey?
            </h3>
            <p className="text-muted-foreground font-ubuntu mb-6 max-w-2xl">
              Start your family's journey into African wisdom and cultural empowerment. 
              Together, we'll build a stronger future for our children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="font-ubuntu">
                Join Our Community
              </Button>
              <Button variant="savanna" size="lg" className="font-ubuntu">
                Explore Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};