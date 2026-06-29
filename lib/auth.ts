import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/admin/login"
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },

      async authorize(credentials) {

        if(
          credentials?.email==="admin@gmail.com" &&
          credentials?.password==="123456"
        ){
          return {
            id:"1",
            email:"admin@gmail.com",
            name:"Admin"
          };
        }

        return null;
      }
    })
  ],

  secret: process.env.NEXTAUTH_SECRET
};