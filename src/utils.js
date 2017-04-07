// конфиг airbnb для eslint не разрешает делать из файла только один экспорт если он не дефолтный
// так что пока не появится второй экспорт правило мы выключим

// eslint-disable-next-line import/prefer-default-export
export const getRandomInt = max => Math.floor(Math.random() * max);
