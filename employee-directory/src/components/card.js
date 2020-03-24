import React from 'react';

function Cards(props) {

    const style = {
        width: '18rem',
        textAlign: 'center',
        margin: '0 auto',
    }

    const container = {
        marginTop: '50px'
    }

    return (
        <div class="container" style={container}>

            <div class="row">

                <div class="col-md-4">
                <div class="card" style={style}>
                    <div class="card-header">
                        Name: {props.name}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Department: {props.department}</li>
                        <li class="list-group-item">Role: {props.role}</li>
                        <li class="list-group-item">Years of Service: {props.years}</li>
                    </ul>
                </div>
                </div>

                <div class="col-md-4">
                <div class="card" style={style}>
                    <div class="card-header">
                        Name: {props.name}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Department: {props.department}</li>
                        <li class="list-group-item">Role: {props.role}</li>
                        <li class="list-group-item">Years of Service: {props.years}</li>
                    </ul>
                </div>
                </div>

                <div class="col-md-4">
                <div class="card" style={style}>
                    <div class="card-header">
                        Name: {props.name}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Department: {props.department}</li>
                        <li class="list-group-item">Role: {props.role}</li>
                        <li class="list-group-item">Years of Service: {props.years}</li>
                    </ul>
                </div>
                </div>

            </div>



        </div>
    );
};

export default Cards;