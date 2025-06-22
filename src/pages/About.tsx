
import React, { useState } from 'react';
import AboutHeader from '@/components/about/AboutHeader';
import AboutHero from '@/components/about/AboutHero';
import AboutStats from '@/components/about/AboutStats';
import OurStory from '@/components/about/OurStory';
import OurJourneyTimeline from '@/components/about/OurJourneyTimeline';
import CoreValues from '@/components/about/CoreValues';
import TeamNetwork from '@/components/about/TeamNetwork';
import AboutCTA from '@/components/about/AboutCTA';
import AboutFooter from '@/components/about/AboutFooter';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <AboutHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <AboutHero />
      <AboutStats />
      <OurStory />
      <OurJourneyTimeline />
      <CoreValues />
      <TeamNetwork />
      <AboutCTA />
      <AboutFooter />
    </div>
  );
};

export default About;
