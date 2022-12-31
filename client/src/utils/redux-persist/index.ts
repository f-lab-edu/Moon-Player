import persistStore from 'redux-persist/lib/persistStore';
import { store } from 'store/store';

export const persistor = persistStore(store);

export const removeStoreItems = () => {
  persistor.purge();
};
