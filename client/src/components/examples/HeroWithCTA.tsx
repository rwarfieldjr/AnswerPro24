import HeroWithCTA from '../HeroWithCTA';

export default function HeroWithCTAExample() {
  return (
    <HeroWithCTA 
      onStartTrial={() => console.log('Start trial clicked')} 
      onSeeHowItWorks={() => console.log('See how it works clicked')}
    />
  );
}