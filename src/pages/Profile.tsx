import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Settings, Trophy, Calendar, Target, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
export default function Profile() {
  const navigate = useNavigate();
  const userStats = {
    completedDays: 15,
    totalDays: 28,
    currentStreak: 7,
    totalWorkouts: 45,
    achievements: 8
  };
  const achievements = [{
    title: 'Primeira Semana',
    description: '7 dias consecutivos',
    icon: '🔥'
  }, {
    title: 'Push-up Master',
    description: '100 push-ups completados',
    icon: '💪'
  }, {
    title: 'Dedicação',
    description: '15 dias de treino',
    icon: '⭐'
  }, {
    title: 'Consistência',
    description: '7 dias seguidos',
    icon: '🎯'
  }];
  const handleLogout = () => {
    // Simular logout e navegar para login
    navigate('/login');
  };
  return <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-white border-b border-border p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Perfil</h1>
          
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* User Info */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl">JS</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h2 className="text-xl font-bold">João Silva</h2>
                <p className="text-muted-foreground">joao@email.com</p>
                <Badge variant="secondary" className="mt-2">
                  Atleta Iniciante
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Stats */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Progresso do Desafio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Dias Completados</span>
                <span>{userStats.completedDays}/{userStats.totalDays}</span>
              </div>
              <Progress value={userStats.completedDays / userStats.totalDays * 100} />
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{userStats.currentStreak}</div>
                <div className="text-xs text-muted-foreground">Sequência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{userStats.totalWorkouts}</div>
                <div className="text-xs text-muted-foreground">Treinos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{userStats.achievements}</div>
                <div className="text-xs text-muted-foreground">Conquistas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Conquistas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {achievements.map((achievement, index) => <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-secondary/50">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-3">
          
          
          <Button variant="outline" size="full" className="justify-start text-destructive">
            Sair da Conta
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>;
}