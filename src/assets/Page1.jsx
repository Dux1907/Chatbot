import { NavLink } from "react-router-dom";
import '../index.css'
const Page1 = () => {
    return (
        <div className="container-fluid">
            <div className="row min-vh-100 justify-content-center align-content-center text-center bg-dark text-white">
                <div className="col-8">
                <h1 style = {{fontSize:'48px'}}>Enter into Student Info System
            </h1>
                    <button className='btn btn-primary mt-3'>
                    <NavLink to = '/chatbot'>Enroll Now</NavLink></button>
                </div>
            </div>
        </div>
            
       
    );
};

export default Page1;