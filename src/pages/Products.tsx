import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Star } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';
import dashboardBanner from '@/assets/dashboard-banner.jpg';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  locked: boolean;
  rating?: number;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Plano Premium',
    description: 'Acesso a exercícios avançados e planos personalizados',
    price: 'R$ 29,90/mês',
    image: dashboardBanner,
    locked: false,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Nutrição Esportiva',
    description: 'Guia completo de alimentação para atletas',
    price: 'R$ 19,90',
    image: dashboardBanner,
    locked: true,
  },
  {
    id: 3,
    title: 'Treino Avançado',
    description: 'Programa de 90 dias para atletas experientes',
    price: 'R$ 49,90',
    image: dashboardBanner,
    locked: true,
  },
  {
    id: 4,
    title: 'Flexibilidade Total',
    description: 'Rotina completa de alongamento e mobilidade',
    price: 'R$ 24,90',
    image: dashboardBanner,
    locked: false,
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Mindset Atlético',
    description: 'Desenvolva a mentalidade de um atleta de elite',
    price: 'R$ 34,90',
    image: dashboardBanner,
    locked: true,
  },
  {
    id: 6,
    title: 'Recuperação Ativa',
    description: 'Técnicas de recuperação e prevenção de lesões',
    price: 'R$ 27,90',
    image: dashboardBanner,
    locked: true,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Banner */}
      <div className="relative">
        <div 
          className="h-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${dashboardBanner})` }}
        >
          <div className="absolute inset-0 bg-dark/40" />
        </div>
        
        <div className="absolute bottom-4 left-6 right-6 text-white">
          <h1 className="text-xl font-bold">
            Melhore ainda mais seu shape
          </h1>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className={`relative overflow-hidden shadow-card transition-smooth hover:shadow-lg ${
                product.locked ? 'opacity-60' : ''
              }`}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-32 object-cover"
                />
                
                {product.locked && (
                  <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                
                {product.rating && !product.locked && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {product.rating}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                  
                  <Button 
                    size="sm"
                    variant={product.locked ? "secondary" : "default"}
                    disabled={product.locked}
                  >
                    {product.locked ? "Bloqueado" : "Comprar"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}