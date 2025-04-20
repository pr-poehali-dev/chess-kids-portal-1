
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChessBoard from "@/components/ChessBoard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        {/* Шахматная доска и демонстрация */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Изучайте шахматы в интерактивном формате</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Попробуйте наши интерактивные уроки с подсказками и объяснениями
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <ChessBoard />
              </div>
              
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold">Интерактивная шахматная доска</h3>
                <p className="text-gray-600">
                  На наших уроках вы сможете практиковаться на интерактивной доске, 
                  перемещать фигуры и получать мгновенную обратную связь.
                </p>
                <Tabs defaultValue="rules">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="rules">Правила</TabsTrigger>
                    <TabsTrigger value="pieces">Фигуры</TabsTrigger>
                    <TabsTrigger value="moves">Ходы</TabsTrigger>
                  </TabsList>
                  <TabsContent value="rules" className="text-gray-600 bg-white p-4 rounded-md">
                    Шахматы — настольная игра для двух игроков. Цель игры: поставить мат королю противника.
                  </TabsContent>
                  <TabsContent value="pieces" className="text-gray-600 bg-white p-4 rounded-md">
                    В шахматах у каждого игрока 16 фигур: король, ферзь, 2 ладьи, 2 слона, 2 коня и 8 пешек.
                  </TabsContent>
                  <TabsContent value="moves" className="text-gray-600 bg-white p-4 rounded-md">
                    Каждая фигура ходит по-своему: ладья — по горизонтали и вертикали, слон — по диагонали, ферзь — во всех направлениях.
                  </TabsContent>
                </Tabs>
                <Button asChild className="bg-chess-primary hover:bg-chess-primary/90">
                  <Link to="/lessons">Перейти к урокам</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Отзывы */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Отзывы юных шахматистов</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Вот что говорят дети и их родители о нашем сайте
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-yellow-500 mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">
                    "Мой сын раньше не интересовался шахматами, но благодаря этому сайту 
                    теперь просит купить ему настоящие шахматы!"
                  </p>
                  <div className="font-semibold">Мама Вани, 8 лет</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-yellow-500 mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">
                    "Очень понятные уроки, даже сложные концепции объяснены так, 
                    что моя дочь в 6 лет смогла понять основы стратегии."
                  </p>
                  <div className="font-semibold">Папа Алисы, 6 лет</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-yellow-500 mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">
                    "Мне нравятся задания после каждого урока. Они интересные и 
                    помогают закрепить материал. Я уже научился делать шах и мат!"
                  </p>
                  <div className="font-semibold">Дима, 10 лет</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="py-16 bg-chess-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы начать свое шахматное приключение?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Присоединяйтесь к тысячам детей, которые уже открыли для себя увлекательный мир шахмат!
            </p>
            <Button asChild size="lg" className="bg-chess-accent hover:bg-chess-accent/90">
              <Link to="/rules">Начать с правил игры</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
