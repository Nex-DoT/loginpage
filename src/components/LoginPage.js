import React,{ useState ,useEffect } from 'react';
import Validation from './Validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    setFocus({...focus , [event.target.name]:true})
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
        <div>
            <h1>singUp</h1>
            <form onSubmit={submitHandeler}>
                <div>
                    <label>Name :</label>
                    <input type="text" name='name' value={data.name} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.name && focus.name && <span>{errrors.name}</span>}
                </div>
                <div>
                    <label>Email :</label>
                    <input type="text" name='email' value={data.email} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.email && focus.email && <span>{errrors.email}</span>}

                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name='password' value={data.password} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.password && focus.password && <span> {errrors.password} </span>}
                </div>
                <div>
                    <label>confirm Paswword :</label>
                    <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.confirmpassword && focus.confirmpassword && <span> {errrors.confirmpassword} </span>}
                </div>
                <div>
                    <label>I accept terms of privecy policy</label>
                    <input type="checkbox" name='checkbox' value={data.name} onChange={changeHandeler} onFocus={focusHandeler}/>
                    {errrors.checkbox && focus.checkbox && <span>{errrors.checkbox}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default LoginPage;