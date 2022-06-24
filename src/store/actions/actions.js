export const addCustomer = (customer) => {
  return {
    type: "AddCustomer",
    payload: {
      ...customer,
    },
  };
};

export const editCustomer = (customer) => {
  return {
    type: "EditCustomer",
    payload: {
      ...customer,
    },
  };
};

export const deleteCustomer = (id) => {
  return {
    type: "DeleteCustomer",
    payload: {
      id,
    },
  };
};

export const changeStep = (newStep) => {
  return {
    type: "changeStep",
    payload: {
      step: newStep,
    },
  };
};

export const changeCurrentPayMethod = (newMethod) => {
  return {
    type: "changeCurrentPayMethod",
    payload: {
      payMethod: newMethod,
    },
  };
};

export const changeDialogState = (newValue) => {
  return {
    type: "ChangeDialogState",
    payload: {
      newState: newValue,
    },
  };
};
