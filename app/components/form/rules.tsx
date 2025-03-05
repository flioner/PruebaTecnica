// rules.tsx
export const rules = {
  rfc: {
    required: "RFC is required",
    minLength: {
      value: 10,
      message: "RFC must be at least 10 characters",
    },
  },
  name: {
    required: "Name is required",
  },
  surname: {
    required: "Surname is required",
  },
  birthdate: {
    required: "Birthdate is required",
  },
  commercialName: {
    required: "Commercial Name is required",
  },
  incorporationDate: {
    required: "Incorporation Date is required",
  },
  businessType: {
    required: "Business Type is required",
  },
  getRfcValidationRules: (rfcValue: string) => {
    return rfcValue?.toUpperCase()?.endsWith("X")
      ? rules.name
      : rules.commercialName;
  },
};
