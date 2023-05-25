import React,{ useState ,useEffect } from 'react';
import Validation from './Validation';
const LoginPage = () => {
    const [data , setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
        checkbox:false,
    })
const [errrors, setErrrors] = useState({}) 


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
    console.log(errrors);
} , [data])

    return (
        <div>
            <h1>singUp</h1>
            <form>
                <div>
                    <label>Name :</label>
                    <input type="text" name='name' value={data.name} onChange={changeHandeler}/>
                    <p>{errrors.name}</p>
                </div>
                <div>
                    <label>Email :</label>
                    <input type="text" name='email' value={data.email} onChange={changeHandeler}/>
                    <p>{errrors.email}</p>
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name='password' value={data.password} onChange={changeHandeler}/>
                    <p>{errrors.password}</p>
                </div>
                <div>
                    <label>confirm Paswword :</label>
                    <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={changeHandeler}/>
                    <p>{errrors.confirmpassword}</p>
                </div>
                <div>
                    <label>I accept terms of privecy policy</label>
                    <input type="checkbox" name='checkbox' value={data.name} onChange={changeHandeler}/>
                    <p>{errrors.checkbox}</p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;