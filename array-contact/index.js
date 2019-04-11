// ================================================================
// Show All Names

console.log("Show All Names: ");
const names = ["Betty", "Gamma", "Alpha", "Dio"];

const showNames = names => {
  for (let index = 0; index < names.length; index++) {
    const name = names[index];

    console.log(`[${index + 1}] ${name}`);
  }
};

showNames(names);

console.log("");

//Filter Names

console.log("Show filtered names:");
const filterNames = (names, minimumLength) => {
  let newNames = [];

  for (let index = 0; index < names.length; index++) {
    const name = names[index];

    if (name.length <= minimumLength) {
      newNames.push(name);
    }
  }

  return newNames;
};

const filteredNames = filterNames(names, 3);

showNames(filteredNames);

console.log("");

// sort Array

console.log("Show sorted Array:");
const sortContacts = () => {
  for (item = 1; item < names.length; item++) {
    for (index = 0; index < item; index++) {
      if (names[item] < names[index]) {
        var check = names[item];
        names[item] = names[index];
        names[index] = check;
      }
    }
  }

  console.log("Show sorted names", names);
};

sortContacts();
console.log("");
