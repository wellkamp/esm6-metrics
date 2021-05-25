import app from './server'
import { PORT } from './config'

app.listen(PORT, () => {
    console.log(`wE ARE LIVE ON ${PORT}`)
})

export default app