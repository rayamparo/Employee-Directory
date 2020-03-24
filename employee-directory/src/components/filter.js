import React from "react";

function Filter(props) {

    const style = {
        margin: '10px',
         justifyContent: 'center'
    }


    return (
        <form style={style} class="form-inline">
            <input class="form-control mr-sm-2 col-md-4" type="search" placeholder="Search by Employee Name" aria-label="Search" />
            <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        
    );
}

export default Filter;