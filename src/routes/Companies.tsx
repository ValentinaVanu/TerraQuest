import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetApplication, thunkGetCompanyList } from '../store/applications/thunks'
import { CompanyCard } from '../views/CompanyCard'

const Companies: React.FC = () => {
  const key = useSelector(({ applications }: any) => applications.keyApplicationState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(thunkGetApplication())
    },
    []
  )

  useEffect(
    () => {
      dispatch(thunkGetCompanyList())
    },
    [key]
  )

  return (
    <div>
      <CompanyCard />
    </div>
  )
}

export { Companies }
