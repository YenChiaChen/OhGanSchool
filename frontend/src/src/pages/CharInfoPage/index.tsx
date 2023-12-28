import React from 'react';
import { Character } from '../../types/Character'

interface CharacterSkillsProps {
  character: Character;
}

const CharacterSkills: React.FC<CharacterSkillsProps> = ({ character }) => {
  return (
    <div>
      {character.skills.map((skill, index) => (
        <div key={index}>
          <h3>{skill.name}</h3>
          <p>等級: {skill.level}</p>
          <p>經驗值: {skill.experience}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterSkills;