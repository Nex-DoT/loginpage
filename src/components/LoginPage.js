import React,{ useState } from 'react';

const LoginPage = () => {
    const [data , setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
        checkbox:false,
    })



const changeHandeler = event=>{
     const value = event.target.value;
     if(event.target.name === "checkbox"){
         setData({...data , [event.target.name]:[event.target.checked]})
     }else{
        setData({...data , [event.target.name]:value})
     }
     console.log(data);
}


    return (
        <div>
            <h1>singUp</h1>
            <form>
                <div>
                    <label>Name :</label>
                    <input type="text" name='name' value={data.name} onChange={changeHandeler}/>
                </div>
                <div>
                    <label>Email :</label>
                    <input type="text" name='email' value={data.email} onChange={changeHandeler}/>
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name='password' value={data.password} onChange={changeHandeler}/>
                </div>
                <div>
                    <label>confirm Paswword :</label>
                    <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={changeHandeler}/>
                </div>
                <div>
                    <label>I accept terms of privecy policy</label>
                    <input type="checkbox" name='checkbox' value={data.name} onChange={changeHandeler}/>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;