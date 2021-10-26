const express = require('express');

const app = express();

const {setStatics} = require('./utils/statics');
const adminRoutes = require('./routes/admin');
const indexRoute = require('./routes/todoIndex');
const errorController = require('./controllers/error');

//*MiddleWares :
app.use(express.urlencoded({extended : false}));


//*Statics :
setStatics(app);


//*EJS :
app.set("view engine" , "ejs");
app.set("views" , "views");


//*Routes :
app.use("/admin" , adminRoutes)
app.use(indexRoute);
app.use(errorController.get404)


app.listen(3000  , () => console.log("server is running"));