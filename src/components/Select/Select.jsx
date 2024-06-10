import { Children } from "react"
import "./styles.css"

function Select ({idSelect, name, labelname, children}) {
    //console.log(idSelect);
    return (
        <div className="select-element">
            {labelname ?  <label htmlFor={idSelect} className="label">{labelname}</label> : null}
           
            <select id={idSelect} name={name} className="select">{children}</select>
        </div>
    )
}

export default Select