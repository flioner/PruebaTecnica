// api.tsx

const isBrowser = typeof window !== "undefined" && window.localStorage;

const getDataFromLocalStorage = (key: string) => {
  if (isBrowser) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  }
  return [];
};

const setDataToLocalStorage = (key: string, data: any) => {
  if (isBrowser) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

const api = {
  /* Mock API for PersonaMoral */
  getMoralData: () => {
    return getDataFromLocalStorage("moralData");
  },

  addMoralData: (newData: {
    commercialName: string;
    incorporationDate: string;
    businessType: string;
    rfc: string;
  }) => {
    const moralData = getDataFromLocalStorage("moralData");
    const newKey = (moralData.length + 1).toString();
    const dataWithKey = { ...newData, key: newKey };
    moralData.push(dataWithKey);
    setDataToLocalStorage("moralData", moralData);
    return moralData;
  },

  removeMoralData: (key: string) => {
    let moralData = getDataFromLocalStorage("moralData");
    moralData = moralData.filter((item: { key: string }) => item.key !== key);
    setDataToLocalStorage("moralData", moralData);
    return moralData;
  },

  /* Mock API for PersonaFisica */
  getFisicaData: () => {
    return getDataFromLocalStorage("fisicaData");
  },

  addFisicaData: (newData: {
    name: string;
    surname: string;
    birthdate: string;
    rfc: string;
  }) => {
    const fisicaData = getDataFromLocalStorage("fisicaData");
    const newKey = (fisicaData.length + 1).toString();
    const dataWithKey = { ...newData, key: newKey };
    fisicaData.push(dataWithKey);
    setDataToLocalStorage("fisicaData", fisicaData);
    return fisicaData;
  },

  removeFisicaData: (key: string) => {
    let fisicaData = getDataFromLocalStorage("fisicaData");
    fisicaData = fisicaData.filter((item: { key: string }) => item.key !== key);
    setDataToLocalStorage("fisicaData", fisicaData);
    return fisicaData;
  },
};

export default api;
