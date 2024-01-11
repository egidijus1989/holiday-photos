import { useEffect, useState } from "react";
// import * as service from "../../services/TimeCrudServices";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "../../services/AuthServices"

const AddImage = () => {
    return(
        <div className="container-flui">
            <p>add photo</p>
        </div>
    )
}
export default AddImage