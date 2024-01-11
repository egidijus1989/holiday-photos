import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";


const Images = () => {
    return(
        <div className="container-fluid">
            <button className="btn btn-light p-3">
                <Link to='/addImage' style={{color: "black", textDecoration: "none"}}><FaPlus/> Add Photo</Link> 
            </button>
        </div>
    )
}
export default Images