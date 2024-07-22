import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { signUpActivate } from "../../../redux/action-creators";

const SignUpActivation = () => {
    const { uid = "", token = "" } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(signUpActivate({uid, token}));
    }, []);
    
    return(
        <section className="sign-up-activation">
            <div className="container">
                <h1>User activation...</h1>
            </div>
        </section>
    )
}

export { SignUpActivation };