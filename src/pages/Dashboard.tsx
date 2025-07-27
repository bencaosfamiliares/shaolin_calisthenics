
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronRight } from 'lucide-react';
import ExerciseCard from '@/components/ExerciseCard';
import LockedDayCard from '@/components/LockedDayCard';
import BottomNavigation from '@/components/BottomNavigation';
import dashboardBanner from '@/assets/dashboard-banner.jpg';
import pushupImg from '@/assets/exercise-pushup.jpg';
import pullupImg from '@/assets/exercise-pullup.jpg';
import squatImg from '@/assets/exercise-squat.jpg';
import martialArts1 from '@/assets/martial-arts-1.jpg';
import martialArts2 from '@/assets/martial-arts-2.jpg';
import martialArts3 from '@/assets/martial-arts-3.jpg';
import martialArts4 from '@/assets/martial-arts-4.jpg';
import martialArts5 from '@/assets/martial-arts-5.jpg';
import martialArts6 from '@/assets/martial-arts-6.jpg';
import martialArts7 from '@/assets/martial-arts-7.jpg';
import martialArts8 from '@/assets/martial-arts-8.jpg';
import martialArts9New from '@/assets/martial-arts-9-new.jpg';
import martialArts10 from '@/assets/martial-arts-10.jpg';
import martialArts11 from '@/assets/martial-arts-11.jpg';
import martialArts12 from '@/assets/martial-arts-12.jpg';
import martialArts13 from '@/assets/martial-arts-13.jpg';

const workoutSchedule = [
  {
    "day": 1,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 1",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=HiHa2YqRCyA"
      }
    ]
  },
  {
    "day": 2,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 2",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=y1jlI6R3160"
      }
    ]
  },
  {
    "day": 3,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 3",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=9OCqWQUuJo8"
      }
    ]
  },
  {
    "day": 4,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 4",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=MV3VtuohKLw"
      }
    ]
  },
  {
    "day": 5,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 5",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=ag1AgFPp7M0"
      }
    ]
  },
  {
    "day": 6,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 6",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=0lTRZXI6d0g"
      }
    ]
  },
  {
    "day": 7,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 7",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=6lFb5_sDWMw"
      }
    ]
  },
  {
    "day": 8,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 8",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=sy8SIK_U2gk"
      }
    ]
  },
  {
    "day": 9,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício do Dia 9",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=m1Qv1BhTWh4"
      }
    ]
  },
  {
    "day": 10,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício 1",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=qiwYmr2oQDs"
      },
      {
        "name": "Exercício 2",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=INiEKn6nQ5g"
      },
      {
        "name": "Exercício 3",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=XNvjQ3_iHF0"
      },
      {
        "name": "Exercício 4",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=A5fh6LrhikY"
      },
      {
        "name": "Exercício 5",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=_QF245606LU"
      }
    ]
  },
  {
    "day": 11,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício 1",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=slDid9LaMxo"
      },
      {
        "name": "Exercício 2",
        "sets": 3,
        "reps": "10-15",
        "video": "https://www.youtube.com/watch?v=NH3LCrRnxSU"
      },
      {
        "name": "Exercício 3",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/lDomJrQl5wY"
      },
      {
        "name": "Exercício 4",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/5FGNPPJbKHs"
      },
      {
        "name": "Exercício 5",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/2UnYpzQcMw4"
      }
    ]
  },
  {
    "day": 12,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício 1",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/nPlN1HCdNi4"
      },
      {
        "name": "Exercício 2",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/QkSTpCqPWcE"
      },
      {
        "name": "Exercício 3",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/-ikIj1HgsSA"
      },
      {
        "name": "Exercício 4",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/KCYvfzrECDE"
      },
      {
        "name": "Exercício 5",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/dlTFjmCzCus"
      }
    ]
  },
  {
    "day": 13,
    "locked": false,
    "exercises": [
      {
        "name": "Exercício 1",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/ltwo-dCHYbY"
      },
      {
        "name": "Exercício 2",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/PJE6iyUaanw"
      },
      {
        "name": "Exercício 3",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/w-8sdCrPrIA"
      },
      {
        "name": "Exercício 4",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/3nwWgRXhKoc"
      },
      {
        "name": "Exercício 5",
        "sets": 3,
        "reps": "10-15",
        "video": "https://youtu.be/Gqvbq3-jJo8"
      }
    ]
  }
];

