import { useState } from 'react';
import LeadFormModal from '../LeadFormModal';
import { Button } from '@/components/ui/button';

export default function LeadFormModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 space-y-4">
      <Button onClick={() => setIsOpen(true)}>
        Open Lead Form Modal
      </Button>
      <LeadFormModal open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
}