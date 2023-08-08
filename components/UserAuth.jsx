"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function UserAuth() {
    const {data : session } = useSession();

    if (session && session.user) {
        return (
        <div>
            <p>{session.user.name}</p>
            {console.log(session)}
            <button className="border text-black font-bold py-2 px-4 rounded active:bg-black active:text-white" onClick={() => signOut()}>Sign out</button>
        </div>
        );
    }
    
    
    return (
      <div>
        <button className="border text-black font-bold py-2 px-4 rounded active:bg-black active:text-white" onClick={() => signIn()}>Sign in</button>
      </div>
    );
  
}
