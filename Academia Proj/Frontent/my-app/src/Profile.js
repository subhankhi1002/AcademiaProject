import { useEffect, useState } from "react";
import App from "./App";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {

    const [textData, setData] = useState();
    const [EmpId, setData1] = useState(0);
    const [First, setData2] = useState("N/A");
    const [Last, setData3] = useState("N/A");
    const [Email, setData4] = useState("N/A");
    const [Title, setData5] = useState("N/A");


    const getEmployee = async(e) =>{
        const data = {
            email: e,
        };
        console.warn("def",e);

        await fetch("http://localhost:8080/getUser", {
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
            setData1(textData.empId);
            setData2(textData.firstName);
            setData3(textData.lastName);
            setData4(textData.email);
            setData5(textData.title);

          })
          

    }

    useEffect(() => {
        const email= JSON.parse(localStorage.getItem('Email')) || [];
        getEmployee(email);
        
      },[]);
    return(

        <>

<h1 className="empProf">Welcome to the Outreach Department<br/><img className="profile" src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"/><br/>Your Profile</h1>

<div className="empDet">
    <div>
    <p className="emp"><strong>Employee ID:</strong>{EmpId} </p>
    <p className="emp"><strong>First Name:</strong>{First}</p>
    <p className="emp"><strong>Last Name:</strong>{Last}</p>
    <p className="emp"><strong>Email:</strong>{Email}</p>
    <p className="emp"><strong>Title:</strong>{Title}</p>
    </div>
    <div className="rightcol">
        <img className="profile2" src="https://img.freepik.com/premium-vector/people-ribbon-logo-modern-leadership-logo-human-charity-logo_327835-2463.jpg"/>
        <Link to="/form" className="orgBtn">Go to Organization</Link>
    </div>

    <Link to="/orgDet" className="vao">View All Organization</Link>

</div>



        </>
    )
}

export default Profile;