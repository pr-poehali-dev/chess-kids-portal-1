
import FeatureCard from "./FeatureCard";
import { BookOpen, Award, BookType, Users } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему дети любят наши уроки</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы разработали особый подход к обучению шахматам, который превращает сложную игру в увлекательное приключение
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Понятные правила" 
            icon={<BookOpen />}
          >
            <p className="text-gray-600">
              Объясняем правила шахмат простым языком с яркими иллюстрациями и интересными примерами, которые легко запомнить.
            </p>
          </FeatureCard>
          
          <FeatureCard 
            title="Увлекательные стратегии" 
            icon={<Award />}
          >
            <p className="text-gray-600">
              Раскрываем секреты шахматных стратегий через истории и сказки, помогая детям понять логику игры.
            </p>
          </FeatureCard>
          
          <FeatureCard 
            title="Интерактивные уроки" 
            icon={<BookType />}
          >
            <p className="text-gray-600">
              Каждый урок включает игровые элементы, задания и возможность практиковаться в безопасной среде.
            </p>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
