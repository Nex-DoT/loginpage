const Validation = data => {
     const errors = {};
     
    //  username test
     if(!data.name.trim()){
        errors.name = "Username fild is empty"
     }else if(!/^[a-zA-Z0-9]+$/.test(data.username)){
        errors.name = "Username is not vaild"
     }else{
        delete errors.name;
     }


    // email test
    if(!data.email.trim()){
        errors.email = "Email fild is empty"
     }else if(!  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(data.email)){
        errors.email = "Email is not vaild"
     }else{
        delete errors.email;
     }


    // password 
    if(!data.password.trim()){
        errors.password = "password fild is empty"
     }else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(data.password)){
        errors.password = "password should contain atleast one number and one special character"
     }else{
        delete errors.password;
     }


     // confirm passWord
     if(!data.confirmpassword.trim()){
        errors.confirmpassword = "confirmpassword fild is empty"
     }else if(data.confirmpassword !== data.password){
        errors.confirmpassword = "password do not match"
     }else{
        delete errors.confirmpassword;
     }


     // acepet terms
     if(data.checkbox){
        delete errors.checkbox
     }else{
        errors.checkbox = "Accept our regulations"
     }

     return errors;

};

export default Validation;