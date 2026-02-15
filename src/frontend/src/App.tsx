import { useState } from 'react';
import Hero from './components/marketing/Hero';
import WorkoutStyles from './components/marketing/WorkoutStyles';
import HolisticSection from './components/marketing/HolisticSection';
import TonicCafeSection from './components/marketing/TonicCafeSection';
import AccountSection from './components/account/AccountSection';
import TonicAccessPass from './components/pass/TonicAccessPass';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

type View = 'home' | 'account' | 'pass';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero />
            <WorkoutStyles />
            <HolisticSection />
            <TonicCafeSection />
          </>
        )}
        
        {currentView === 'account' && <AccountSection />}
        
        {currentView === 'pass' && <TonicAccessPass />}
      </main>

      <Footer />
    </div>
  );
}

