import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function SocialMedia() {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-600 to-red-500 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-xl opacity-90">تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والعروض</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <a href="#" className="flex flex-col items-center space-y-3 group">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-lg border border-white/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1877F2]">
              <Facebook size={32} />
            </div>
            <span className="font-medium">Facebook</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-3 group">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-lg border border-white/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E4405F]">
              <Instagram size={32} />
            </div>
            <span className="font-medium">Instagram</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-3 group">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-lg border border-white/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF0000]">
              <Youtube size={32} />
            </div>
            <span className="font-medium">YouTube</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-3 group">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-lg border border-white/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1DA1F2]">
              <Twitter size={32} />
            </div>
            <span className="font-medium">Twitter</span>
          </a>
          <a href="#" className="flex flex-col items-center space-y-3 group">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-lg border border-white/20 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512" fill="currentColor">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
            </div>
            <span className="font-medium">TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
}