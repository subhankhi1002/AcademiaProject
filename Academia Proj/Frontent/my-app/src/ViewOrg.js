
import { useEffect, useState } from "react";
import App from "./App";
import HRRow from "./HRRow";
import { Link, useNavigate } from "react-router-dom";

const ViewOrg = () => {


    const [textData, setData] = useState();
    const [OrgId, setData1] = useState(0);
    const [OrgName, setData2] = useState("N/A");
    const [OrgAdss, setData3] = useState("N/A");
    const[OrgHr, setData4]=useState([]);
    let nav = useNavigate()


    const [reply, setData9] = useState();
  const det = async(Orgid)=>{
    const data2 = {
        orgId : OrgId
    }
    await fetch("http://localhost:8080/delOrgByOrgId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data2),
    })
    .then((response) => response.text())

    .then((reply) => {

        if(reply=="Deleted Successfully"){
          alert("Deleted! Go Back to previous page")

        }
        else if(reply=="Can't Delete"){
          alert("Can't Deleted!")
        }
    })
    .catch((e) =>{
      alert("Can't Delete!")
    });
    return;
  };




    const getEmployee = async(orgid) =>{
        const data = {
            orgId : orgid
        };
        console.warn("def",orgid);

        await fetch("http://localhost:8080/getOrgByOrgId", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })

          .then((response) => response.json())

          .then((textData) => {
            console.warn("data", textData);
            setData(textData);
            setData1(textData.orgId);
            setData2(textData.name);
            setData3(textData.address);
            setData4(textData.hrs);
            

          })
          .catch((e) => {
            alert("Can't Fetch Details! Go back to previous page!");
          });

    }

    useEffect(() => {
        const orgid= JSON.parse(localStorage.getItem('OrgId')) || [];
        console.warn("sbidbi",orgid);
        getEmployee(orgid);
        
      },[]);


      const search = async (e,Hr_Id) => {
        e.preventDefault();
        
    
        
                let path = '/hrDet'
                nav(path);
                
                localStorage.setItem('HrId', JSON.stringify(Hr_Id));
            
            
    
            return;
          }











    return(

        

        <>

<div id="searchBar">
            <label for="searchHrId" id="srch">Search HR ID:</label>
            <input type="text" id="searchHrId" name="searchHrId"/>
            <button type="button" id="searchBtn" onClick={
                 (e) =>
                 search(
                     e,
                     document.getElementById("searchHrId").value ,
                   
     
                 )
            }>Search</button>
        </div>

        <h1 className="OrgDet">Organization Details<br/><img className="orgLogo" src="https://png.pngtree.com/templates/sm/20180620/sm_5b29ed73cf5c8.jpg"/></h1>



<table className="OrgDetTable">
    <tr>
        <th>Organization ID</th>
        <td id="orgId">{OrgId}</td>
    </tr>
    <tr>
        <th>Organization Name</th>
        <td id="orgName">{OrgName}</td>
    </tr>
    <tr>
        <th>Organization Address</th>
        <td id="orgAddress">{OrgAdss}</td>
    </tr>
</table>

<h2 className="HrDet">HR Details</h2>


<table >
  <tr id="OrgtH">
    <td>HrId</td>
    <td>First Name</td>
    <td>Last Name</td>
    <td>Email</td>
    <td>Phone</td>
  </tr>
   

    {
        OrgHr.map((item) => {
            return(
            <HRRow 
              first={item.hrId} 
              second={item.firstName} 
              third={item.lastName}
              fourth={item.email}
              fifth={item.phone}
              
            />
            );
        })

    }
    
</table>
<div className="OrgBtn">

<button type="button" id="OrgdeleteBtn" onClick={
    (e) => det(
        {OrgId}
    )
}>Delete The Organization</button>
<Link to= "/hrForm" type="button" id="HraddBtn" onclick="">Add HR</Link>
<Link to= "/hrForm" id="HrupdateBtn" onclick="">Update HR Details</Link>

</div>


        </>
    )
}

export default ViewOrg;

