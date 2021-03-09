
export interface ICompanyCard {
  name: string
  address: string
  url: string
  employees: IEmployeeInfo[]
}

export interface IEmployeeList {
  employees: IEmployeeInfo[]
}

export interface IEmployeeInfo {
  name: string
  age: number
}
