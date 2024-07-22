import { Link } from "react-router-dom";
import { ArrowLeft } from "../../media";
import "./registration-success.scss";

const RegistrationSuccess = () => {
    return(
        <section className="registration-success">
            <div className="container">
                <div className="registration-success__link">
                    <Link to="/books">
                        <ArrowLeft/>
                    </Link>
                </div>
                <h1>User activation</h1>
                <div>
                    <p>
                        An email has been sent to you to activate your user
                    </p>
                </div>
            </div>
        </section>
    )
}

export { RegistrationSuccess };