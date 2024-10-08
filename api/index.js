import express from 'express'
import colors from 'colors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`\napp is running on port ${colors.bold(port)}\n`.cyan)
})
