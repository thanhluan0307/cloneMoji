import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectedRoute = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
           return res.status(401).json({ message: "Unauthorized" });
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedUser) => {
            if (err) {
              return  res.status(403).json({ message: "Forbidden" });
            }
            const user = await User.findById(decodedUser.userId).select("-hashedPassword");
            if(!user) {
              return  res.status(404).json({ message: "User not found" });
                
            }
            req.user = user;
            next();
        });
    } catch (error) {
        console.log('loi xac minh JWT trong protectedRoute',error);
        res.status(500).json({ message: "Internal server error" });
    }
}