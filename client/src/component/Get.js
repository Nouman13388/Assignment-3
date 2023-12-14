import {useState} from 'react'
import 'axios'
import  axios  from 'axios';

function Get() {
const [employees, setEmployees] = useState([])
const getAll = async() => {
    axios.get('http://localhost:3001/').then((response) => {
        setEmployees(response.data)
})
}

const getone = async() => {
    const mail =  prompt("Enter Email of Employee to get details")
    if (mail === '') 
    {
      setEmployees([])
      return
    }
    axios.get('http://localhost:3001/' + mail).then((response) => {
        setEmployees(response.data)
})
}
  return (
<div className="container mx-auto">
  <h1 className="mt-10 text-4xl font-bold">Employees</h1>
  <div className="flex flex-wrap">
    {employees.map((employee) => (
      <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={employee._id}>
        <Display name={employee.name} email={employee.email} phone={employee.phone} />
      </div>
    ))}
  </div>
  <button onClick={getAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-4">
    Get All Employees
  </button>
  <button onClick={getone} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
    Get One Employee
  </button>
</div>
  )
}

function Display({name, email, phone}) {
    return (
      <div className="col">
      <div className="bg-gray-900 text-white p-4 rounded shadow">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>    
      );
}

export default Get