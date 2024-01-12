import App from "./App";
const HRRow = (props) => {

    return(
        <>
         <tr >
        <th className="hrTable">{props.first}</th>
        <th className="hrTable">{props.second}</th>
        <th className="hrTable">{props.third}</th>
        <th className="hrTable">{props.fourth}</th>
        <th className="hrTable">{props.fifth}</th>
       
    </tr>
        </>
    )
}

export default HRRow;