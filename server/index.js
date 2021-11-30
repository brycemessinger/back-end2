const express = require('express')
const cors = require('cors')
const ctrl = require('./controller.js');


const app = express();
app.use(cors())
app.use(express.json())

app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouses)
app.post('/api/houses', ctrl.createHouses)
app.put('/api/houses/:id', ctrl.updateHouses)

app.listen(4004, () => console.log('Warp to port 4004'))

