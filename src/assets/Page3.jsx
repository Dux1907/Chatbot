import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Page3 = () => {
  let product = useSelector((state) => state.Info.current);
  return (
    <div className="container-fluid">
      <div className="row min-vh-100 justify-content-center align-content-center text-center bg-dark text-white">
        <div className="col-9">
          <h1>
            Your name {product.name} and age {product.age} has been added to
            student system.
          </h1>
          <h3 className="m-3">You may now exit.</h3>
          <button className="btn btn-primary">
            <NavLink to="/">Exit</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
