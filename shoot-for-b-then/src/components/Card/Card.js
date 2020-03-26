import React, {} from 'react';

export default function Card(props) {


    const style = {
        width: '18rem',
        textAlign: 'center',
        margin: '0 auto',
    }

    const container = {
        marginTop: '50px'
    }


    return (

            <div class="col-md-4" style={container}>
            <div class="card" style={style}>
                <div class="card-header">
                    Name: {props.employee.name.first} {props.employee.name.last}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Department: {props.department}</li>
                    <li class="list-group-item">ID: {props.employee.location.postcode}</li>
                    <li class="list-group-item">Years of Service: {props.employee.registered.age}</li>
                </ul>
            </div>
            </div>
       

        // <h5>{props.employee.name.first} {props.employee.name.last}</h5>
    );
    }