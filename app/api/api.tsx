// api.tsx
const moralData = [
  {
    key: "1",
    commercialName: "Tech Solutions",
    incorporationDate: "2010-06-25",
    businessType: "Software Development",
    rfc: "TSO100625ABC",
  },
  {
    key: "2",
    commercialName: "Green Energy Co.",
    incorporationDate: "2015-09-10",
    businessType: "Renewable Energy",
    rfc: "GEC150910XYZ",
  },
  {
    key: "3",
    commercialName: "HealthFirst",
    incorporationDate: "2012-03-18",
    businessType: "Healthcare Services",
    rfc: "HFI120318LMN",
  },
  {
    key: "4",
    commercialName: "AutoMotive Plus",
    incorporationDate: "2008-11-05",
    businessType: "Automobile Manufacturing",
    rfc: "AMP081105DEF",
  },
];

const fisicaData = [
  {
    key: "1",
    name: "TonyF",
    surname: "Reichert",
    birthdate: "1980-05-12",
    rfc: "TRC800512XXX",
  },
  {
    key: "2",
    name: "Zoey",
    surname: "Lang",
    birthdate: "1990-08-15",
    rfc: "ZLG900815XXX",
  },
  {
    key: "3",
    name: "Jane",
    surname: "Fisher",
    birthdate: "1985-11-30",
    rfc: "JFS851130XXX",
  },
  {
    key: "4",
    name: "William",
    surname: "Howard",
    birthdate: "1978-03-22",
    rfc: "WHH780322XXX",
  },
];

const api = {
  /* Mock API for PersonaMoral*/
  getMoralData: () => moralData,

  addMoralData: (newData: {
    key: string;
    commercialName: string;
    incorporationDate: string;
    businessType: string;
    rfc: string;
  }) => {
    moralData.push(newData);
    return moralData;
  },

  removeData: (key: string) => {
    const updatedData = moralData.filter((item) => item.key !== key);
    return updatedData;
  },

  /* Mock API for PersonaMoral*/
  getFisicaData: () => fisicaData,

  addFisicaData: (newData: {
    key: string;
    name: string;
    surname: string;
    birthdate: string;
    rfc: string;
  }) => {
    fisicaData.push(newData);
    return fisicaData;
  },

  removeFisicaData: (key: string) => {
    const updatedData = fisicaData.filter((item) => item.key !== key);
    return updatedData;
  },
};

export default api;
