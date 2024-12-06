import React from 'react';
import { Users, BookOpen, Video, Star } from 'lucide-react';

export function Hero() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "صفوف صغيرة",
      description: "مجموعات لا تتجاوز 8 طلاب لضمان أفضل تجربة تعلم"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "منهج تفاعلي",
      description: "تعلم من خلال المحادثة والتطبيق العملي"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "دروس أونلاين",
      description: "تعلم من المنزل عبر منصة Zoom"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "مدرسين محترفين",
      description: "خبرة في تدريس اللغة الألمانية لجميع المستويات"
    }
  ];

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-red-500 to-blue-600">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center text-white mb-16">
          <h1 className="text-6xl font-bold mb-6">تعلم الألمانية مع أفضل المدرسين</h1>
          <p className="text-xl mb-8">مجموعات صغيرة. تعلم تفاعلي. نتائج مضمونة.</p>
          <div className="flex gap-4 justify-center">
            <a href="#courses" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              ابدأ الآن
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
              تواصل معنا
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}