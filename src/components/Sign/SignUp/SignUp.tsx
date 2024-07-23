import { useState } from "react";
import { INPUTTYPE, IStoreState } from "../../../types";
import { Input } from "../../Input";
import "./sign-up.scss";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../../redux/action-creators";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const handleSignUp = () => {
        dispatch(signUpUser({
            username: name,
            email,
            password
        }));
    }
    const error = useSelector((state: IStoreState) => state.user.error);
    return(
        <div className="sign-up">
            <Input type={INPUTTYPE.TEXT} errorText={!name ? "Enter your name" : error?.username?.join("\n") || ""} value={name} setValue={setName} title="Name" placeholder="Your name"/>
            <Input type={INPUTTYPE.EMAIL} errorText={!email ? "Enter your email" : error?.email?.join("\n") || ""} value={email} setValue={setEmail} title="Email" placeholder="Your email"/>
            <Input type={INPUTTYPE.PASSWORD} errorText={!password || confirmPassword !== password ? "Enter your password" : error?.password?.join("\n") || ""} value={password} setValue={setPassword} title="Password" placeholder="Your password"/>
            <Input type={INPUTTYPE.PASSWORD} errorText={!confirmPassword || confirmPassword !== password ? "Confirm your password" : ""} value={confirmPassword} setValue={setConfirmPassword} title="Confirm password" placeholder="Confirm your password"/>
            <button disabled={!name || !password || !email || !confirmPassword || confirmPassword !== password} onClick={() => handleSignUp()}>Sign up</button>
        </div>
    )
}

export { SignUp };