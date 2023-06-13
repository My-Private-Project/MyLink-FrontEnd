const validations = {
  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um nome válido',
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}
