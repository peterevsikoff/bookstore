import { useState } from "react";
import "./sign.scss";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

const Sign = () => {
    const [activeTab, setActiveTab] = useState("sign in");
    return(
        <section className="sign">
            <div className="container">
                <div className="sign-wrap">
                    <div className="sign-container">
                        <div className="sign-tab">
                            <button className={activeTab === "sign in" ? "active" : ""} onClick={() => setActiveTab("sign in")}>sign in</button>
                            <button className={activeTab === "sign up" ? "active" : ""} onClick={() => setActiveTab("sign up")}>sign up</button>
                        </div>
                        {
                            activeTab === "sign in" &&
                            <SignIn />
                        }
                        {
                            activeTab === "sign up" &&
                            <SignUp />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Sign };