import app from './app.js'

// app.listen(3001)

const port = process.env.PORT || 3001

app.listen(port, '0.0.0.0')
