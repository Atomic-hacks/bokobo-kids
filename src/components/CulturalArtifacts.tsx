import { useEffect, useRef } from 'react';
import artifactsImage from '@/assets/african-artifacts.jpg';
import patternsImage from '@/assets/african-patterns.jpg';
import floatingMask from '@/assets/floating-mask.png';

export const CulturalArtifacts = () => {
  const artifactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (artifactsRef.current) {
      observer.observe(artifactsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted pattern-tribal">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={artifactsRef} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
            Cultural Heritage
          </h2>
          <p className="text-xl text-muted-foreground font-ubuntu max-w-3xl mx-auto leading-relaxed">
            Explore the rich tapestry of African cultural artifacts that tell the stories of our ancestors 
            and inspire the next generation of global citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artifacts Showcase */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-deep">
              <img
                src={artifactsImage}
                alt="African Cultural Artifacts"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 animate-float">
                <img
                  src={floatingMask}
                  alt="Floating Mask"
                  className="w-20 h-20 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">Ancient Wisdom</h3>
                <p className="font-ubuntu text-white/90">Preserved through generations</p>
              </div>
            </div>

            {/* Patterns Overlay */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30 animate-rotate-gentle">
              <img
                src={patternsImage}
                alt="African Patterns"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-heritage rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <span className="text-white font-bold text-xl">🎭</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Sacred Masks & Sculptures
                  </h3>
                  <p className="text-muted-foreground font-ubuntu leading-relaxed">
                    Each mask tells a story, representing spirits, ancestors, and the deep connection 
                    between the physical and spiritual worlds in African culture.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-savanna rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <span className="text-white font-bold text-xl">🏺</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Traditional Pottery & Crafts
                  </h3>
                  <p className="text-muted-foreground font-ubuntu leading-relaxed">
                    Handcrafted vessels and tools that showcase the artistic mastery and practical 
                    wisdom of African artisans throughout history.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-earth rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <span className="text-white font-bold text-xl">🎵</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Musical Instruments
                  </h3>
                  <p className="text-muted-foreground font-ubuntu leading-relaxed">
                    Drums, flutes, and stringed instruments that carry the rhythms and melodies 
                    of African traditions, connecting hearts across continents.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <h4 className="font-playfair text-xl font-bold text-foreground mb-3">
                  Living Heritage
                </h4>
                <p className="text-muted-foreground font-ubuntu leading-relaxed">
                  These artifacts are not merely historical objects but living symbols of a rich 
                  cultural heritage that continues to inspire and educate children about their roots 
                  and the wisdom of their ancestors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};