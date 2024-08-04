import axios from "axios";
import { prisma } from "../../clients";
import JwtTokenGenerator from "../../services/jwt";

interface GoogleTokenResult {
    iss?:string,
    azp?: string,
    aud?: string,
    sub?:string,
    email?:string,
    email_verified?: string,
    nbf?: string,
    name?: string,
    picture?: string,
    given_name?: string,
    family_name?: string,
    iat?: string,
    exp?: string,
    jti?: string,
    alg?: string,
    kid?: string,
    typ?: string
}



const queries = {
    verifyGoogleToken : async(parent:any, { token }: {token : string}) => {
        
        const googleToken = token;
        const googleOauthURL = `https://oauth2.googleapis.com/tokeninfo?id_token=${googleToken}`;
        const { data } = await axios.get<GoogleTokenResult>(googleOauthURL.toString(),{
            responseType : "json"
        });
        // console.log("line 35 ",data);
        // checking for user in database
        const userInfo = await prisma.user.findUnique({
            where : {
                email : data?.email
            }
        })

        // if not found ,creating new user along with generating the jwt token
        if(!userInfo){
            await prisma.user.create({
                data : {
                    firstName : data?.given_name || "",
                    lastName : data?.family_name,
                    email : data?.email || "",
                    profileImageURI : data?.picture
                }
            })
        }

        const userInDb = await prisma.user.findUnique({
            where : {
                email : data?.email
            }
        })

        if(!userInDb ){
            // console.log("error!!!");
            throw new Error(`user not found with this ${data?.email} email`);
        }
        // console.log("line 64 ",userInDb);
            
        // generating jwt token
        const userToken = JwtTokenGenerator.generateToken(userInDb);

        // console.log("line 69 ",userToken);
        return userToken;
    }
}

export const resolvers = {queries};