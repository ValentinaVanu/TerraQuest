import { AppThunk } from '../store';
import * as action from './actions';
import get from 'axios'

/**
 * Returns all applications from the API.
 */
export const thunkGetApplication = (): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const getResult = async() => {
        const result = await get('https://tqinterviewapi.azurewebsites.net/api/Companies/key')
        dispatch(action.setKeyApplications(result.data))
      }
      getResult()

     } catch (error) {
       dispatch(action.setApplicationsFailedAction())
     }
  };
}

export const thunkGetCompanyList = (): AppThunk => {
  return async (dispatch, getState) => {
    const key = getState().applications.keyApplicationState
    try {
      const getCompanies = async() => {
        const companies = await get (`https://tqinterviewapi.azurewebsites.net/api/Companies?key=${key}`)
        dispatch(action.setApplications(companies.data))
      }
      getCompanies()

    } catch (error) {
      dispatch(action.setApplicationsFailedAction())
    }
  }
}

/**
 * Posts an applications to the API.
 */
export function thunkPostApplication(): AppThunk {
  return async (dispatch, getState) => {
    try {
      
    } catch (error) {
      
    }
  }
}
