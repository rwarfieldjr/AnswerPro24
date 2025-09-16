import PricingCards from '../PricingCards';

export default function PricingCardsExample() {
  return (
    <PricingCards onPlanSelect={(plan) => console.log(`Selected plan: ${plan}`)} />
  );
}