const getExerciseImage = (exerciseName: string, day?: number, exerciseIndex?: number) => {
  // Use martial arts images for days 1-7
  if (day && day >= 1 && day <= 7) {
    const martialArtsImages = [martialArts1, martialArts2, martialArts3, martialArts4, martialArts5, martialArts6, martialArts7];
    return martialArtsImages[day - 1];
  }
  
  // For day 8, use a specific martial arts image
  if (day === 8) {
    return martialArts8;
  }
  
  // For day 9, use the new martial arts image
  if (day === 9) {
    return martialArts9New;
  }
  
  // For days 10-13, intercalate using ALL 13 martial arts images with exercise images
  if (day && day >= 10 && day <= 13) {
    const allMartialArtsImages = [
      martialArts1, martialArts2, martialArts3, martialArts4, martialArts5, martialArts6, martialArts7,
      martialArts8, martialArts9New, martialArts10, martialArts11, martialArts12, martialArts13
    ];
    const allExerciseImages = [pushupImg, pullupImg, squatImg];
    
    // Create a combined array that intercalates all martial arts images with exercise images
    const combinedImages = [];
    const maxLength = Math.max(allMartialArtsImages.length * 2, allExerciseImages.length * 4);
    
    for (let i = 0; i < maxLength; i++) {
      if (i % 3 === 0 && allMartialArtsImages[Math.floor(i / 3)]) {
        // Every 3rd position, use a martial arts image
        combinedImages.push(allMartialArtsImages[Math.floor(i / 3)]);
      } else {
        // Other positions, use exercise images
        const exerciseIndex = Math.floor(i / 3) % allExerciseImages.length;
        combinedImages.push(allExerciseImages[exerciseIndex]);
      }
    }
    
    // Use exerciseIndex if provided to get varied images for multiple exercises per day
    const imageIndex = exerciseIndex !== undefined ? exerciseIndex % combinedImages.length : 0;
    return combinedImages[imageIndex];
  }
  
  // Default logic for other days
  const name = exerciseName.toLowerCase();
  if (name.includes('push') || name.includes('dips')) return pushupImg;
  if (name.includes('pull') || name.includes('australiana') || name.includes('chin')) return pullupImg;
  return squatImg;
};

const getExerciseLevel = () => {
  return 'intermediário' as const;
};

const extractYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function Dashboard() {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  const handleExerciseComplete = (exerciseId: number) => {
    setCompletedExercises(prev => [...prev, exerciseId]);
  };

  const currentWorkout = workoutSchedule.find(w => w.day === currentDay);
  const currentExercises = currentWorkout?.exercises || [];
  const isCurrentDayLocked = currentDay > 13;

  const handleFinishWorkout = () => {
    if (completedExercises.length === currentExercises.length && !isCurrentDayLocked) {
      setCompletedDays(prev => [...prev, currentDay]);
      setCompletedExercises([]);
      // Navegar para o próximo dia se não for o último e não estiver bloqueado
      if (currentDay < 13) {
        setCurrentDay(prev => prev + 1);
      }
    }
  };

  const totalProgress = (completedDays.length / 13) * 100;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Marketing Banner */}
      <div className="p-4">
        <div 
          className="relative overflow-hidden rounded-2xl cursor-pointer group transition-transform duration-300 hover:scale-105"
          onClick={() => window.open('https://example.com/produto-complementar', '_blank')}
        >
          {/* Background Image */}
          <div className="relative h-64 w-full">
            <img 
              src={dashboardBanner}
              alt="Produto Complementar"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            {/* Title */}
            <div className="flex-1 flex items-center">
              <h2 className="text-white text-2xl font-bold leading-tight max-w-48">
                Acelere Seus Resultados
              </h2>
            </div>

            {/* Button */}
            <div className="flex justify-start">
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: '#BBF246' }}
              >
                <span>Compre já</span>
                <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Day Carousel */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Dias do Desafio</h2>
          
          <div className="rounded-lg">
            <div 
              className="flex gap-2 px-2 py-2 overflow-x-auto"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
              {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                const isLocked = day > 13;
                return (
                  <button
                    key={day}
                    onClick={() => !isLocked && setCurrentDay(day)}
                    className={`
                      flex flex-col items-center justify-center 
                      w-12 h-16 
                      rounded-lg 
                      font-semibold 
                      transition-all duration-200 
                      hover:scale-105 
                      flex-shrink-0
                      ${isLocked 
                        ? 'bg-muted text-muted-foreground opacity-50 cursor-not-allowed' 
                        : day === currentDay 
                          ? 'bg-secondary text-secondary-foreground shadow-lg' 
                          : 'bg-primary text-primary-foreground hover:opacity-80'
                      }
                      ${completedDays.includes(day) ? 'ring-2 ring-primary' : ''}
                    `}
                    title={isLocked ? `Dia ${day} - Bloqueado` : `Dia ${day}`}
                    disabled={isLocked}
                  >
                    <span className="text-xs font-bold">DIA</span>
                    <span className="text-lg font-bold">{day}</span>
                    {completedDays.includes(day) && (
                      <span className="text-xs mt-1">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Current Day Exercises */}
        <div className="space-y-4">
          {isCurrentDayLocked ? (
            <div className="text-center space-y-4">
              <LockedDayCard dayNumber={currentDay} />
            </div>
          ) : (
            <>
              <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold">Dia {currentDay}</h2>
                <h3 className="text-lg text-primary font-medium">Treino de Calistenia</h3>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {currentExercises.length} {currentExercises.length === 1 ? 'Exercício' : 'Exercícios'}
                </div>
              </div>
              
              <div className="grid gap-4">
                {currentExercises.map((exercise, index) => (
                  <ExerciseCard
                    key={`${currentDay}-${index}`}
                    name={exercise.name}
                    image={getExerciseImage(exercise.name, currentDay, index)}
                    level={getExerciseLevel()}
                    sets={exercise.sets}
                    reps={exercise.reps}
                    videoUrl={exercise.video}
                    completed={completedExercises.includes(index)}
                    onComplete={() => handleExerciseComplete(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Finish Workout Button */}
        {!isCurrentDayLocked && (
          <Button 
            size="full" 
            variant="premium"
            onClick={handleFinishWorkout}
            disabled={completedExercises.length !== currentExercises.length}
            className="mt-6"
          >
            Finalizar Treino do Dia {currentDay}
          </Button>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
}
