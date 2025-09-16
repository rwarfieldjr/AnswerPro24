import CallToAction from '../CallToAction';

export default function CallToActionExample() {
  return (
    <CallToAction onStartTrial={() => console.log('Start trial clicked')} />
  );
}