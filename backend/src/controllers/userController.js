export const authMe = async (req, res) => {
    try {
     return   res.status(200).json(req.user)
    } 
    catch (error) {
        console.log('loi xac minh JWT trong protectedRoute',error);
        res.status(500).json({ message: "Internal server error" });
    }
}