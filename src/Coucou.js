import React, {useState} from "react";

export const Coucou = ({number}) => {
    const [alert, setAlert] = useState('alerte')
    return(
        <div>
            {number}
            {alert}
            <input onChange={(event)=>setAlert(event.target.value)}/>
        </div>
    )
}