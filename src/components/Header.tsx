
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/placeholder.svg" 
            alt="Шахматёнок" 
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-chess-primary">Шахматёнок</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/rules" className="text-gray-700 hover:text-chess-primary transition-colors">
            Правила
          </Link>
          <Link to="/strategies" className="text-gray-700 hover:text-chess-primary transition-colors">
            Стратегии
          </Link>
          <Link to="/lessons" className="text-gray-700 hover:text-chess-primary transition-colors">
            Уроки
          </Link>
        </nav>
        
        <Button className="bg-chess-accent hover:bg-chess-accent/90 text-white">
          Начать учиться
        </Button>
      </div>
    </header>
  );
}
