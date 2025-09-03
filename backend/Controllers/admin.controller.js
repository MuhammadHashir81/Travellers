import { Admin } from "../Model/admin.Schema.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
const maxAge = 24 * 60 * 60

const createToken = (id) => {

  return jwt.sign({ id }, 'adminKey', {
    expiresIn: maxAge
  })

}



const seedAdmin = async () => {
  const hashedPassword = await bcrypt.hash("thisisadmin", 10); 
  const isAdminExists = await Admin.findOne({name:"admin"})
  if (!isAdminExists) {
    await Admin.create({ name: "admin", password: hashedPassword });
  }
};

seedAdmin();



export const adminLogin = async (req, res) => {

  try {
    const { name, password } = req.body
    console.log(name,password)

    const admin = await Admin.findOne({ name })
    if (!admin) {
      res.status(400).json({ error: 'Invalid credentials' })
    }

    const comparePassword =await bcrypt.compare(password,admin.password)
    if (!comparePassword) {
      res.status(400).json({ error: 'Invalid credentials' })

    }
    const token = createToken(admin._id)
    res.cookie('adminJWT', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(201).json({ success: "Admin logged in successfully",token })
  }
  catch (err) {
    if (err.name === "ValidationError") {
      // Check if it's an enum error
      const enumError = Object.values(err.errors).find(e => e.kind === "enum");
      if (enumError) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
    }

    res.status(500).json({ error: err.message });
  }


}

// admin logout

export const adminLogOut = (req,res)=>{
  try {
      res.cookie('adminJWT', '',{httpOnly:true,maxAge:0})
      res.status(200).json({success:"Logout successfully"})
  } catch (error) {
   res.status(500).json({error:"Internal server error"}) 
  }

}