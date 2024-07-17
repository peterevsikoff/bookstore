import { useState } from "react";
import { INPUTTYPE } from "../../../types";
import { Input } from "../../Input";
import "./sign-up.scss";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSignUp = () => {

    }
    return(
        <div className="sign-up">
            <Input type={INPUTTYPE.TEXT} errorText={!name ? "Enter your name" : ""} value={name} setValue={setName} title="Name" placeholder="Your name"/>
            <Input type={INPUTTYPE.EMAIL} errorText={!email ? "Enter your email" : ""} value={email} setValue={setEmail} title="Email" placeholder="Your email"/>
            <Input type={INPUTTYPE.PASSWORD} errorText={!password || confirmPassword !== password ? "Enter your password" : ""} value={password} setValue={setPassword} title="Password" placeholder="Your password"/>
            <Input type={INPUTTYPE.PASSWORD} errorText={!confirmPassword || confirmPassword !== password ? "Confirm your password" : ""} value={confirmPassword} setValue={setConfirmPassword} title="Confirm password" placeholder="Confirm your password"/>
            <button disabled={!name || !password || !email || !confirmPassword || confirmPassword !== password} onClick={() => handleSignUp()}>Sign up</button>
        </div>
    )
}

export { SignUp };