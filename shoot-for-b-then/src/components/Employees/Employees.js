import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import API from '../../utils/API/API';

export default function Employees() {
    // employees is your state variable (only valid within this function)
    // setEmployees is your setter
    // [] inside your useState is the initial value of 'employees'


    const [employees, setEmployees] = useState([]);

    // When this component loads ("mounts"),
    // this will run (once)
    // run this code AGAIN, when variableName updates
    // this works as componentDidMount + componentDidUpdate
    useEffect(() => {
        API.randomUsers(9)
        .then(response => {
            setEmployees(response.data.results);
        });
    }, []);

    /*
    employeeCards = [
        <h5>Paul Kwon</h5>,
        <h5>Raymond Ampero</h5>,
        ...
    ]
    */
    const employeeCards = employees.map( employee => <Card employee={employee}/> );
    
    return (
        <div className="container">
            <div className="row">
                {employeeCards}
            </div>
        </div>
    );
}