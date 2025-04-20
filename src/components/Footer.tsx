
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-chess-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-chess-primary">Шахматёнок</span>
            </h3>
            <p className="text-gray-300">
              Делаем обучение шахматам увлекательным и доступным для детей всех возрастов.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-chess-primary">Обучение</h4>
            <ul className="space-y-2">
              <li><Link to="/rules" className="text-gray-300 hover:text-white">Правила игры</Link></li>
              <li><Link to="/strategies" className="text-gray-300 hover:text-white">Стратегии</Link></li>
              <li><Link to="/lessons" className="text-gray-300 hover:text-white">Уроки</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-chess-primary">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">О нас</Link></li>
              <li><Link to="/contacts" className="text-gray-300 hover:text-white">Контакты</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">Частые вопросы</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-chess-primary">Связаться с нами</h4>
            <p className="text-gray-300 mb-2">info@chessforchildren.ru</p>
            <p className="text-gray-300">+7 (999) 123-45-67</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2023 Шахматёнок. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
