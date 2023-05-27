import React,{ useState ,useEffect } from 'react';
import Validation from './Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Login.module.css";
import {Link} from "react-router-dom";
const SingUp = () => {
    const [data , setData] = useState({
        email:'',
        password:''

    })
const [errrors, setErrrors] = useState({}) 
const [focus,setFocus] = useState({})


const changeHandeler = event=>{
     const value = event.target.value;
     if(event.target.name === "checkbox"){
         setData({...data , [event.target.name]:[event.target.checked]})
     }else{
        setData({...data , [event.target.name]:value})
     }
     console.log(data);
}
useEffect(()=>{
    setErrrors(Validation(data,"Login"));
} , [data , focus])
const focusHandeler = event=>{
    setFocus({...focus , [event.target.name]:[!data.checkbox]})
}
const submitHandeler =event=>{
    event.preventDefault()
    if(!Object.keys(errrors).length){
        console.log(data);
        SucessNotify()
    }else{
        setFocus({
            email:true,
            password:true
        })
        WarningNotify()
    }
}
const WarningNotify = ()=>{toast.error('complite your fild', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });}
const SucessNotify = ()=>{toast.success('Welcome to our club.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });}
    return (
        <div className={styles.box}>
            <h1>Login</h1>
            <form onSubmit={submitHandeler}>
                <div className={styles.inputs}>
                    <label>Email </label>
                    <input className={(errrors.email) ? styles.erore : styles.success} type="text" name='email' value={data.email} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.email && focus.email && <span>{errrors.email}</span>}

                </div>
                <div className={styles.inputs}>
                    <label>Password </label>
                    <input className={(errrors.password) ? styles.erore : styles.success} type="password" name='password' value={data.password} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.password && focus.password && <span> {errrors.password} </span>}
                </div>
                <button className={styles.btn} type="submit">Login</button>
                <Link to="/singup" className={styles.logBtn}>SingUp</Link>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SingUp;