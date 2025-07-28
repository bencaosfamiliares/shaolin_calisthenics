import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import onboardingBg from '@/assets/onboarding-bg.jpg';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${onboardingBg})` }}
      >
        <div className="absolute inset-0 bg-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen p-6 pb-12">
        <div className="text-center text-white space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fique em forma em até 28 Dias fazendo o {' '}
              <span className="text-primary">desafio da Calistenia sem sair de casa!</span>
            </h1>
          </div>

          <Button 
            size="full" 
            variant="premium"
            onClick={() => navigate('/login')}
            className="mt-8"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}