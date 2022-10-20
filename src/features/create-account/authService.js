import React from 'react'
const BASE_URL = '';
const signup = async(formdata)=>{
    // const response =  await fetch(BASE_URL+ '/signup', {
    //         method:"post",
    //         body:JSON.stringify(formdata)
    //     }).then(res => res.json());

    //     if(response.data){
        await localStorage.setItem('user', JSON.stringify(formdata))
            //  return response.data;   
        // }
        return formdata;
}

const authService = {
    signup,
}

export default authService