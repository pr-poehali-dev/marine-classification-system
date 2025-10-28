import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDish, setSelectedDish] = useState<any>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      id: 1,
      name: 'Лосось на гриле',
      category: 'hot',
      price: 1850,
      calories: 420,
      allergens: ['рыба'],
      image: 'https://cdn.poehali.dev/projects/32b108c1-72fa-442f-9edc-b44683e45107/files/7e831eb0-0c31-4e6b-902d-0f8f3dde4ebd.jpg',
      description: 'Свежий норвежский лосось с травами прованса и лимоном'
    },
    {
      id: 2,
      name: 'Морское ассорти',
      category: 'cold',
      price: 2850,
      calories: 620,
      allergens: ['моллюски', 'ракообразные'],
      image: 'https://cdn.poehali.dev/projects/32b108c1-72fa-442f-9edc-b44683e45107/files/5485ade5-4df5-4347-87fe-c2720400bd0b.jpg',
      description: 'Лобстер, устрицы, креветки и мидии на льду'
    },
    {
      id: 3,
      name: 'Крем-суп из морепродуктов',
      category: 'hot',
      price: 890,
      calories: 320,
      allergens: ['молоко', 'моллюски'],
      image: 'https://cdn.poehali.dev/projects/32b108c1-72fa-442f-9edc-b44683e45107/files/7e831eb0-0c31-4e6b-902d-0f8f3dde4ebd.jpg',
      description: 'Нежный крем-суп с креветками и гребешками'
    },
    {
      id: 4,
      name: 'Тар-тар из тунца',
      category: 'cold',
      price: 1450,
      calories: 280,
      allergens: ['рыба', 'кунжут'],
      image: 'https://cdn.poehali.dev/projects/32b108c1-72fa-442f-9edc-b44683e45107/files/5485ade5-4df5-4347-87fe-c2720400bd0b.jpg',
      description: 'Свежайший тунец с авокадо и соусом понзу'
    },
    {
      id: 5,
      name: 'Паста с морепродуктами',
      category: 'hot',
      price: 1290,
      calories: 580,
      allergens: ['глютен', 'моллюски'],
      image: 'https://cdn.poehali.dev/projects/32b108c1-72fa-442f-9edc-b44683e45107/files/7e831eb0-0c31-4e6b-902d-0f8f3dde4ebd.jpg',
      description: 'Спагетти с мидиями, креветками и кальмарами'
    },
    {
      id: 6,
      name: 'Сет роллов "Океан"',
      category: 'cold',
      price: 1690,
      calories: 540,
      allergens: ['рыба', 'соя', 'кунжут'],
      image: 'https://cdn.poehali.dev/projects/32b108c1-72fa-442f-9edc-b44683e45107/files/5485ade5-4df5-4347-87fe-c2720400bd0b.jpg',
      description: 'Ассорти из 24 роллов с лососем, тунцом и угрем'
    }
  ];

  const reviews = [
    { name: 'Анна Петрова', rating: 5, text: 'Невероятно свежие морепродукты! Обязательно вернемся', date: '15.10.2024' },
    { name: 'Дмитрий Соколов', rating: 5, text: 'Атмосфера и сервис на высоте. Лучший ресторан морепродуктов в городе', date: '12.10.2024' },
    { name: 'Елена Волкова', rating: 5, text: 'Морское ассорти просто восхитительно! Рекомендую всем', date: '08.10.2024' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Waves" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Морская симфония</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Меню', 'О нас', 'Бронирование', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="currentColor" className="text-primary" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Морская симфония
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Изысканные морепродукты в элегантной атмосфере
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('меню')} className="group">
                Посмотреть меню
                <Icon name="ChevronRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('бронирование')}>
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать столик
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="меню" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наше меню</h2>
            <p className="text-lg text-muted-foreground">Свежайшие морепродукты каждый день</p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все блюда</TabsTrigger>
              <TabsTrigger value="hot">Горячие</TabsTrigger>
              <TabsTrigger value="cold">Холодные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer animate-scale-in"
                  onClick={() => setSelectedDish(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-primary font-bold text-lg">{item.price} ₽</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.allergens.map((allergen) => (
                        <Badge key={allergen} variant="secondary" className="text-xs">
                          <Icon name="AlertCircle" size={12} className="mr-1" />
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Flame" size={14} className="inline mr-1" />
                      {item.calories} ккал
                    </p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="hot" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.category === 'hot').map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer animate-scale-in"
                  onClick={() => setSelectedDish(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-primary font-bold text-lg">{item.price} ₽</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.allergens.map((allergen) => (
                        <Badge key={allergen} variant="secondary" className="text-xs">
                          <Icon name="AlertCircle" size={12} className="mr-1" />
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Flame" size={14} className="inline mr-1" />
                      {item.calories} ккал
                    </p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="cold" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.category === 'cold').map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer animate-scale-in"
                  onClick={() => setSelectedDish(item)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <span className="text-primary font-bold text-lg">{item.price} ₽</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.allergens.map((allergen) => (
                        <Badge key={allergen} variant="secondary" className="text-xs">
                          <Icon name="AlertCircle" size={12} className="mr-1" />
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Flame" size={14} className="inline mr-1" />
                      {item.calories} ккал
                    </p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="о-нас" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-primary">О ресторане</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Ресторан "Морская симфония" — это уникальное место, где классическая кухня морепродуктов встречается с современными кулинарными тенденциями.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Мы работаем только со свежайшими морепродуктами, доставленными напрямую от проверенных поставщиков. Наши шеф-повара создают настоящие кулинарные шедевры, сохраняя натуральный вкус океана.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">блюд в меню</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">гостей</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/32b108c1-72fa-442f-9edc-b44683e45107/files/d53d2de5-a0d7-4411-a317-e0587826c5cf.jpg" 
                alt="Интерьер ресторана" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="бронирование" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-primary">Забронировать столик</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Позвоните нам или оставьте заявку онлайн
            </p>
            <div className="bg-secondary/20 rounded-lg p-8 mb-8">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold mb-2 text-primary">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground">Ежедневно с 12:00 до 23:00</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                  <CardTitle>До 150 гостей</CardTitle>
                  <CardDescription>Вместительный зал</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Wine" size={32} className="mx-auto mb-2 text-primary" />
                  <CardTitle>Винная карта</CardTitle>
                  <CardDescription>200+ позиций</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Music" size={32} className="mx-auto mb-2 text-primary" />
                  <CardTitle>Живая музыка</CardTitle>
                  <CardDescription>По выходным</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">Отзывы гостей</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="User" size={24} className="text-primary" />
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{review.text}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary animate-fade-in">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Москва, Морская набережная, 15</p>
                  <p className="text-sm text-muted-foreground mt-2">Метро "Водный стадион"</p>
                </CardContent>
              </Card>
              
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={24} className="text-primary" />
                    Время работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Пн-Чт: 12:00 - 23:00</p>
                  <p className="text-muted-foreground">Пт-Вс: 12:00 - 01:00</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="w-full">
                <Icon name="Bike" size={20} className="mr-2" />
                Доставка
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="Ticket" size={20} className="mr-2" />
                Акции
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="Gift" size={20} className="mr-2" />
                Мероприятия
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[hsl(var(--ocean-dark))] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Waves" size={28} />
              <span className="text-xl font-bold">Морская симфония</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
            <p className="text-sm text-gray-300">© 2024 Морская симфония. Все права защищены</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedDish} onOpenChange={() => setSelectedDish(null)}>
        <DialogContent className="max-w-2xl">
          {selectedDish && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedDish.name}</DialogTitle>
                <DialogDescription>{selectedDish.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={selectedDish.image} 
                  alt={selectedDish.name} 
                  className="w-full rounded-lg"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold text-primary">{selectedDish.price} ₽</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <Icon name="Flame" size={14} className="inline mr-1" />
                      {selectedDish.calories} ккал
                    </p>
                  </div>
                  <Button size="lg">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Заказать
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" size={18} className="text-primary" />
                    Аллергены:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.allergens.map((allergen: string) => (
                      <Badge key={allergen} variant="secondary">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
