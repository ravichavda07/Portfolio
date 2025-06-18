import { FileText } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="h-1 w-20 bg-purple-500 mb-12"></div>
        
        <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-2xl font-semibold text-white mb-2">Bachelor of Engineering</h3>
            <h4 className="text-xl text-purple-400 mb-2">Computer Engineering</h4>
            <p className="text-gray-300 mb-2">V.V.P. Engineering College, Rajkot, Gujarat</p>
            <p className="text-gray-400 mb-6">2022 - 2026</p>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <FileText size={20} className="mr-2" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}