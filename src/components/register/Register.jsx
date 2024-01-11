import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [user, loading, error] = useAuthState(auth);

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const submitHandle = (e) =>{
        e.preventDefault()
        console.log(formData)
        registerWithEmailAndPassword(formData.name, formData.email, formData.password)
    }

    useEffect(() => {
        if(loading) return;
        if(user) navigate("/works");
    }, [user, loading])
    
    return(
        <>
        <h2 className="mt-3 text-center">Registration</h2>
        <form className="form" onSubmit={submitHandle}>
            <div className="mb-3">
                <input type="text"className="form-control" placeholder="Your name" id="name" name="name" onChange={handleChange} value={formData.name}/>
            </div>
            <div className="mb-3">
                <input type="email"className="form-control" placeholder="Your email" id="email" name="email" onChange={handleChange} value={formData.email}/>
            </div>
            <div className="mb-3">
                <input type="password"className="form-control" placeholder="Your password" id="password" name="password" onChange={handleChange} value={formData.password}/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
            <div className="mb-3">
                <p>Already have an account? <Link to={"/"}>Log In</Link></p>
            </div>
        </form>
        </>
    )
}
export default Register