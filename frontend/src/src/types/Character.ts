export interface Skill {
  name: string;
  level: number;
  experience: number;
  addExperience: (amount: number) => void;
}

export class Character {
  name: string;
  skills: Skill[];

  constructor(name: string, skills: Skill[] = []) {
    this.name = name;
    this.skills = skills.map(skill => ({
      ...skill,
      addExperience: function (amount: number) {
        this.experience += amount;
        while (this.experience >= 500) {
          this.experience -= 500;
          this.level += 1;
        }
      }
    }));
  }
}