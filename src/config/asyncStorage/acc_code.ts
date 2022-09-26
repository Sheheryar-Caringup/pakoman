import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAccCode = async (value: string) => {
  try {
    await AsyncStorage.setItem('@acc_code', value);
  } catch (e) {}
};

export const getAccCode = async () => {
  try {
    let value = await AsyncStorage.getItem('@acc_code');
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

export const deleteAccCode = async () => {
  try {
    await AsyncStorage.removeItem('@acc_code');
  } catch (e) {}
};
