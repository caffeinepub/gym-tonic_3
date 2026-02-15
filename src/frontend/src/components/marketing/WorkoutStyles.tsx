import Section from './Section';
import { Dumbbell, Activity, Waves, Coffee } from 'lucide-react';

const workoutTypes = [
  {
    icon: Dumbbell,
    title: 'Weight Training',
    description: 'State-of-the-art equipment for strength building and muscle development.',
  },
  {
    icon: Activity,
    title: 'Calisthenics',
    description: 'Master bodyweight movements with dedicated spaces and expert coaching.',
  },
  {
    icon: Waves,
    title: 'Cardio & Rowing',
    description: 'High-intensity cardio zones featuring premium rowing machines and more.',
  },
  {
    icon: Coffee,
    title: 'Tonic Cafe',
    description: 'Members-only cafe access for post-workout nutrition and community.',
  },
];

export default function WorkoutStyles() {
  return (
    <Section className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Train Your Way
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From weights to bodyweight, cardio to recovery—we support every aspect of your fitness journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workoutTypes.map((workout, index) => {
          const Icon = workout.icon;
          return (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-soft"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{workout.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {workout.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

