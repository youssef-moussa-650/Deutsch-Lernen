import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { InstructorCard } from './components/InstructorCard';
import { Schedule } from './components/Schedule';
import { SocialMedia } from './components/SocialMedia';

function App() {
  const courses = [
    {
      level: 'المستوى A1',
      description: 'ابدأ رحلتك في تعلم اللغة الألمانية مع أساسيات المحادثة والقواعد والمفردات الأساسية.',
      duration: '3 شهور - 36 ساعة',
      price: '2000 جنيه',
      maxStudents: 8,
      startDate: '15 مارس',
    },
    {
      level: 'المستوى A2',
      description: 'طور مهاراتك في اللغة الألمانية وتعلم التحدث بثقة في المواقف اليومية.',
      duration: '3 شهور - 36 ساعة',
      price: '2500 جنيه',
      maxStudents: 8,
      startDate: '20 مارس',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      <Header />
      <Hero />
      
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">الكورسات المتاحة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر المستوى المناسب لك وابدأ رحلة تعلم اللغة الألمانية مع مدرسين محترفين في مجموعات صغيرة
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      <Schedule />
      <SocialMedia />
    </div>
  );
}

export default App;