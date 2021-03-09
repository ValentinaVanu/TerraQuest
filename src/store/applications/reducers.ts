import * as types from './types';
import RequestStatus from '../RequestStatus';

export const initialState: types.ApplicationsState = {
  setApplicationsState: RequestStatus.Initial,
  addApplicationState: RequestStatus.Initial,
  keyApplicationState: RequestStatus.Initial,
  companiesApplicationState: RequestStatus.Initial,
  employeesApplicationState: RequestStatus.Initial,
  modalApplicationState: false,
  createCompany: {
    name: '',
    address: '',
    website: '',
    employees: []
  }
};

const applicationReducer = (state = initialState, action: types.ApplicationsActionTypes) => {
  switch (action.type) {
    case types.NEW_APPLICATIONS_REQUESTED:
      return { ...state, createCompany: action.payload}
    case types.MODAL_APPLICATION_SUCCESS:
      return { ...state, modalApplicationState: action.payload}
    case types.EMPLOYEES_APPLICATION_SUCCESS:
      return { ...state, employeesApplicationState: action.payload}
    case types.KEY_APPLICATION_SUCCESS:
      return { ...state, keyApplicationState: action.payload}
    case types.ADD_APPLICATION_SUCCESS:
      return { ...state, companiesApplicationState: action.payload}
    case types.SET_APPLICATIONS_REQUESTED:
      return { ...state, setApplicationsState: RequestStatus.Requested };
    case types.ADD_APPLICATION_REQUESTED:
      return { ...state, addApplicationState: RequestStatus.Requested };
    default:
      return state;
  }
};

export default applicationReducer;
