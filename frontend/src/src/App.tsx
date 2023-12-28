import React, { useState } from 'react';
import { Character, Skill } from './types/Character'
import CharInfoPage from './pages/CharInfoPage'

const App = () => {
  const initialSkills: Skill[] = [
    { name: '音樂', level: 1, experience: 100, addExperience: () => {} },
    { name: '數學', level: 2, experience: 200, addExperience: () => {} },
  ];

  const [character, setCharacter] = useState(new Character('主角', initialSkills));

  const addExperienceToSkill = (skillName: string, amount: number) => {
    const updatedSkills = character.skills.map(skill => {
      if (skill.name === skillName) {
        skill.addExperience(amount);
      }
      return skill;
    });
    setCharacter(new Character(character.name, updatedSkills));
  };

  return (
    <div>
      <h1>角色信息</h1>
      <CharInfoPage character={character} />
      <button onClick={() => addExperienceToSkill('音樂', 100)}>增加音樂經驗</button>
      <button onClick={() => addExperienceToSkill('數學', 100)}>增加數學經驗</button>
    </div>
  );
}

export default App;