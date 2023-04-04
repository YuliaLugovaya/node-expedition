const fs = require('fs');

// позволяет выбрать капитана женщину
function getCaptainWoman() {
  const PATH = './src/crew.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayCrew = readFile.split('\r\n');

  let arrayCrewMore = [];
  for (let i = 1; i < arrayCrew.length; i++) {
    let el = arrayCrew[i];
    arrayCrewMore.push(el.split(', '));
  }

  let arrayOnlyCaptainWomen = arrayCrewMore.filter((el) => {
    return el.includes('Капитан') && el.includes('ж');
  }).map((el) => el.join(', '));

  return arrayOnlyCaptainWomen.join(', ');
}

// позволяет выбрать помощника капитана с большим опытом из мужчин
function getCaptainAssistant() {
  const PATH = './src/crew.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayCrew = readFile.split('\r\n');

  let arrayCrewMore = [];
  for (let i = 1; i < arrayCrew.length; i++) {
    let el = arrayCrew[i];
    arrayCrewMore.push(el.split(', '));
  }

  let arrayOnlyCaptains = arrayCrewMore.filter((el) => {
    return el.includes('Капитан') && el.includes('м');
  })

  let bestCaptainAssistant = arrayOnlyCaptains.sort((a, b) => {
    a = a[3];
    b = b[3];
    return +b - +a;
  })
  return bestCaptainAssistant[0].join(', ');
}

// позволяет выбрать всех врачей со стажем больше 10 лет
function getRightDoctors() {
  const PATH = './src/crew.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayCrew = readFile.split('\r\n');

  let arrayCrewMore = [];
  for (let i = 1; i < arrayCrew.length; i++) {
    let el = arrayCrew[i];
    arrayCrewMore.push(el.split(', '));
  }

  let arrayOnlyDoctors = arrayCrewMore.filter((el) => {
    return el.includes('Врач') && el[3] > 10;
  }).map((el) => el.join(', '));

  return arrayOnlyDoctors;
}

// позволяет выбрать двух самых опытных бортмехаников
function getTwoEngineers() {
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
  })

  let bestEngineers = arrayOnlyEngineers.sort((a, b) => {
    a = a[3];
    b = b[3];
    return +b - +a;
  })

  return bestEngineers.slice(0, 2).map((el) => el.join(', '));
}

// Позволяет отобрать все луноходы
function getAllMoonwalkers() {
  const PATH = './src/equipment.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayEquipment = readFile.split('\r\n');

  let arrayEquipmentMore = [];
  for (let i = 1; i < arrayEquipment.length; i++) {
    let el = arrayEquipment[i];
    arrayEquipmentMore.push(el.split(', '));
  }

  let arrayOnlyMoonwalkers = arrayEquipmentMore.filter((el) => {
    return el.includes('луноход');
  }).map((el) => el.join(', '));

  return arrayOnlyMoonwalkers;
}

// позволяет выбрать только те луноходы, которые смогут прослужить не менее 7 лет
function getRightMoonwalkers() {
  const PATH = './src/equipment.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayEquipment = readFile.split('\r\n');

  let arrayEquipmentMore = [];
  for (let i = 1; i < arrayEquipment.length; i++) {
    let el = arrayEquipment[i];
    arrayEquipmentMore.push(el.split(', '));
  }

  let arrayRightMoonwalkers = arrayEquipmentMore.filter((el) => {
    return el.includes('луноход') && el[2] >= 7;
  }).map((el) => el.join(', '));

  return arrayRightMoonwalkers;
}

// позволяет выбрать орбитальную ракету с максимальной дальностью полёта
function getRightRocket() {
  const PATH = './src/rockets.txt';
  const readFile = fs.readFileSync(PATH, 'utf-8');
  const arrayRockets = readFile.split('\r\n');

  let arrayRocketsMore = [];
  for (let i = 1; i < arrayRockets.length; i++) {
    let el = arrayRockets[i];
    arrayRocketsMore.push(el.split(', '));
  }

  let arrayOnlyOrbit = arrayRocketsMore.filter((el) => {
    return el.includes('орбитальная');
  })

  let bestRocket = arrayOnlyOrbit.sort((a, b) => {
    a = a[2];
    b = b[2];
    return +b - +a;
  })
  return bestRocket[0].join(', ');
}

module.exports = {
  getCaptainWoman,
  getCaptainAssistant,
  getTwoEngineers,
  getRightDoctors,
  getAllMoonwalkers,
  getRightMoonwalkers,
  getRightRocket,
};
