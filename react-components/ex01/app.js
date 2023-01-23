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
  Folosind metoda map pe arrayul skills,
  returneaza si afiseaza in consola un array
  in care fiecare consoana este scrisa cu litera mare (vocalele nu)
`);
const vowels = ['a', 'e', 'i', 'o', 'u'];
const arr1 = person.skills.map((skill) => {
  const skillLetters = skill.split('');

  const updatedLetter = skillLetters.map((letter) => {
    if (vowels.includes(letter.toLowerCase())) {
      return letter;
    } else {
      return letter.toUpperCase();
    }
  });

  return updatedLetter.join('');
});
console.log(arr1);

console.warn(`
  Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
  “Ma numesc {name} {surname} si am {age} ani.”
`);

const arr2 = person.friends.map((friend) => {
  const { name, surname, age } = friend;

  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(arr2);

console.warn(`Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
“Diferenta de varsta dintre {friendName} si {personName} este {diff}”`);

const arr3 = person.friends.map(({ name, age }) => {
  const diff = Math.abs(age - person.age);

  return `Diferenta de varsta dintre ${name} si ${person.name} este ${diff}`;
});
console.log(arr3);

console.warn(
  `Returneaza si afiseaza un array in care fiecare pozitie contine diferenta dintre varsta persoanei si lungimea cuvantului de pe arrayul skill `,
);
const arr4 = person.skills.map((skill) => {
  const skillLength = skill.length;

  return Math.abs(person.age - skillLength);
});
console.log(arr4);

console.warn(`
  Folosind metoda map pe arrayul skills, returneaza
  un array care contine cuvintele cu prima si ultima litera mari.
`);
const arr5 = person.skills.map((skill) => {
  return skill
    .split('')
    .map((letter, index, letters) => {
      if (index === 0 || index === letters.length - 1) {
        return letter.toUpperCase();
      }

      return letter;
    })
    .join('');
});
console.log(arr5);

console.warn(`
  Folosind metoda map pe arrayul skills, returneaza un array
  care contine cuvintele inversate (exemplu: lmth)
`);
const arr6 = person.skills.map((skill) => {
  return skill.split('').reverse().join('');
});
console.log(arr6);

const lis = document.querySelectorAll('ul li');
const total = Array.from(lis).reduce((total, li) => {
  total += Number(li.innerText);

  return total;
}, 0);

console.log(total);

console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”`);
const arr7 = person.friends.map(({ name, age }) => {
  return `${name} are ${age} ani.`;
});
console.log(arr7);

console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care contine numele inversat al prietenilor pe fiecare pozitie (exemplu: Stevenson Steven)
`);

const arr8 = person.friends.map(({ name, surname }) => {
  return `${surname} ${name}`;
});
console.log(arr8);

console.warn(`Folosind metoda map pe arrayul friends, returneaza un array care contine pe fiecare pozitie diferenta dintre lungimea totala al numelui complet (fara spatii) si varsta prietenului de pe iteratie
`);
const arr9 = person.friends.map((friend) => {
  return friend.name.length + friend.surname.length - friend.age;
});
console.log(arr9);

console.warn(
  `Folosind metoda map pe arrayul skills returneaza un array care contine diferenta dintre lungimea fiecarui skill si varsta prietenului`,
);
const arr10 = person.skills.map((skill) => {
  return person.friends.map((friend) => {
    return Math.abs(skill.length - friend.age);
  });
});
console.log(arr10);
