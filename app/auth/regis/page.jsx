"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const RegisPage = () => {
    const router = useRouter();
    const [checkComfirmPass , setConfirmPass] = useState();
    const [errMessage , seterrMessage] = useState({});

    const [userData, setUserData] = useState({
        user_fullname: '',
        user_email: '',
        user_password: '',
        user_role : 'user'
    });

    const onsubmit = async () => {

        const res = await fetch('http://127.0.0.1:8000/api/users',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(userData)
        })

        if(!res.ok)
        {
            const result = await res.json();
            seterrMessage(result.errors);
            console.log(result.errors);    
            return;
        }

        router.push('/');
    }
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    };

    const checkConfirmPassword  = (event) => {
        userData.user_password == event.target.value ? setConfirmPass(false) : setConfirmPass(true)
    }

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex flex-col card-shadow p-5 border rounded">
                    <p className="text-3xl font-bold text-center m-7">Sign Up</p>
                    <div className="flex flex-col gap-2">
                        {console.log('res :' , errMessage)}
                        <label htmlFor="Full_name" className="text-sm column flex gap-2"> Full Name  { errMessage.user_fullname && (<p className="text-rose-600 text-xs">{'*' + errMessage.user_fullname[0]}</p>)} </label>
                        <input type="text" name="user_fullname" className="border border-inputcolor rounded text-sm p-2"  onChange={handleInputChange}/>

                        <label htmlFor="email" className="text-sm flex gap-2">Email { errMessage.user_email && (<p className="text-rose-600 text-xs">{'*' + errMessage.user_email[0]}</p>)} </label>
                        <input type="text" name="user_email" className="border border-inputcolor rounded text-sm p-2"  onChange={handleInputChange}/>
                    
                        <label htmlFor="password" className="text-sm flex gap-2">Password { errMessage.user_password && (<p className="text-rose-600 text-xs">{'*' + errMessage.user_password[0]}</p>)}</label>
                        <input type="password" name="user_password" className="border border-inputcolor rounded text-sm p-2"  onChange={handleInputChange} />        
                    
                        <label htmlFor="confirm_password" className="text-sm flex gap-2">Confirm Password {checkComfirmPass && ( <p className="text-rose-600 text-xs">*Password not match</p> )}</label>
                        <input type="password" className="border border-inputcolor rounded text-sm p-2" onChange={checkConfirmPassword}/>     
                    </div>

                    <button className="border rounded text-white bg-black p-2 active:bg-gray-800 font-bold mt-6" onClick={onsubmit}>Create Accout</button>
                    <p className="text-sm mt-2"> Already have an account ? <Link href={"/auth/signin"} className="text-blue-700 font-bold">Sign In</Link></p>
                </div>
            </div>
        </>
    );
}
export default RegisPage;