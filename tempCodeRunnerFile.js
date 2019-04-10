const filterNames = (names, minimumLength) => {
  let newNames = [];

  for (let index = 0; index < names.length; index++) {
    const name = names[index];

    if (name.length >= minimumLength) {
      newNames.push(name);
    }
  }

  return newNames;
};

const filteredNames = filterNames(names, 3);

showNames(filteredNames);