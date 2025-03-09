// rules.tsx
export const rules = {
  rfc: {
    required: "RFC is required",
    validate: (value: string) => {
      if (!value) return "RFC is required";

      const first3 = value.substring(0, 3);
      if (!/^[A-Za-z]*$/.test(first3)) {
        return `Los primeros valores deben de ser letras, no: "${first3}"`;
      }

      // Persona Fisica
      if (value.length >= 4) {
        const first4 = value.substring(0, 4);
        const isFisicaCandidate = /^[A-Za-z]{4}$/.test(first4);

        if (isFisicaCandidate) {
          if (value.length > 13) {
            return "El RFC de una persona fisica debe de ser de 13 caracteres.";
          }
          // Valores del 5-10 deben de ser numeros
          const digitsPart = value.substring(4, Math.min(10, value.length));
          if (!/^[0-9]*$/.test(digitsPart)) {
            return `Letra encontrada en fecha de cumpleaños: "${digitsPart}"`;
          }

          if (value.length < 13) {
            return `RFC de persona fisico incompleto: ${value.length}/13`;
          }
          return true;
        } else {
          // Persona Moral
          if (value.length > 12) {
            return "El RFC de una persona moral debe de ser de 12 caracteres";
          }
          // Valores del 4-9 deben de ser numeros
          const digitsPart = value.substring(3, Math.min(9, value.length));
          if (!/^[0-9]*$/.test(digitsPart)) {
            return `Letra encontrada en fecha de creación: "${digitsPart}"`;
          }

          if (value.length < 12) {
            return `RFC de persona moral incompleto: ${value.length}/12`;
          }
          return true;
        }
      } else {
        if (!/^[A-Za-z]*$/.test(value)) {
          return `Los primeros valores deben de ser letras, no: "${value}"`;
        }
        return `RFC No Valido`;
      }
    },
  },
  name: {
    required: "El nombre es obligatorio",
    validate: (value: string) => {
      if (/\d/.test(value)) {
        return "El nombre no debe contener números";
      }
      return true;
    },
  },

  surname: {
    required: "El apellido es obligatorio",
    validate: (value: string) => {
      if (/\d/.test(value)) {
        return "El apellido no debe contener números";
      }
      return true;
    },
  },

  birthdate: {
    required: "El cumpleaños es obligatorio",
  },
  commercialName: {
    required: "El nombre comercial es obligatorio",
  },
  incorporationDate: {
    required: "La fecha de constitución es obligatoria",
  },
  businessType: {
    required: "El giro de negocio es obligatorio",
  },
  getRfcValidationRules: (rfcValue: string) => {
    return rfcValue?.toUpperCase()?.endsWith("X")
      ? rules.name
      : rules.commercialName;
  },
};
