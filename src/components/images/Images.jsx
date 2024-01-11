import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";


const Images = () => {
    return(
        <div className="container-fluid">
            <button className="btn btn-primary p-3">
                <Link to={'addImage'}></Link>
                <FaPlus />   
            </button>
        </div>
    )
}
export default Images