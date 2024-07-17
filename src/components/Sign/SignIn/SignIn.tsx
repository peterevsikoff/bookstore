import { useState } from "react";
import { INPUTTYPE } from "../../../types";
import { Input } from "../../Input";
import "./sign-in.scss";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../redux/action-creators";

//Peter58FE
//dival22602@dalebig.com
//piJa5vpyJbGwFGXeonxL
//http://studapi.teachmeskills.by//activate/ODQyOA/c8ypx3-94a01b1bc94666258ade08cc5dde1f51
const SignIn = () => {
    const [email, setEmail] = useState("dival22602@dalebig.com"/*""*/);
    const [password, setPassword] = useState("piJa5vpyJbGwFGXeonxL"/*""*/);
    const dispatch = useDispatch();
    
    const handleSignIn = () => {
        dispatch(signInUser({
            email,
            password
        }));
    }
    return(
        <div className="sign-in">
            <Input type={INPUTTYPE.EMAIL} errorText={!email ? "Enter your email" : ""} value={email} setValue={setEmail} title="Email" placeholder="Your email"/>
            <Input type={INPUTTYPE.PASSWORD} errorText={!password ? "Enter your password" : ""} value={password} setValue={setPassword} title="Password" placeholder="Your password"/>
            <a className="sign-in-link">Forgot password?</a>
            <button disabled={!email || !password} onClick={() => handleSignIn()}>Sign in</button>
        </div>
    )
}

export { SignIn };