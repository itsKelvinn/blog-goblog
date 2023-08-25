"use client";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
    
    const email = useRef("");
    const password = useRef(""); 
    const router = useRouter();
    const [errorMessage , seterrMessage] = useState(false);
    const onSubmit = async (event) => {
        event.preventDefault();

        const trySignIn = await signIn("credentials" , {
            user_email: email.current,
            password: password.current,
            redirect : false,
        })

        if(trySignIn.error)
        {
            seterrMessage(true);
            return;
        }

        router.push('/');

    }
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col p-10 gap-5 card-shadow">
                <div className="m-5">
                    <Image src="/assets/blog-goblog-logo.svg" alt="blog-goblog-logo" width={300} height={20}/>                    
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-lg text-2xl text-center">Wellcome</p>
                    <p className="text-sm text-center">Select method to log in</p>
                    <button onClick={() => signIn('google', {callbackUrl: '/'})} className="border border-inputcolor text-sm p-2 rounded">Sign in with Google</button>
                </div>
                <div className="container">
                  <span className="text text-sm"><p>or continue with email</p></span>
                </div>
                <div className="flex flex-col gap-2">
                    {errorMessage && (<p className="text-center border border-rose-600 bg-rose-100 rounded text-rose-600 text-xs py-2">Email and Password invalid</p>)}
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input className="border border-inputcolor rounded text-sm p-2" type="text" onChange={(e) => {email.current = e.target.value}} />
                    <label htmlFor="password" className="text-sm">Password</label>
                    <input className="border border-inputcolor rounded text-sm p-2" type="password" onChange={(e) => {password.current = e.target.value}} />
                </div>
                <button onClick={onSubmit} className="border rounded text-white bg-black p-2 active:bg-gray-800 font-bold">Sign In</button>
                <p className="text-sm">Don't have an account? <Link className="text-blue-700 font-bold" href={'/auth/regis'}>Sign up</Link></p>
            </div>
        </div>
    );
}
 
export default LoginPage;