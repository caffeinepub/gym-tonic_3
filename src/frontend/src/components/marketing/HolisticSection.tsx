import Section from './Section';
import { Heart, Users, Sparkles } from 'lucide-react';

const principles = [
  {
    icon: Heart,
    title: 'Mind & Body',
    description: 'We believe fitness is more than physical—it\'s about mental clarity, emotional balance, and overall wellbeing.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Train alongside like-minded individuals who support, motivate, and celebrate your progress.',
  },
  {
    icon: Sparkles,
    title: 'Sustainable Growth',
    description: 'Build lasting habits through balanced training, proper nutrition, and adequate recovery.',
  },
];

export default function HolisticSection() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          A Holistic Approach
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Fitness isn't just about the workout—it's a lifestyle. We're here to support every dimension of your health.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

