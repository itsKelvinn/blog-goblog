"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import Link from "next/link";

const LoginPage = () => {
    
    const email = useRef("");
    const password = useRef(""); 

    const onSubmit = async () => {
        const trySignIn = await signIn("credentials" , {
            user_email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: "/"
        })
    }
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col p-10 gap-5 card-shadow">
                <div className="m-5">
                    <h1 className="text-center text-3xl font-bold">Blog.GoBlog</h1>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-lg text-2xl text-center">Wellcome</p>
                    <p className="text-sm text-center">Select method to log in</p>
                    <button onClick={() => signIn('google')} className="border border-inputcolor text-sm p-2 rounded">Sign in with Google</button>
                </div>
                <div className="container">
                  <span className="text text-sm"><p>or continue with email</p></span>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input className="border border-inputcolor rounded text-sm p-2" type="text" onChange={(e) => {email.current = e.target.value}} />
                    <label htmlFor="password" className="text-sm">Password</label>
                    <input className="border border-inputcolor rounded text-sm p-2" type="password" onChange={(e) => {password.current = e.target.value}} />
                </div>
                <button onClick={onSubmit} className="border text-white bg-black p-2 active:bg-gray-800 font-bold">Sign In</button>
                <p className="text-sm">Don't have an account? <Link className="text-blue-700 font-bold" href={'/auth/regis'}>Sign up</Link></p>
            </div>
        </div>
    );
}
 
export default LoginPage;