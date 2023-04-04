const fs = require('fs');

function readFiles(path) {
  const PATH = './src';
  return fs.readFileSync(PATH + path, 'utf-8').split('\r\n');
}

// позволяет выбрать капитана женщину
function getCaptainWoman() {
  const arrayCrew = readFiles('/crew.txt');

  let arrayOnlyCaptainWomen = arrayCrew.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('Капитан') && el.includes('ж');
  }).map((el) => el.join(', '));

  return arrayOnlyCaptainWomen.join(', ');
}

// позволяет выбрать помощника капитана с большим опытом из мужчин
function getCaptainAssistant() {
  const arrayCrew = readFiles('/crew.txt');

  let arrayOnlyCaptains = arrayCrew.map((el) => {
    return el.split(', ');
  }).filter((el) => {
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
  const arrayCrew = readFiles('/crew.txt');

  let arrayOnlyDoctors = arrayCrew.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('Врач') && el[3] > 10;
  }).map((el) => el.join(', '));

  return arrayOnlyDoctors;
}

// позволяет выбрать двух самых опытных бортмехаников
function getTwoEngineers() {
  const arrayCrew = readFiles('/crew.txt');

  let arrayOnlyEngineers = arrayCrew.map((el) => {
    return el.split(', ');
  }).filter((el) => {
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
  const arrayEquipment = readFiles('/equipment.txt');

  return arrayEquipment.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('луноход');
  }).map((el) => el.join(', '));
}

// позволяет выбрать только те луноходы, которые смогут прослужить не менее 7 лет
function getRightMoonwalkers() {
  const arrayEquipment = readFiles('/equipment.txt');

  return arrayEquipment.map((el) => {
    return el.split(', ');
  }).filter((el) => {
    return el.includes('луноход') && el[2] >= 7;
  }).map((el) => el.join(', '));
}

// позволяет выбрать орбитальную ракету с максимальной дальностью полёта
function getRightRocket() {
  const arrayRockets = readFiles('/rockets.txt');

  let arrayOnlyOrbit = arrayRockets.map((el) => {
    return el.split(', ');
  }).filter((el) => {
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
