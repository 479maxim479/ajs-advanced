import sortingByProps from '../app';

test('Сортировка в указанном порядке: name, level', () => {
  const object = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const resultArr = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const order = sortingByProps(object, ['name', 'level']);
  expect(order).toEqual(resultArr);
});

test('Сортировка в алфавитном порядке', () => {
  const object = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const resultArr = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  const order = sortingByProps(object, []);
  expect(order).toEqual(resultArr);
});
