
import { Server, Database, Monitor, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: <Monitor className="text-purple-400" size={24} />,
      skills: [
        'HTML',
        'CSS', 
        'JavaScript',
        'React.js'
      ],
    },
    {
      category: 'Backend Development',
      icon: <Server className="text-purple-400" size={24} />,
      skills: [
        'Node.js',
        'Python',
        'Java',
        'REST APIs'
      ],
    },
    {
      category: 'Database',
      icon: <Database className="text-purple-400" size={24} />,
      skills: [
        'MongoDB',
        'MySQL'
      ],
    },
    {
      category: 'Core CS',
      icon: <Cpu className="text-purple-400" size={24} />,
      skills: [
        'DSA',
        'OOP',
        'Software Engineering',
        'Problem Solving'
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="h-1 w-20 bg-purple-500 mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-purple-400">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 flex-shrink-0"></span>
                    <span className="text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}