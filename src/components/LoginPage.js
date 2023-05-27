import React,{ useState ,useEffect } from 'react';
import Validation from './Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./LoginPage.module.css"
const LoginPage = () => {
    const [data , setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
        checkbox:false,
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
    setErrrors(Validation(data));
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
            name:true,
            email:true,
            password:true,
            confirmpassword:true,
            checkbox:true
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
            <h1>Singup</h1>
            <form onSubmit={submitHandeler}>
                <div className={styles.inputs}>
                    <label>Name </label>
                    <input className={(errrors.name) ? styles.erore : styles.success} type="text" name='name' value={data.name} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.name && focus.name && <span>{errrors.name}</span>}
                </div>
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
                <div className={styles.inputs}>
                    <label>C Paswword</label>
                    <input className={(errrors.confirmpassword) ? styles.erore : styles.success} type="password" name='confirmpassword' value={data.confirmpassword} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.confirmpassword && focus.confirmpassword && <span> {errrors.confirmpassword} </span>}
                </div>
                <div className={styles.checkbox}>
                    <label>I accept terms of privecy policy </label>
                    <input className={(errrors.checkbox) ? styles.erore : styles.success} type="checkbox" name='checkbox' value={data.name} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.checkbox && focus.checkbox && <span>{errrors.checkbox}</span>}
                </div>
                <button className={styles.btn} type="submit">Submit</button>
                <a href="" className={styles.logBtn}>Login</a>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default LoginPage;