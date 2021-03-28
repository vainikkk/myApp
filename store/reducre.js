const initialState = {
  employeesData: [
    {
      id: "1",
      name: "Vainik kakadiya",
      designation: "Software Engineer",
      email: "vainik.kakadiya@gmail.com",
      number: "987654321",
    },
  ],
  loading: false,
};
export const reducre = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      let addedData = state.employeesData;
      let employee = action.payload;
      employee.id = Math.random() + addedData.length + "ID";
      addedData.push(employee);
      return { ...state, employeesData: addedData };

    case "UPDATE_EMPLOYEE":
      let removedData = state.employeesData.filter((v) => v.id !== action.payload.id);
      removedData.push({ ...action.payload.empData});
      return { ...state, employeesData: removedData };

    case "DELETE_EMPLOYEE":
      return { ...state, employeesData: state.employeesData.filter((v) => v.id !== action.payload) };

    default:
      return state;
  }
};
