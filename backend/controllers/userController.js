const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db.config");

// Register user
exports.register = (req, res) => {
  const { usernameee, passwordd } = req.body;
  console.log(usernameee, req.body, req.body.usernamee);
  // const hashedPassword = bcrypt.hashSync(passwordd, 8);

  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(query, [req.body.usernamee, req.body.passwordd], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
    res.status(201).send("User registered");
  });
};

// Login user
exports.login = (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    if (
      results.length === 0 ||
      !bcrypt.compareSync(password, results[0].password)
    ) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  });
};

//get all users
exports.users = (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.json(results);
  });
};
