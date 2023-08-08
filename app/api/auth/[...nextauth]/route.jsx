import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
            })
            const user = await res.json()
            console.log(credentials);
      
            // If no error and we have user data, return it
            if (res.ok && user) {
              return user
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
    ],
    callbacks: {
      async session({ session, token, user }) {
        session.user.id = token.id;
        session.accessToken = token.accessToken;
        return session;
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        if (user) {
          token.id = user.id;
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