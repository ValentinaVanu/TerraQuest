import * as types from './types';

/**
 * Sets the applications provided to the Redux store.
 */
export const getNewApplicationsAction = (applications: any): types.ApplicationsActionTypes => {
  return {
    type: types.NEW_APPLICATIONS_REQUESTED,
    payload: applications,
  };
}

export const setKeyApplications = (applications: any): types.ApplicationsActionTypes => ({
  type: types.KEY_APPLICATION_SUCCESS,
  payload: applications
})
export const seEmployeesApplications = (applications: any): types.ApplicationsActionTypes => ({
  type: types.EMPLOYEES_APPLICATION_SUCCESS,
  payload: applications
})

export const seModalApplications = (applications: any): types.ApplicationsActionTypes => ({
  type: types.MODAL_APPLICATION_SUCCESS,
  payload: applications
})

export const setApplications = (applications: any): types.ApplicationsActionTypes => {
  return {
    type: types.ADD_APPLICATION_SUCCESS,
    payload: applications,
  };
}

export const setApplicationsFailedAction = (): types.ApplicationsActionTypes => ({
  type: types.SET_APPLICATIONS_FAILED
})

export const SetApplicationsRequestedAction = (): types.ApplicationsActionTypes => ({
  type: types.SET_APPLICATIONS_REQUESTED,
})
