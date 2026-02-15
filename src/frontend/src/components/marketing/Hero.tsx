import Section from './Section';

export default function Hero() {
  return (
    <Section className="py-12 md:py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <img
              src="/assets/generated/gym-tonic-logo.dim_512x512.png"
              alt="Gym & Tonic Logo"
              className="h-20 w-20 object-contain mb-4"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            Gym & Tonic
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Where fitness meets community. Train hard, refuel right, and thrive together.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A holistic fitness experience combining world-class training facilities with our exclusive member cafe, <span className="font-semibold text-primary">Tonic</span>.
          </p>
        </div>
        
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-medium border border-border/50">
            <img
              src="/assets/generated/gym-tonic-hero.dim_1600x900.png"
              alt="Gym & Tonic Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

