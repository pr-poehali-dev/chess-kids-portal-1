
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-chess-dark">
            Увлекательный мир шахмат <span className="text-chess-primary">для детей</span>
          </h1>
          <p className="text-lg text-gray-600">
            Изучайте правила, осваивайте стратегии и становитесь настоящими шахматными чемпионами
            с помощью наших интерактивных уроков!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-chess-primary hover:bg-chess-primary/90">
              <Link to="/lessons">Начать обучение</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary/10">
              <Link to="/rules">Узнать правила</Link>
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>Более 1000 довольных юных шахматистов!</span>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="animate-float">
            <img 
              src="/placeholder.svg" 
              alt="Шахматы для детей" 
              className="rounded-lg shadow-xl" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
            <span className="text-3xl">♟️ ♞</span>
          </div>
        </div>
      </div>
    </div>
  );
}
