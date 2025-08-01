import authenticate from "../models/Login.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { getIO } from "../middleware/socket.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const existingUser = await authenticate.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const registered = new authenticate({
      username,
      email,
      password: hashedPass
    });

    await registered.save();

    res.status(201).json({ message: "Saved successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authenticate.findOne({ email })
    if (email == user.email) {
      const validate = await bcrypt.compare(password, user.password);  //plane password comes first and then hashed password
      if (!validate) { return console.log("Incorrect password"); }
    }
    const payload = {
      email: user.email,
      id: user._id
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 1000 * 60 * 60 * 24,
    })
    const io = getIO();
    io.emit("notification", `${username} has just logged in!`);
    res.status(200).json({ message: "Login successful" })
  }

  catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
}
// 200 OK	Request succeeded	Login success, user data returned
// 201 Created	Resource created successfully	User successfully registered
// 400 Bad Request	Client sent invalid data	Missing required fields, malformed request
// 401 Unauthorized	Authentication failed	Wrong password or invalid credentials
// 404 Not Found	Resource not found	User with given email doesn’t exist
// 409 Conflict	Conflict with current state	User already exists during registration
// 500 Internal Server Error	Server error	Unexpected error on server side