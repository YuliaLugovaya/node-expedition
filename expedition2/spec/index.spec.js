const {
  getRightMoonwalkers,
  getAllMoonwalkers,
  getRightDoctors,
  getCaptainWoman,
  getCaptainAssistant,
  getTwoEngineers,
  getRightRocket,
} = require('../src/functions');

describe('Экспедиция на Луну', () => {
  describe('Отбор кандидатов', () => {
    let crew;
    beforeEach(() => {
      crew = [
        'Брюс Беннер, м, Врач, 12',
        'Стив Роджерс, м, Капитан, 35',
        'Наталья Романова, ж, Врач, 8',
        'Питер Паркер, м, Бортмеханик, 5',
        'Тони Старк, м, Капитан, 23',
        'Бобби Морс, ж, Врач, 19',
        'Клинт Бартон, м, Бортмеханик, 16',
        'Кэрол Дэнверс, ж, Капитан, 15',
        'Сэм Уилсон, м, Бортмеханик, 15',
      ];
    });
    it('позволяет выбрать капитана женщину', () => {
      const bestCaptainWoman = getCaptainWoman();
      expect(bestCaptainWoman).toBe(crew[7]);
    });
    it('позволяет выбрать помощника капитана с большим опытом из мужчин', () => {
      const bestCaptainAssistant = getCaptainAssistant();
      expect(bestCaptainAssistant).toBe(crew[1]);
    });
    it('позволяет выбрать всех врачей со стажем больше 10 лет', () => {
      const bestDoctors = getRightDoctors();
      expect(bestDoctors).toEqual([crew[0], crew[5]]);
    });
    it('позволяет выбрать двух самых опытных бортмехаников', () => {
      const TwoEngineers = getTwoEngineers();
      expect(TwoEngineers).toEqual([crew[6], crew[8]]);
    });
  });
  describe('Отбор оборудования', () => {
    let equipment;
    beforeEach(() => {
      equipment = [
        'Исследователь-2, марсоход, 3',
        'Рейнджер‑4, луноход, 5',
        'Покоритель-3, луноход, 7',
        'Искатель-1, марсоход, 5',
        'Путник-3, марсоход, 8',
        'Рейнджер‑9, луноход, 8',
      ];
    });
    it('Позволяет отобрать все луноходы', () => {
      const allMoonwalkers = getAllMoonwalkers();
      expect(allMoonwalkers).toEqual([equipment[1], equipment[2], equipment[5]]);
    });
    it('позволяет выбрать только те луноходы, которые смогут прослужить не менее 7 лет', () => {
      const rightMoonwalkers = getRightMoonwalkers();
      expect(rightMoonwalkers).toEqual([equipment[2], equipment[5]]);
    });
  });
  describe('Выбор ракеты', () => {
    let rockets;
    beforeEach(() => {
      rockets = [
        'Атлантис, орбитальная, 30',
        'Колумбия, межзвездная, 1209',
        'SpaceX, межзвездная, 209456',
        'Space Launch System, орбитальная, 385',
      ];
    });
    it('позволяет выбрать орбитальную ракету с максимальной дальностью полёта', () => {
      const rocket = getRightRocket();
      expect(rocket).toBe(rockets[3]);
    });
  });
});
