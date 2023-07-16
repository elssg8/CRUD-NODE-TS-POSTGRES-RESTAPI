import express from 'express'

const app = express()

import indexRoutes from './routes/index'

// middleware
app.use(express.json()); // para que entienda los datos que vienen en formato json
app.use(express.urlencoded({extended: false})); // para que entienda los datos que vienen de un formulario

app.use(indexRoutes); // para que use las rutas que estan en indexRoutes

app.listen(3000);
console.log('Server on port', 3000);


