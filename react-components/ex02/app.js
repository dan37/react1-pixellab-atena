const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind obiectul person si reduce, afiseaza
  in consola un string care contine skill-urile de pe
  pozitiile pare ale arrayului, separate prin virgula
`);
const skillArray1 = person.skills.reduce((skillArray1, skill, index) => {
  if (index % 2 === 0) {
    skillArray1.push(skill);
  }

  return skillArray1;
}, []);
console.log(skillArray1.toString());

console.warn(`
  In mod similar, afiseaza skill-urile care NU incep cu j.
`);
const skillArray2 = person.skills.reduce((skillArray2, skill) => {
  if (!skill.toLowerCase().startsWith('j')) {
    skillArray2.push(skill);
  }

  return skillArray2;
}, []);
console.log(skillArray2.join(' - '));

console.warn(`
  Folosind reduce afiseaza propozitia:
  "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
const message1 = person.friends.reduce(
  (message1, { name, surname }, index, friends) => {
    let punctuation = ', ';

    if (index === friends.length - 1) {
      punctuation = '.';
    }

    message1 += `${name} ${surname}${punctuation}`;

    return message1;
  },
  'Prietenii mei se numesc ',
);
console.log(message1);

console.warn(`Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.
`);
const totalYears = person.friends.reduce((totalYears, { age }) => {
  if (age >= 30) {
    totalYears += age;
  }

  return totalYears;
}, 0);

console.log(sumYears);

console.warn(`Folosind reduce, afiseaza suma anilor de nastere a persoanelor.
`);

const sumAge = person.friends.reduce((sumAge, { age }) => {
  const curentYear = 2023;
  const birthYear = curentYear - age;

  sumAge += birthYear;
  return sumAge;
}, 0);

console.log(sumAge);

console.warn(`
  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
  Intre Dragos si Steven... ", doar daca varsta prietenului este impara.
`);
const message2 = person.friends.reduce((message2, friend) => {
  const { age, name } = friend;
  const diff = person.age - age;

  if (age % 2 !== 0) {
    message2 += `Intre ${person.name} si ${name} este o diferenta de ${diff} ani. `;
  }

  return message2;
}, '');
console.log(message2.trim());

console.warn(`Folosind obiectul person si reduce, afiseaza in consola un string care contine skillurile persoanei, separate prin virgula
`);
const string1 = person.skills.reduce((string1, skill, index, skills) => {
  const punctuation = index === skills.length - 1 ? '.' : ', ';
  return `${string1}${skill}${punctuation}`;
}, '');

console.log(string1);

console.warn(` In mod similar, afiseaza skillurile care incep cu c
`);
const string2 = person.skills.reduce((string2, skill, index, skills) => {
  const punctuation = index === skills.length - 1 ? '.' : ', ';
  if (skill.substring(0, 1) != 'c') {
    return string2;
  }
  return `${string2}${skill}${punctuation}`;
}, '');

console.log(string2);

console.warn(` Folosind reduce, afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."
`);
const string3 = person.friends.reduce((string3, { surname }, index) => {
  punctuation = index === person.friends.length - 1 ? '.' : ', ';

  string3 += `${surname}${punctuation}`;

  return string3;
}, 'Numele de familie ale prietenilor mei sunt:');

console.log(string3);

console.warn(
  ` Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`,
);

const string4 = person.friends.reduce((string4, { age }) => {
  string4 += age;
  return string4;
}, 0);

console.log(string4);

console.warn(`Folosind reduce, afiseaza suma anilor  persoanelor. `);
const totalAge = person.friends.reduce((totalAge, friend) => {
  return (totalAge += friend.age);
}, person.age);

console.log(totalAge);

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);
const diffAge = person.friends.reduce((diffAge, { age }) => {
  diffAge += age;
  return diffAge;
}, 0);

console.log(diffAge);

console.warn(` Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
`);
const arr1 = person.friends.reduce((arr1, { age, name }) => {
  const ageDiff = person.age - age;
  arr1 += ` Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ani. `;
  return arr1;
}, '');

console.log(arr1);
