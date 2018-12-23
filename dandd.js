//need to work on the skills, spells and other things. working: character class constructor, and methods to pick stats out of three, swap a stat from picked stat.

let typeObj = {
  druid: ['druid type shit', 'other nature things'],
  'Half Elf': ['half stuff', 'friends dont let friends do this'],
  orc: ['orcTastic Run', 'not rape'],
  Ranger: ['viggo attack', 'tracking'],
};

console.log('working for sure');
let random20 = Math.floor(Math.random() * Math.floor(20));

class Character {
  constructor(name, type, race) {
    this.name = name;
    this.type = type;
    this.race = race;
    this.stats = [
      {
        levels: randomLevels(),
        skills: fillSkill(this.type),
        proficiency: {},
        spells: {},
      },
      {
        levels: randomLevels(),
        skills: fillSkill(this.type),
        proficiency: {},
        spells: {},
      },
      {
        levels: randomLevels(),
        skills: fillSkill(this.type),
        proficiency: {},
        spells: {},
      },
    ];
  }
  pickStats(stat = 'look at character.') {
    if (stat === 'look at character.') {
      console.log(this);
      return this;
    } else {
      //checking for string version of elem to keep and switching it to numerical (not zero indexs for player)
      this.stats.forEach((elem, i) => {
        if (i !== stat - 1) this.stats[i] = false;
      });

      let pickedStat = this.stats.filter(elem => {
        return elem;
      });

      this.stats = pickedStat;
      return this;
    }
  }
  swap(item1, item2) {
    // if (!Object.entries(this.stats[0]).includes(item1) || !Object.entries(this.stats[0]).includes(item2))
    //   return `${item1} and ${item2} cant be found, ,ake sure they exist in your character and make sure you are spelling them correctly when you try again. Sorry.`;

    let temp = this.stats[0].levels[item2];
    console.log(temp);
    this.stats[0].levels[item2] = this.stats[0].levels[item1];
    this.stats[0].levels[item1] = temp;
    return this;
  }
  pickSkills() {}
  pickSpells() {}
  pickCantrips() {}
  pickProficiencies() {}
}

function randomLevels() {
  return {
    str: Math.floor(Math.random() * Math.floor(20)),
    dex: Math.floor(Math.random() * Math.floor(20)),
    int: Math.floor(Math.random() * Math.floor(20)),
    wis: Math.floor(Math.random() * Math.floor(20)),
    char: Math.floor(Math.random() * Math.floor(20)),
    con: Math.floor(Math.random() * Math.floor(20)),
    san: Math.floor(Math.random() * Math.floor(20)),
  };
}

function fillSkill(type) {
  return typeObj[type];
}

function makeThreeStats() {
  let beginningObj = [];

  for (let i = 1; i <= 3; i++) {
    beginningObj.push({
      str: Math.floor(Math.random() * Math.floor(20)),
      dex: Math.floor(Math.random() * Math.floor(20)),
      int: Math.floor(Math.random() * Math.floor(20)),
      wis: Math.floor(Math.random() * Math.floor(20)),
      char: Math.floor(Math.random() * Math.floor(20)),
      con: Math.floor(Math.random() * Math.floor(20)),
      san: Math.floor(Math.random() * Math.floor(20)),
    });
  }
}
// let zach = new Character('Zach Of Grey', 'Druid', 'human');
