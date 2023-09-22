import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-4xl text-bold">Ooops!!!! 404. Page not Fount</h1>
            <NavLink to="/"><button className="btn btn-primary">Go Back To Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;