
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Star, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

const LessonsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="bg-chess-primary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6">Интерактивные уроки</h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-700">
              Изучайте шахматы в игровой форме с нашими интерактивными уроками для детей разного уровня подготовки
            </p>
          </div>
        </section>
        
        {/* Фильтры уроков */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="beginner" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="beginner" className="text-sm md:text-base">Начинающие</TabsTrigger>
                  <TabsTrigger value="intermediate" className="text-sm md:text-base">Средний уровень</TabsTrigger>
                  <TabsTrigger value="advanced" className="text-sm md:text-base">Продвинутые</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Уроки для начинающих */}
              <TabsContent value="beginner">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <LessonCard
                    title="Знакомство с шахматами"
                    description="Знакомство с шахматной доской и фигурами"
                    lesson={1}
                    isCompleted={true}
                    duration="15 минут"
                  />
                  
                  <LessonCard
                    title="Ходы пешки"
                    description="Как ходит пешка и как она превращается в другую фигуру"
                    lesson={2}
                    isCompleted={true}
                    duration="10 минут"
                  />
                  
                  <LessonCard
                    title="Ходы ладьи"
                    description="Как ходит ладья и какие у неё возможности"
                    lesson={3}
                    isActive={true}
                    duration="12 минут"
                  />
                  
                  <LessonCard
                    title="Ходы слона"
                    description="Изучаем диагональные ходы слона"
                    lesson={4}
                    isLocked={true}
                    duration="12 минут"
                  />
                  
                  <LessonCard
                    title="Ходы коня"
                    description="Учимся ходить конём буквой 'Г'"
                    lesson={5}
                    isLocked={true}
                    duration="15 минут"
                  />
                  
                  <LessonCard
                    title="Ходы ферзя"
                    description="Почему ферзь — самая сильная фигура в шахматах"
                    lesson={6}
                    isLocked={true}
                    duration="10 минут"
                  />
                </div>
              </TabsContent>
              
              {/* Уроки среднего уровня */}
              <TabsContent value="intermediate">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <LessonCard
                    title="Шах и мат"
                    description="Что такое шах и мат и как их поставить"
                    lesson={1}
                    isLocked={true}
                    duration="15 минут"
                  />
                  
                  <LessonCard
                    title="Рокировка"
                    description="Специальный ход королем и ладьей"
                    lesson={2}
                    isLocked={true}
                    duration="10 минут"
                  />
                  
                  <LessonCard
                    title="Взятие на проходе"
                    description="Особое правило для пешек"
                    lesson={3}
                    isLocked={true}
                    duration="12 минут"
                  />
                </div>
              </TabsContent>
              
              {/* Продвинутые уроки */}
              <TabsContent value="advanced">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <LessonCard
                    title="Дебюты для детей"
                    description="Основные принципы начала игры"
                    lesson={1}
                    isLocked={true}
                    duration="20 минут"
                  />
                  
                  <LessonCard
                    title="Защита и атака"
                    description="Как защищать свои фигуры и атаковать противника"
                    lesson={2}
                    isLocked={true}
                    duration="18 минут"
                  />
                  
                  <LessonCard
                    title="Эндшпиль для начинающих"
                    description="Основы завершения партии"
                    lesson={3}
                    isLocked={true}
                    duration="15 минут"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Прогресс обучения */}
        <section className="py-12 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Ваш прогресс обучения</h2>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Начинающий уровень</span>
                  <span className="text-sm font-medium">2/6 уроков</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Star className="w-10 h-10 text-yellow-500" />
                  <div>
                    <h3 className="font-medium">Звёзды</h3>
                    <p className="text-sm text-gray-600">Заработано: 9 из 30</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <BookOpen className="w-10 h-10 text-chess-primary" />
                  <div>
                    <h3 className="font-medium">Завершено уроков</h3>
                    <p className="text-sm text-gray-600">2 из 12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="py-12 bg-chess-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы стать шахматным мастером?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Продолжайте изучать наши уроки и практикуйтесь каждый день, чтобы улучшить свои навыки!
            </p>
            <Button asChild size="lg" className="bg-chess-accent hover:bg-chess-accent/90">
              <Link to="/rules">Узнать правила игры</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Компонент карточки урока
interface LessonCardProps {
  title: string;
  description: string;
  lesson: number;
  isCompleted?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  duration: string;
}

const LessonCard = ({ 
  title, 
  description, 
  lesson, 
  isCompleted, 
  isActive, 
  isLocked, 
  duration 
}: LessonCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all ${isActive ? 'border-chess-primary ring-2 ring-chess-primary/20' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-500">Урок {lesson}</span>
          {isCompleted && (
            <div className="flex items-center text-green-500 text-sm">
              <Award className="w-4 h-4 mr-1" />
              <span>Пройден</span>
            </div>
          )}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center text-gray-500 text-sm">
          <BookOpen className="w-4 h-4 mr-2" />
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant={isLocked ? "outline" : "default"} 
          className={`w-full ${isLocked ? 'text-gray-500' : 'bg-chess-primary hover:bg-chess-primary/90'}`}
          disabled={isLocked}
        >
          {isLocked ? "Заблокировано" : isCompleted ? "Повторить" : "Начать урок"} 
          {!isLocked && <ChevronRight className="w-4 h-4 ml-2" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonsPage;
