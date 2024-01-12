import { useEffect, useState } from "react";
import App from "./App";
import { Link } from "react-router-dom";

const HrDet = () => {


    
    const [textData, setData] = useState();
    const [HrId, setData1] = useState(0);
    const [First, setData2] = useState("N/A");
    const [Last, setData3] = useState("N/A");
    const [Email, setData4] = useState("N/A");
    const [Phone, setData5] = useState("N/A");



  const [reply, setData9] = useState();
  const det = async(Hrid)=>{
    const data2 = {
        hrId : HrId
    }
    await fetch("http://localhost:8080/delHrByHrId", {
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
      alert("Can't Delete!");
    });
    return;
  };



    const getEmployee = async(Hrid) =>{
        const data = {
            hrId : Hrid
        };
        console.warn("def",Hrid);

        await fetch("http://localhost:8080/getHrByHrId", {
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
            setData1(textData.hrId);
            setData2(textData.firstName);
            setData3(textData.lastName);
            setData4(textData.email);
            setData5(textData.phone);
            

          })

          .catch((e) => {
            alert("Can't Fetch Details! Go back to previous page!");
          });
          

    }

    useEffect(() => {
        const hr_id= JSON.parse(localStorage.getItem('HrId')) || [];
        console.warn("myhr",hr_id);
        getEmployee(hr_id);
        
      },[]);
    















    return(

        <>

<h1 className="empProf">HR Details<br/><img className="profile" src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"/></h1>

<div className="empDet">
    <div>
    <p className="emp"><strong>HR ID:</strong> {HrId}</p>
    <p className="emp"><strong>First Name:</strong> {First}</p>
    <p className="emp"><strong>Last Name:</strong> {Last}</p>
    <p className="emp"><strong>Email:</strong> {Email}</p>
    <p className="emp"><strong>Phone Number</strong>{Phone}</p>
    </div>
    <div className="rightcol">
        <img className="profile2" src="https://img.freepik.com/premium-vector/people-ribbon-logo-modern-leadership-logo-human-charity-logo_327835-2463.jpg"/>
        <Link to="/HrForm"className="hrUpdBtn">Update</Link>
        <br/>
        <button className="hrDetBtn" onClick={
          (e) =>
          det(
            {HrId}
          )
        }>Delete</button>
    </div>
</div>



        </>
    )
}

export default HrDet;