const fs = require('fs');

// позволяет выбрать самого опытного капитана
function getRightCaptain() {
  const PATH = './src/crew.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayCrew = readFile.split('\r\n');

  let arrayCrewMore = [];
  for (let i = 1; i < arrayCrew.length; i++) {
    let el = arrayCrew[i];
    arrayCrewMore.push(el.split(', '));
  }

  let arrayOnlyCaptains = arrayCrewMore.filter((el) => {
    return el.includes('Капитан');
  })

  let bestCaptain = arrayOnlyCaptains.sort((a, b) => {
    a = a[3];
    b = b[3];
    return +b - +a
  })
  return bestCaptain[0].join(', ');
}
console.log(getRightCaptain());

// позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  const PATH = './src/crew.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayCrew = readFile.split('\r\n');

  let arrayCrewMore = [];
  for (let i = 1; i < arrayCrew.length; i++) {
    let el = arrayCrew[i];
    arrayCrewMore.push(el.split(', '));
  }

  let arrayOnlyDoctorsWomen = arrayCrewMore.filter((el) => {
    return el.includes('Врач') && el.includes('ж');
  })

  let bestDoctor = arrayOnlyDoctorsWomen.sort((a, b) => {
    a = a[3];
    b = b[3];
    return +b - +a
  })
  return bestDoctor[0].join(', ');
}

// позволяет выбрать всех бортмехаников
function getAllEngineer() {
  const PATH = './src/crew.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayCrew = readFile.split('\r\n');

  let arrayCrewMore = [];
  for (let i = 1; i < arrayCrew.length; i++) {
    let el = arrayCrew[i];
    arrayCrewMore.push(el.split(', '));
  }

  let arrayOnlyEngineers = arrayCrewMore.filter((el) => {
    return el.includes('Бортмеханик');
  }).map((el) => el.join(', '));

  return arrayOnlyEngineers;
}

// Позволяет отобрать все марсоходы
function getAllRover() {
  const PATH = './src/equipment.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayEquipment = readFile.split('\r\n');

  let arrayEquipmentMore = [];
  for (let i = 1; i < arrayEquipment.length; i++) {
    let el = arrayEquipment[i];
    arrayEquipmentMore.push(el.split(', '));
  }

  let arrayOnlyRovers = arrayEquipmentMore.filter((el) => {
    return el.includes('марсоход');
  }).map((el) => el.join(', '));

  return arrayOnlyRovers;
}

// позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {
  const PATH = './src/equipment.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayEquipment = readFile.split('\r\n');

  let arrayEquipmentMore = [];
  for (let i = 1; i < arrayEquipment.length; i++) {
    let el = arrayEquipment[i];
    arrayEquipmentMore.push(el.split(', '));
  }

  let arrayOnlyRovers = arrayEquipmentMore.filter((el) => {
    return el.includes('марсоход') && el[2] > 3;
  }).map((el) => el.join(', '));

  return arrayOnlyRovers;
}

// позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {
  const PATH = './src/rockets.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayRockets = readFile.split('\r\n');

  let arrayRocketsMore = [];
  for (let i = 1; i < arrayRockets.length; i++) {
    let el = arrayRockets[i];
    arrayRocketsMore.push(el.split(', '));
  }

  let bestRocket = arrayRocketsMore.sort((a, b) => {
    a = a[2];
    b = b[2];
    return +b - +a
  })
  return bestRocket[0].join(', ');
}

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
