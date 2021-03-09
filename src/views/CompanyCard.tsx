import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { seEmployeesApplications, seModalApplications } from '../store/applications/actions'
import { ICompanyCard, IEmployeeInfo } from '../types'
import { EmployeesModal } from './EmployeesModal'

import * as SCC from '../css/CompanyCard.style'


const CompanyCard: React.FC = () => {
  const [companyList, employees, modal] = useSelector(({ applications }: any) => [
    applications.companiesApplicationState,
    applications.employeesApplicationState,
    applications.modalApplicationState,
  ])

  const dispatch = useDispatch()

  const handleEmployees = (list: IEmployeeInfo[]) => {
    dispatch(seModalApplications(true))
    dispatch(seEmployeesApplications(list))
  }
  return (
    <SCC.StyledCardWrapper>
      {!companyList && <SCC.StyledOps>Ops! Something went wrong. <br />Please refresh the page</SCC.StyledOps>}
      {(companyList || []).map(({ name, address, url, employees }: ICompanyCard) => {
        return (
          <div className="card" style={{ width: "30rem", margin: "2rem" }}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Address: {address} Website: {url}</p>
            </div>
            <Button onClick={() => { handleEmployees(employees) }}>Show Employees</Button>
          </div>
        )
      })}

      <EmployeesModal employees={employees} />
      <SCC.StyledLink to="/createCompany" className="btn btn-primary">Create Company</SCC.StyledLink>
    </SCC.StyledCardWrapper>
  )
}

export { CompanyCard }
