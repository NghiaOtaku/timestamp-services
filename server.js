import express from 'express'
let app = express()
let port = process.env.PORT || 3000

app.get('/api/:date', (req, res) => {
    let time = Date.parse(req.params.date) || Number(req.params.date)
    let UTCday = (new Date(time).toUTCString())
    if (time) {
        res.json({
            "unix": time,
            "utc": UTCday,
        })
    }
    else {
        res.json({
            "error": "Invalid Date"
        })
    }
})

app.listen(port, () => console.log(`App running on port ${port}`))
