let hobbies: string[];
hobbies = ['Language', 'music'];
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Aidan',
//   age: 25,
//   hobbies: hobbies,
//   role: [2, 'author'],
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: 'Aidan',
  age: 25,
  hobbies: hobbies,
  role: Role.ADMIN,
};
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log('is Admin');
}
