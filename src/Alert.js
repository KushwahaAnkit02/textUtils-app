import React from 'react'

function Alert(props) {

    return (
        <div style={{ height: "50px"}}>
            {props.alert && <div div className={`alert alert-${props?.alert?.type}`} role="alert"  style={{ textAlign:"center" }}>
                {props?.alert?.msg}
            </div>}
        </div>

    )
}
export default Alert
