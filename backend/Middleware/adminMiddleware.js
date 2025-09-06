import jwt from 'jsonwebtoken'


export const verifyAdmin = (req, res, next) => {
    const token = req.cookies?.adminJWT
    console.log(token)

    if (!token) {
        res.status(400).json({ error: "Access denied please login first " })
        return
    }

    try {
        const data = jwt.verify(token, 'adminKey')
        req.userId = data.id
        next()

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}