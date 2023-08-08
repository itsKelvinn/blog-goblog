"use client";
import Link from "next/link";
import { useState } from "react";

const RegisPage = () => {

    const [userData, setUserData] = useState({
        user_fullname: '',
        user_email: '',
        user_password: '',
    });

    const onsubmit = async () => {
        
        setUserData({
            user_fullname : '',
            user_email : '',
            user_password : '',
            user_role : 'user',
            image_path : ''
        })

        const res = await fetch('http://127.0.0.1:8000/api/users',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(userData)
        })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    };

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex flex-col card-shadow p-5 border rounded">
                    <p className="text-3xl font-bold text-center m-7">Sign Up</p>
                    <div className="flex flex-col gap-2">

                        <label htmlFor="Full_name" className="text-sm"> Full Name </label>
                        <input type="text" name="user_fullname" className="border border-inputcolor rounded text-sm p-2"  onChange={handleInputChange}/>

                        <label htmlFor="email" className="text-sm">Email</label>
                        <input type="text" name="user_email" className="border border-inputcolor rounded text-sm p-2"  onChange={handleInputChange}/>
                    
                        <label htmlFor="password" className="text-sm">Password</label>
                        <input type="passwod" name="user_password" className="border border-inputcolor rounded text-sm p-2"  onChange={handleInputChange}/>        
                    
                        <label htmlFor="confirm_password" className="text-sm">Confirm Password</label>
                        <input type="passwod" className="border border-inputcolor rounded text-sm p-2"/>     

                        <label htmlFor="profile_image" className="text-sm mt-2">Upload Profile Image</label>
                        <input type="file" className="text-sm"/>

                    </div>

                    <button className="border text-white bg-black p-2 active:bg-gray-800 font-bold mt-6" onClick={() => {console.log(userData)}}>Create Accout</button>
                    <p className="text-sm mt-2"> Already have an account ? <Link href={"/auth/signin"} className="text-blue-700 font-bold">Sign In</Link></p>
                </div>
            </div>
        </>
    );
}
export default RegisPage;