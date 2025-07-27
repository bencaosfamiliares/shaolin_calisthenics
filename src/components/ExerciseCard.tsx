
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check, Play, RotateCcw, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExerciseCardProps {
  name: string;
  image: string;
  level: 'iniciante' | 'intermediário' | 'avançado';
  sets: number;
  reps: string;
  videoUrl?: string;
  completed?: boolean;
  onComplete?: () => void;
}

export default function ExerciseCard({ 
  name, 
  image, 
  level, 
  sets,
  reps, 
  videoUrl,
  completed = false, 
  onComplete 
}: ExerciseCardProps) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [showVideo, setShowVideo] = useState(false);

  const levelColors = {
    iniciante: 'bg-green-500/10 text-green-700 border-green-200',
    intermediário: 'bg-yellow-500/10 text-yellow-700 border-yellow-200',
    avançado: 'bg-red-500/10 text-red-700 border-red-200',
  };

  const handleComplete = () => {
    setIsCompleted(true);
    onComplete?.();
  };

  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getYouTubeId = () => {
    if (!videoUrl) return 'dQw4w9WgXcQ'; // fallback
    return extractYouTubeId(videoUrl) || 'dQw4w9WgXcQ';
  };

  return (
    <>
      <Card className={cn(
        "overflow-hidden shadow-card transition-smooth hover:shadow-lg",
        isCompleted && "opacity-75"
      )}>
        <div className="relative group">
          <img 
            src={image} 
            alt={name}
            className="w-full h-56 object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <Button
              size="sm"
              variant="secondary"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white text-black rounded-full p-3"
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-5 h-5 fill-current" />
            </Button>
          </div>

          {/* Completion Check */}
          {isCompleted && (
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <div className="bg-primary rounded-full p-3">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
          )}
        </div>
        
        <CardContent className="p-4 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg leading-tight">{name}</h3>
              <Badge className={`${levelColors[level]} font-medium px-2 py-1`}>
                {level}
              </Badge>
            </div>
            
            {/* Exercise Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2">
                <RotateCcw className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Séries</div>
                  <div className="font-bold text-sm">{sets}x</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Repetições</div>
                  <div className="font-bold text-sm">{reps}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Progress value={isCompleted ? 100 : 0} className="h-2" />
            <Button 
              size="full" 
              variant={isCompleted ? "secondary" : "default"}
              onClick={handleComplete}
              disabled={isCompleted}
              className="font-medium"
            >
              {isCompleted ? "✓ Concluído" : "Concluir Exercício"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* YouTube Video Dialog */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYouTubeId()}?autoplay=1`}
              title={name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
