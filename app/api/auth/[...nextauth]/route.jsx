import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "user_email", name : "user_email" , type: "text", placeholder: "jsmith" },
            password: { label: "password", name : "password" , type: "password" }
          },
          async authorize(credentials, req) {
            const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            });
            
            if (res.ok) { 
              const user = await res.json();
              return user;
            } else {
              return null;
            }
          }
        })
    ],
    callbacks: {
      async session({ session, token, user }) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role;
        session.user.imagepath = token.image_path;
        session.accessToken = token.accessToken;
        return session;
      },
      async jwt({ token, user, account }) {
        if (user) {
          token.id = user.id;
          token.name = user.user_fullname;
          token.email = user.user_email;
          token.role = user.user_role;
          token.image_path = user.image_path;
        }
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      }
    },
    pages: {
      signIn : "/auth/signin"
    }
});

export {handler as GET , handler as POST};