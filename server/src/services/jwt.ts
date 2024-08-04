import { User } from "@prisma/client";
import jwt from 'jsonwebtoken'
class JwtTokenGenerator {
    public static generateToken(user : User ){

        const secret = process.env.JWT_SECRET || "!@#qwe$%^WEdf74178996&*(KJHG";
        const payload = {
            id: user?.id,
            email: user?.email
        }
        const token = jwt.sign(payload,secret);
        
        return token;
    }
}
export default JwtTokenGenerator;