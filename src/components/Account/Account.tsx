import { Link } from "react-router-dom";
import { ArrowLeft } from "../media";
import "./account.scss";
import { Input } from "../Input";
import { INPUTTYPE, IStoreState } from "../../types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../redux/action-creators";

const Account = () => {
    const user = useSelector((state: IStoreState) => state.user);
        
    const [name, setName] = useState(user.user.username);
    const [email, setEmail] = useState(user.user.email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //https://studapi.teachmeskills.by/api/schema/swagger-ui/#/auth/auth_users_me_update
    const dispatch = useDispatch();
    
    const handleSaveChanges = () => {
        dispatch(updateUserName(name));
    }

    return(
        <section className="account">
            <div className="container">
                <div className="account__link">
                    <Link to="/books">
                        <ArrowLeft/>
                    </Link>
                </div>
                <h1>Account</h1>
                <h3>Profile</h3>
                <div className="account-wrap">
                    <Input type={INPUTTYPE.TEXT} value={name} setValue={setName} title="Name" placeholder="Your name"/>
                    <Input type={INPUTTYPE.TEXT} value={email} setValue={setEmail} title="Email" placeholder="Your email"/>
                </div>
                <h3>Password</h3>
                <div className="account-wrap">
                    <Input type={INPUTTYPE.PASSWORD} value={password} setValue={setPassword} title="Password" placeholder="Your password"/>
                </div>
                <div className="account-wrap">
                    <Input type={INPUTTYPE.PASSWORD} value={newPassword} setValue={setNewPassword} title="New password" placeholder="Your new password"/>
                    <Input type={INPUTTYPE.PASSWORD} value={confirmPassword} setValue={setConfirmPassword} title="Confirm password" placeholder="Confirm your password"/>
                </div>
                <div className="account-footer">
                    <button className="btn-save" onClick={() => handleSaveChanges()}>Save changes</button>
                    <Link to="/books" className="btn-cancel">Cancel</Link>
                </div>
            </div>
        </section>
    )
}

export { Account };