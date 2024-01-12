
import { useEffect, useState } from "react";
import App from "./App";

const HrForm = () => {


    const [Hrs, setData] = useState([]);
    const [textData, setData1]=useState();


    const func = async (e,OrgId,OrgName,HrId,HrFirstName,HrLastName,HrEmail,HrPhone) =>{

        getHrs(OrgId);
        register(e,OrgId,OrgName,HrId,HrFirstName,HrLastName,HrEmail,HrPhone);

    }
    
    const getHrs = async(OrgId) =>{
        const data1 = {
            orgId : OrgId 
        }

        await fetch("http://localhost:8080/getAllHrByOrgId",{
        method : "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data1),
        })

        .then((response) => response.json())

          .then((textData) => {
            setData(textData)
    })
    //console.warn("hrId",Hrs);
    return;

    }




    const register = async (e,OrgId,OrgName,HrId,HrFirstName,HrLastName,HrEmail,HrPhone) => {
        
        e.preventDefault();
        const data = {
            orgId: OrgId,
            hrId: HrId,
            firstName:HrFirstName,
            lastName:HrLastName,
            email:HrEmail,
            phone:HrPhone,
            name: OrgName,
            hrs: Hrs
           
            
        };
      console.warn(data);

        await fetch("http://localhost:8080/setHr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.text())
          .then((textData) => {
            console.warn("data", textData);
            if(textData == "Set Successfully!"){
                alert("Added HR Successfully!");
            }
            else if(textData =="Can't Set"){
                alert("Can't Add!");
            }
            setData1(textData);
          })
          .catch((e) => {
            console.log("e", e);
          });
       
        return;
      };



















    return(

        <>

<form id="hrForm">
<div className="Org">
    Add your HR :
</div>

        

        <label for="hrId">HR ID:</label>
        <input type="text" id="hrId" name="hrId" required/>

        <label for="hrId">ORG ID:</label>
        <input type="text" id="orgId" name="hrId" required/>

        <label for="hrId">ORG NAME:</label>
        <input type="text" id="orgName" name="hrId" required/>

        <label for="hrFirstName">First Name:</label>
        <input type="text" id="hrFirstName" name="hrFirstName" required/>

        <label for="hrLastName">Last Name:</label>
        <input type="text" id="hrLastName" name="hrLastName"/>

        <label for="hrEmail">Email:</label>
        <input type="email" id="hrEmail" name="hrEmail" />

        <label for="hrPhoneNumber">Phone Number:</label>
        <input type="tel" id="hrPhoneNumber" name="hrPhoneNumber" />

        <button type="button" id="addBtn" onClick={
            (e) =>

           func(
                e,
                document.getElementById("orgId").value,
                document.getElementById("orgName").value,
                document.getElementById("hrId").value,
                document.getElementById("hrFirstName").value,
                document.getElementById("hrLastName").value,
                document.getElementById("hrEmail").value,
                document.getElementById("hrPhoneNumber").value,

            )

        }>Add</button>
        <button type="button" id="saveBtn" onclick="save()">Update</button>
    </form>

        </>
    )
}

export default HrForm;

