"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function UserAuth() {
    const {data : session } = useSession();

    if (session && session.user) {
        return (
        <>
          <button className="border text-black font-bold py-2 px-4 rounded active:bg-black active:text-white" onClick={() => signOut()}>Sign out</button>
          <Image src="/assets/userDefaultProfilepic.png" className="border-white rounded-full" width={42} height={42}/>
        </>
        );
    }
    
    
    return (
      <div>
        <button className="border text-black font-bold py-2 px-4 rounded active:bg-black active:text-white" onClick={() => signIn()}>Sign in</button>
      </div>
    );
  
}
