import React from 'react';

const SkillsList = () => {
  const skillsData = [
    // UI/UX Section
    { section: 'UI/UX', name: 'Adobe Xd', level: 4 },
    { section: 'UI/UX', name: 'Figma', level: 3 },
    { section: 'UI/UX', name: 'User research', level: 2 },
    // Add more UI/UX skills as needed

    // Coding Section
    { section: 'Coding', name: 'CSS/Tailwind', level: 3 },
    { section: 'Coding', name: 'React.js', level: 2 },
    { section: 'Coding', name: 'Javascript', level: 1 },
    // Add more coding skills as needed

    // Designing Section
    { section: 'Designing', name: 'Blender', level: 3 },
    { section: 'Designing', name: 'Spline', level: 3 },
    { section: 'Designing', name: 'Adobe CC', level: 2 },
    // Add more designing skills as needed

    // Miscellaneous Section
    { section: 'Miscellaneous', name: 'Problem Solving', level: 4 },
    { section: 'Miscellaneous', name: 'Communication', level: 3 },
    { section: 'Miscellaneous', name: 'Team Collaboration', level: 2 },
    // Add more miscellaneous skills as needed
  ];

  const getProgressBarColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-green-900';
      case 2:
        return 'bg-green-700';
      case 3:
        return 'bg-green-500';
      case 4:
        return 'bg-green-300';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto p-8 font-league-spartan grid grid-cols-2 gap-8">
      {/* UI/UX Section */}
      <div>
        <h1 className='text-3xl font-extrabold text-black mb-2 max-lg:text-2xl'>UI/UX</h1>
        <div className="flex flex-col">
          {skillsData
            .filter((skill) => skill.section === 'UI/UX')
            .map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="font-bold text-2xl text-black max-lg:text-xl">{skill.name}</div>
                <div className="relative pt-2">
                  <div className="overflow-hidden h-8 mb-4 flex rounded bg-black bg-opacity-25">
                    <div
                      style={{ width: `${skill.level * 25}%` }}
                      className={`shadow-none flex flex-col text-left whitespace-nowrap justify-center ${getProgressBarColor(skill.level)}`}
                    >
                      <span className="text-sm text-black ml-1">
                        {skill.level === 1 ? 'Base' : skill.level === 2 ? 'Proficient' : skill.level === 3 ? 'Very Proficient' : 'Specialty'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Coding Section */}
      <div>
        <h1 className='text-3xl font-extrabold text-black mb-2 max-lg:text-2xl '>Coding</h1>
        <div className="flex flex-col">
          {skillsData
            .filter((skill) => skill.section === 'Coding')
            .map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="font-bold text-2xl text-black max-lg:text-xl">{skill.name}</div>
                <div className="relative pt-2">
                  <div className="overflow-hidden h-8 mb-4 text-xs flex rounded bg-black bg-opacity-25">
                    <div
                      style={{ width: `${skill.level * 25}%` }}
                      className={`shadow-none flex flex-col text-left whitespace-nowrap justify-center ${getProgressBarColor(skill.level)}`}
                    >
                      <span className="text-sm text-black ml-1">
                        {skill.level === 1 ? 'Base' : skill.level === 2 ? 'Proficient' : skill.level === 3 ? 'Very Proficient' : 'Specialty'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Designing Section */}
      <div>
        <h1 className='text-3xl font-extrabold text-black mb-2 max-lg:text-2xl'>Designing</h1>
        <div className="flex flex-col">
          {skillsData
            .filter((skill) => skill.section === 'Designing')
            .map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="font-bold text-2xl text-black max-lg:text-xl">{skill.name}</div>
                <div className="relative pt-2">
                  <div className="overflow-hidden h-8 mb-4 text-xs flex rounded bg-black bg-opacity-25">
                    <div
                      style={{ width: `${skill.level * 25}%` }}
                      className={`shadow-none flex flex-col text-left whitespace-nowrap justify-center ${getProgressBarColor(skill.level)}`}
                    >
                      <span className="text-sm text-black ml-1">
                        {skill.level === 1 ? 'Base' : skill.level === 2 ? 'Proficient' : skill.level === 3 ? 'Very Proficient' : 'Specialty'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Miscellaneous Section */}
      <div>
        <h1 className='text-3xl font-extrabold text-black mb-2 max-lg:text-2xl'>Miscellaneous</h1>
        <div className="flex flex-col">
          {skillsData
            .filter((skill) => skill.section === 'Miscellaneous')
            .map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="font-bold text-2xl text-black max-lg:text-xl">{skill.name}</div>
                <div className="relative pt-2">
                  <div className="overflow-hidden h-8 mb-4 text-xs flex rounded bg-black bg-opacity-25">
                    <div
                      style={{ width: `${skill.level * 25}%` }}
                      className={`shadow-none flex flex-col text-left whitespace-nowrap justify-center ${getProgressBarColor(skill.level)}`}
                    >
                      <span className="text-sm text-black ml-1">
                        {skill.level === 1 ? 'Base' : skill.level === 2 ? 'Proficient' : skill.level === 3 ? 'Very Proficient' : 'Specialty'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
