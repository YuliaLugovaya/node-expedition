const fs = require('fs');

function readFiles(path) {
  const PATH = './src';
  return fs.readFileSync(PATH + path, 'utf-8').split('\r\n');
}

// позволяет выбрать самого опытного капитана
function getRightCaptain() {
  const arrayCrew = readFiles('/crew.txt');

  let arrayOnlyCaptains = arrayCrew.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('Капитан');
  })

  let bestCaptain = arrayOnlyCaptains.sort((a, b) => {
    a = a[3];
    b = b[3];
    return +b - +a;
  })
  return bestCaptain[0].join(', ');
}

// позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  const arrayCrew = readFiles('/crew.txt');

  let arrayOnlyDoctorsWomen = arrayCrew.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('Врач') && el.includes('ж');
  })

  let bestDoctor = arrayOnlyDoctorsWomen.sort((a, b) => {
    a = a[3];
    b = b[3];
    return +b - +a;
  })
  return bestDoctor[0].join(', ');
}

// позволяет выбрать всех бортмехаников
function getAllEngineer() {
  const arrayCrew = readFiles('/crew.txt');

  return arrayCrew.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('Бортмеханик');
  }).map((el) => el.join(', '));
}

// Позволяет отобрать все марсоходы
function getAllRover() {
  const arrayEquipment = readFiles('/equipment.txt');

  return arrayEquipment.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('марсоход');
  }).map((el) => el.join(', '));
}

// позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {
  const arrayEquipment = readFiles('/equipment.txt');

  return arrayEquipment.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('марсоход') && el[2] > 3;
  }).map((el) => el.join(', '));
}

// позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {
  const arrayRockets = readFiles('/rockets.txt');

  let arrayRocketsMore = arrayRockets.map((el) => {
    return el.split(', ');
  });

  arrayRocketsMore.shift();

  let bestRocket = arrayRocketsMore.sort((a, b) => {
    a = a[2];
    b = b[2];
    return +b - +a;
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
