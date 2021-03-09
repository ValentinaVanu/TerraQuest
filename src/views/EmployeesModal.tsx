import React, { ReactElement } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import { useDispatch, useSelector } from 'react-redux'
import { seModalApplications } from '../store/applications/actions'
import { IEmployeeInfo, IEmployeeList } from '../types'


const EmployeesModal = ({ employees }: IEmployeeList): ReactElement => {
  const modal = useSelector(({ applications }: any) => applications.modalApplicationState)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(seModalApplications(false))
  }

  return (
    <Modal show={modal} style={{ height: "80%" }}>
      <ModalHeader>
        <ModalTitle>View Employees</ModalTitle>
      </ModalHeader>
      <ModalBody>
        {(employees || []).map(({ name, age }: IEmployeeInfo) => {
          return (
            <div>
              <div style={{ fontSize: "18px", fontWeight: "bold", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                <span style={{ fontSize: "16px" }}>Name:</span> {name}
                <span style={{ fontSize: "16px" }}> Age:</span> {age}
              </div>
            </div>
          )
        })}
      </ModalBody>
      <ModalFooter>
        <Button onClick={closeModal}>Close</Button>
      </ModalFooter>
    </Modal>
  )
}
export { EmployeesModal }
