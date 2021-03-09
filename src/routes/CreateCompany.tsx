import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getNewApplicationsAction } from '../store/applications/actions'


const CreateCompany: React.FC = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState({name: '', address: '', website: '', employees: ''})

  const getinputValue = (e: any) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
    dispatch(getNewApplicationsAction('ceva'))
  }
  console.log(inputValue)
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h2 style={{textAlign: "center"}}>Create Company</h2>
      <div className="card" style={{width: "60rem", margin: "2rem"}}>
        <div className="card-body">
          <div className="card-title">Name: 
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Company Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={getinputValue} name='name' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </div>
          <div className="card-text">Address:
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Address</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={getinputValue} name='address' aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </div>
          <div className="card-text">Website:
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  https://example.com/users/
            </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={getinputValue} name='website' id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
          </div>
          <div className="card-text">Employees:
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Employees</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={getinputValue} name='employees' as="textarea" aria-label="With textarea" />
            </InputGroup>
          </div>
        </div>
        <Button>Send</Button>
        <Link style={{backgroundColor: "red", borderColor: "red"}} to="/" className="btn btn-primary">Exit</Link>
      </div>
    </div>
  )
}
export { CreateCompany }
