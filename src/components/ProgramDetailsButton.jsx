'use client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';          
import { ChevronRight } from 'lucide-react';
export default function ProgramDetailsButton({ preventNav = true }) {
  const handleClick = (e) => {
    if (preventNav) e.preventDefault();
    toast('Información reservada para fines prácticos y de desarrollo');
  };
  return (
    <Button
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={handleClick}
    >
      View Program Details
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
