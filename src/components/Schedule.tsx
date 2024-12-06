import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

interface ScheduleItemProps {
  level: string;
  instructor: string;
  time: string;
  days: string;
  availableSeats: number;
}

function ScheduleItem({ level, instructor, time, days, availableSeats }: ScheduleItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">{level}</h4>
            <p className="text-gray-600">المدرس: {instructor}</p>
          </div>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {availableSeats} مقاعد متاحة
          </span>
        </div>
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>{days}</span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-blue-600 to-red-500 text-white py-2 rounded-lg font-bold hover:from-blue-700 hover:to-red-600 transition-colors mt-2">
          احجز الآن
        </button>
      </div>
    </div>
  );
}

export function Schedule() {
  const schedules = [
    { level: 'A1', instructor: 'عبدالرحمن عماد', time: '6:00 - 8:00 مساءً', days: 'الأحد، الثلاثاء، الخميس', availableSeats: 4 },
    { level: 'A1', instructor: 'أدهم همام', time: '4:00 - 6:00 مساءً', days: 'السبت، الاثنين، الأربعاء', availableSeats: 3 },
    { level: 'A2', instructor: 'عبدالرحمن عماد', time: '8:00 - 10:00 مساءً', days: 'الأحد، الثلاثاء، الخميس', availableSeats: 5 },
    { level: 'A2', instructor: 'أدهم همام', time: '6:00 - 8:00 مساءً', days: 'السبت، الاثنين، الأربعاء', availableSeats: 2 },
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">مواعيد الدراسة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اختر الموعد المناسب لك من المواعيد المتاحة. كل مجموعة محدودة بـ 8 طلاب فقط لضمان أفضل تجربة تعلم
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {schedules.map((schedule, index) => (
            <ScheduleItem key={index} {...schedule} />
          ))}
        </div>
      </div>
    </section>
  );
}