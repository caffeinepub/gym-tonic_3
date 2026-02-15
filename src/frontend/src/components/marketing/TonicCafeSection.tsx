import Section from './Section';
import { Coffee, Clock, Utensils, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Premium Nutrition',
    description: 'Protein shakes, smoothies, healthy meals, and specialty coffee.',
  },
  {
    icon: Clock,
    title: 'Full-Time Access',
    description: 'Open whenever the gym is—your membership includes unlimited cafe access.',
  },
  {
    icon: Utensils,
    title: 'Post-Workout Fuel',
    description: 'Refuel immediately after training with optimized recovery nutrition.',
  },
  {
    icon: Sparkles,
    title: 'Community Space',
    description: 'Connect with fellow members in a comfortable, welcoming environment.',
  },
];

export default function TonicCafeSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-muted/30">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <Coffee className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Tonic Cafe
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your membership includes full-time access to our exclusive in-house cafe. Train, refuel, and connect—all in one place.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-3">Members-Only Benefit</h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tonic is exclusively available to Gym & Tonic members. Your membership unlocks unlimited access to premium nutrition and a vibrant community space.
        </p>
      </div>
    </Section>
  );
}

