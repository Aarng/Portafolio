import React from 'react';

interface SkillBarProps {
  name: string;
  proficiency: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, proficiency }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-600">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;