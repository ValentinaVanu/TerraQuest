import RequestStatus from '../RequestStatus';

export const SET_APPLICATIONS_REQUESTED = 'SET_APPLICATIONS_REQUESTED';
export const SET_APPLICATIONS_SUCCESS = 'SET_APPLICATIONS_SUCCESS';
export const SET_APPLICATIONS_FAILED = 'SET_APPLICATIONS_FAILED';

export const ADD_APPLICATION_REQUESTED = 'ADD_APPLICATION_REQUESTED';
export const ADD_APPLICATION_SUCCESS = 'ADD_APPLICATION_SUCCESS';
export const ADD_APPLICATION_FAILED = 'ADD_APPLICATION_FAILED';

export const KEY_APPLICATION_SUCCESS = 'KEY_APPLICATION_SUCCESS';
export const EMPLOYEES_APPLICATION_SUCCESS = 'EMPLOYEES_APPLICATION_SUCCESS';
export const MODAL_APPLICATION_SUCCESS = 'MODAL_APPLICATION_SUCCESS';
export const NEW_APPLICATIONS_REQUESTED = 'MODAL_APPLICATION_SUCCESS';

interface ICreateCompany {
  name: string,
  address: string,
  website: string,
  employees: string[]
}

export type ApplicationsState = {
  setApplicationsState: RequestStatus;
  addApplicationState: RequestStatus;
  keyApplicationState: RequestStatus;
  companiesApplicationState: RequestStatus;
  employeesApplicationState: RequestStatus;
  modalApplicationState: false;
  createCompany: ICreateCompany;
};


type SetApplicationsRequestedAction = {
  type: typeof SET_APPLICATIONS_REQUESTED;
};

type SetApplicationsSuccessAction = {
  type: typeof SET_APPLICATIONS_SUCCESS;
  payload: any;
};

type SetApplicationsFailedAction = {
  type: typeof SET_APPLICATIONS_FAILED;
};

type AddApplicationRequestedAction = {
  type: typeof ADD_APPLICATION_REQUESTED;
};

type AddApplicationsFailedAction = {
  type: typeof ADD_APPLICATION_FAILED;
};

type AddApplicationSuccessAction = {
  type: typeof ADD_APPLICATION_SUCCESS;
  payload: any;
};
type KeyApplicationSuccessAction = {
  type: typeof KEY_APPLICATION_SUCCESS;
  payload: any;
};
type EmployeesApplicationSuccessAction = {
  type: typeof EMPLOYEES_APPLICATION_SUCCESS;
  payload: any;
};
type ModalApplicationSuccessAction = {
  type: typeof MODAL_APPLICATION_SUCCESS;
  payload: any;
};
type NewApplicationsRequestedAction = {
  type: typeof NEW_APPLICATIONS_REQUESTED;
  payload: any;
};

export type ApplicationsActionTypes =
  | NewApplicationsRequestedAction
  | ModalApplicationSuccessAction
  | KeyApplicationSuccessAction
  | EmployeesApplicationSuccessAction
  | SetApplicationsRequestedAction
  | SetApplicationsSuccessAction
  | SetApplicationsFailedAction
  | AddApplicationRequestedAction
  | AddApplicationSuccessAction
  | AddApplicationsFailedAction;
