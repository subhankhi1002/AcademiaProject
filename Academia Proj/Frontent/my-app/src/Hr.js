import App from "./App";

const Hr = () => {
    return(

        <>
            <tr className="HrRow">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button onclick="showForm">Edit</button>
        </td>
        <td>
            <button onclick="showForm">Delete</button>
        </td>


        <form class="hidden-form" id="editForm">
    <label for="editFirstName">Edit First Name:</label>
    <input type="text" id="editFirstName" name="editFirstName" required/>
    <label for="editLastName">Edit Last Name:</label>
    <input type="text" id="editLastName" name="editLastName"/>
    <label for="editEmail">Edit Email:</label>
    <input type="email" id="editEmail" name="editEmail" required/>
    <label for="editPhoneNumber">Edit Phone Number:</label>
    <input type="tel" id="editPhoneNumber" name="editPhoneNumber"/>
    <input type="hidden" id="editId" name="editId"/>
    <button type="button" onclick="updateRow()">Update</button>
    </form>
    </tr>

        </>
    )
}

export default Hr;