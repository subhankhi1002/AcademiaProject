

import App from "./App";
const OrgRow = (props) => {

    return(
        <>
         <tr >
        <th className="orgTable">{props.first}</th>
        <th className="orgTable">{props.second}</th>
        <th className="orgTable">{props.third}</th>
    
       
    </tr>
        </>
    )
}

export default OrgRow;