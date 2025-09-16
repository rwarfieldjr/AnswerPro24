import IndustriesCards from '../IndustriesCards';

export default function IndustriesCardsExample() {
  return (
    <IndustriesCards onLearnMore={(slug) => console.log(`Learn more about ${slug}`)} />
  );
}