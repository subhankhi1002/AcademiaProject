
import { useEffect, useState } from "react";
import App from "./App";
import OrgRow from "./OrgRow";

const OrgDet = () => {


    const[textData, setData4]=useState([]);
    const [OrgId, setData1] = useState(0);
    const [Name, setData2] = useState("N/A");
    const [Adds, setData3] = useState("N/A");
    const det = async() =>{
      

        fetch("http://localhost:8080/getOrg",{
        method : "GET",
        headers: {
            "Content-Type": "application/json",
          }}
        )

        .then((response) => response.json())
        .then((textData) => {
            setData4(textData)
            
        })

    }

    useEffect(() => {
       det();
        
      },[]);

    return(

        <>
        <div>
        <h1 className="OrgDetHead">Organization Details</h1>

    <table>


        <tr className="orgTable" id="OrgtH">

        <td>OrgId</td>
        <td>Name</td>
        <td>Address</td>

        </tr>
    {


        
        textData.map((item) => {
            return(
            <OrgRow 
              first={item.orgId} 
              second={item.name} 
              third={item.address}
              
              
            />
            );
        })

    }

        </table>
        
        
    </div>
        
        
        </>




  
    )
        

}

export default OrgDet;