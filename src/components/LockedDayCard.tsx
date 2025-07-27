import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LockedDayCardProps {
  dayNumber: number;
}

export default function LockedDayCard({ dayNumber }: LockedDayCardProps) {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Conteúdo bloqueado",
      description: "Liberado em breve...",
      duration: 3000,
    });
  };

  return (
    <Card 
      className="overflow-hidden shadow-card transition-smooth hover:shadow-lg cursor-pointer opacity-60"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="w-full h-40 bg-muted/50 flex items-center justify-center">
          <Lock className="w-12 h-12 text-muted-foreground" />
        </div>
      </div>
      
      <CardContent className="p-4 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg leading-tight text-muted-foreground">
              Dia {dayNumber}
            </h3>
          </div>
          
          <div className="text-center py-4">
            <p className="text-muted-foreground text-sm">
              Liberado em breve...
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}