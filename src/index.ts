import {createServer} from './app'

const app = createServer()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Grhow server running on port ${PORT}`);
})
