
import { Link, useNavigate } from "react-router-dom";
import App from "./App";
import { useState } from "react";


const Form = () => {


    const [upd,setData10] = useState();
    const update = async(e,OrgId,OrgName,OrgAdss) =>{
        e.preventDefault();
        const data = {
            orgId: OrgId,
            name: OrgName,
            address: OrgAdss
        };

        await fetch("http://localhost:8080/updateOrg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((upd)=>{
            alert("Updated!");
            setData10(upd);

        }).catch((e) => {
            console.log("e", e);
          });
        return;
      };

    



    const [regData, setData] = useState([]);
    let nav = useNavigate();
    const register = async (e,OrgId,OrgName,OrgAdss) => {
        e.preventDefault();
        const data = {
            orgId: OrgId,
            name: OrgName,
            address: OrgAdss
        };

        await fetch("http://localhost:8080/setOrg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.text())
          .then((textData) => {
            console.warn("data", textData);
            if(textData == "Set successfully"){
                alert("Organization Added Sucessfully!");
                
            }else if(textData == "Can't Set"){
                alert("Can't Register. Maybe try an unique orgId!");
            }
            setData(textData);
          })
          .catch((e) => {
            console.log("e", e);
          });
        return;
      };




const search = async (e,OrgId) => {
    e.preventDefault();
    

    
            let path = '/viewOrg'
            nav(path);
            
            localStorage.setItem('OrgId', JSON.stringify(OrgId));
        
        

        return;
      }
      
   
      















    return(

    <>
<div className="addorg">

<div className="col1">

<form id="orgForm">

    <h3 className="add">Add your Organization :</h3>




        <div className="column">
            <img src="https://w7.pngwing.com/pngs/932/229/png-transparent-spirit-and-truth-world-outreach-church-computer-icons-business-organization-sales-team-text-logo-grass-thumbnail.png" alt="outreach_logo" className="outreachLogo1"/>
        </div>
       

        <label for="orgId">Organization ID:</label>
        <input type="text" id="orgId" name="orgId" required/>

        <label for="orgName">Organization Name:</label>
        <input type="text" id="orgName" name="orgName" required/>

        <label for="orgAddress">Organization Address:</label>
        <input type="text" id="orgAddress" name="orgAddress"/>

        <button type="button" id="registerBtn" onClick={
            (e) =>
            register(
                e,
                document.getElementById("orgId").value ,
                document.getElementById("orgName").value ,
                document.getElementById("orgAddress").value 

            )
        }>Register</button>
        <button type="button" id="saveBtn" onClick={
            (e) =>
            update(
                e,
                document.getElementById("orgId").value ,
                document.getElementById("orgName").value ,
                document.getElementById("orgAddress").value
            )
        }>Update</button>
        

       
    </form>

   
    </div>

 
    <div className="col1">
<div id="searchBarorg">
            
            <label for="searchOrgId" id="sr">Search Organization ID:</label>
            <input type="text" id="searchOrgId" name="searchOrgId"/>
            <button type="button" id="searchBtn" onClick={
                 (e) =>
                 search(
                     e,
                     document.getElementById("searchOrgId").value ,
                   
     
                 )
            }>Search</button>

        </div>
        </div>

    </div>

        </>
    )
}

export default Form;

