import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "already exist user" });

        }

        const hashpassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashpassword
        })
        await createUser.save();
        res.status(201).json({
            message: "user created successfully",
            user: {
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email
            }
        });
    } catch (error) {
        console.log("error occured")
        res.status(500).json("error" + error.message);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        // User nahi mila
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // Password check
        const ismatch = await bcryptjs.compare(password, user.password);

        if (!ismatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // Login successful
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
    console.log("LOGIN ERROR:", error);
    return res.status(500).json({
        message: error.message
    });
}
};