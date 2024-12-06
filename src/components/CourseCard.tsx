import React from 'react';
import { Users, Clock, Calendar } from 'lucide-react';

interface CourseCardProps {
  level: string;
  description: string;
  duration: string;
  price: string;
  maxStudents: number;
  startDate: string;
}

export function CourseCard({ level, description, duration, price, maxStudents, startDate }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-red-500 p-6 text-white">
        <h3 className="text-2xl font-bold">{level}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="text-blue-600 w-5 h-5" />
            <span className="text-gray-700">حد أقصى {maxStudents} طلاب</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-blue-600 w-5 h-5" />
            <span className="text-gray-700">{duration}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-blue-600 w-5 h-5" />
            <span className="text-gray-700">يبدأ {startDate}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">سعر الكورس</span>
            <span className="text-2xl font-bold text-blue-600">{price}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-red-500 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-red-600 transition-all">
            احجز مكانك الآن
          </button>
        </div>
      </div>
    </div>
  );
}