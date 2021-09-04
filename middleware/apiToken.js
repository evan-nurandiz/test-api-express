const validateToken = (req, res, next) => {
    const accessToken = req.header('accessToken')

    if (!accessToken) return res.json({ error: "user not authenticated" })

    if (accessToken === 'inirahasia') {
        return next()
    } else {
        return res.json({ error: "token invalid" })
    }
}

module.exports = { validateToken }