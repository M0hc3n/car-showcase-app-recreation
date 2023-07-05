import { User } from "@/models";
import { connectToDB } from "@/utils";
import { DefaultSession, Profile } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", 
        })
    ],
    callbacks: {
        async signIn(params){
            
            try {
                await connectToDB();

                const userExists = await User.findOne({email: params.profile?.email});

                // if the user does not exit, add him
                if(! userExists){
                    console.log(params.profile);

                    await User.create({
                        email: params.profile?.email,
                        username: params.profile?.name?.replace(' ','').toLowerCase() ,
                    })
                    
                }

                return true;

            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
})

export {handler as GET, handler as POST};