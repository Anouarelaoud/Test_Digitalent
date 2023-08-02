const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "secret-key";

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const users = [
  {
    username: "anouar",
    password: "$2b$10$Nx2xEi9nUZHFpBwWdIVxQ.EiWfc3NOsjQIs.ePb9xL7yPlTdIv13e", // password = 1
    firstName: "anouar",
    lastName: "ait el aoud",
    email: "anouar@gmail.com",
    adress: "93 BD Maarif Casablanca",
    phoneNumber: "0590909090",
  },
];

app.post("/signup", async (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    adress,
    phoneNumber,
  } = req.body;

  if (users.find((user) => user.username === username)) {
    return res.status(409).json({ error: "Username already taken" });
  }
  if (users.find((user) => user.email === email)) {
    return res.status(409).json({ error: "Email already taken" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
      adress,
      phoneNumber,
    });
    return res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    return res.status(500).json({ error: "Signup failed" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  try {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid Password" });
    }
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return res.status(200).json({ token, message: "Login successful", user });
  } catch (error) {
    return res.status(500).json({ error: "Login failed" });
  }
});

app.post("/getUser", async (req, res) => {
  try {
    const { username } = req.body;
    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "Fetch user data successful", user });
  } catch (error) {
    return res.status(500).json({ error: "Fetch user data failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
