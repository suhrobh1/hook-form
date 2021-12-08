import React, {useState} from 'react';
import './Form.css'



const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    return(
        <div>
            <form className = "form">
                <div>
                    <label htmlFor = "firstName">First Name: </label>
                    <input name = "firstName" type = "text" value = {firstName} onChange = { (e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "lastName"> Last Name: </label>
                    <input name = "lastName" type = "text" value = {lastName} onChange = {(e) => setLastName(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor = "email"> Email: </label>
                    <input name = "email" type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "password"> Password: </label>
                    <input name = "password" type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "confirmPassword"> Confirm Password: </label>
                    <input name = "confirmPassword" type = "password" value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)}  />
                </div>
            </form>
            <div>
                <p style= {{fontWeight: "bold", fontSize: "1.3em"}}> Your Form Data</p>
                <div>
                    <p>First Name:<span className = "userInputRender">{firstName}</span></p>
                    <p>Last Name:<span className = "userInputRender">{lastName}</span> </p>
                    <p>Email:<span className = "userInputRender">{email}</span> </p>
                    <p>Password:<span className = "userInputRender">{password}</span>  </p>
                    <p>Confirm Password:<span className = "userInputRender">{confirmPassword}</span> </p>
                </div>
            </div>
        </div>
    )
}
export default Form;
