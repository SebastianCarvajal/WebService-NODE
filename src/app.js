const http = require('http');
const path = require('path');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());


// settings

app.set('port', process.env.PORT || 3000);


// rutas...
require('./routes/userRoutes')(app);


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// static files
app.use(express.static(path.join(__dirname, 'public')));


//Iniciar servidor
http.createServer(app)
  .listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  });