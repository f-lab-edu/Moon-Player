import { persistor } from 'index';

export const isInObject = (list, property, name) => {
  return list.find((item) => item[property] === name) ? true : false;
};
export const findObjectInList = (list, property, name) => {
  return list.find((item) => item[property] === name);
};
export const removeStoreItems = () => {
  persistor.purge();
};
