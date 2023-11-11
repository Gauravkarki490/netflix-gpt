export const checkValidData = (email,password)=>{
    const isEmailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email)
    const isPasswordValid =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)

    if(!isEmailValid){
        return "Email ID is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }

    return null;

}

export const checkSignUpData =(name,email,password,confirmPassword)=>{

    const isName = name !== ''
    const isEmailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email)
    const isPasswordValid =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)
    // const isPasswordValid =true

    if(!isName){
        return "Name is not valid"
    }
    if(!isEmailValid){
        return "Email ID is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }
    if(confirmPassword !== password)
    {
        return "Password don't match"
    }

    return null;
}
