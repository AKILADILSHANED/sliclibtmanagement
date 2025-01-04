import {NextResponse } from "next/server";

export const POST = async (req) => {
    try{
        const {email, password} = await req.json()
    
        if(email === "akila@gmail.com" && password === "123456"){
            return NextResponse.json({Message: "1"});
        }else{
            return NextResponse.json({ Message: "0"});
        }
    }catch(error){
        alert("Error: " + error)
    }   
  
};
