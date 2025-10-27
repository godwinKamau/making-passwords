const express = require('express')
const router = express.Router()
const User = require('./User')
const bcrypt = require('bcryptjs')


//Route 1:
router.post('/signup', async (req,res) => {
    console.log(req.body)
    const salt = await bcrypt.genSalt(11)
    const secPass = await bcrypt.hash(req.body.password, salt)
    let user = await User.create({
        email:req.body.email,
        password:secPass
    })
    res.json({ user })
})

// ROUTE 2:
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ error: "Login with proper credentials!" });
  }
  
  const passwordCompare = await bcrypt.compare(req.body.password, user.password);
  if (!passwordCompare) {
    return res
      .status(400)
      .json({ error: "Login with proper credentials!" });
  }
  
  res.json({ success: "Authenticated!" });
});

module.exports = router