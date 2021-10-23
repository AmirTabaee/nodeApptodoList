const express = require('express');

const app = express();

const {setStatics} = require('./utils/statics');

//*MiddleWares :
app.use(express.urlencoded({extended : false}));


//*Statics :
setStatics(app);


//*EJS :
app.set("view engine" , "ejs");
app.set("views" , "views");


//*Routes :
app.get("/" , (req , res) => {
    res.render("index" , {
        pageTitle : "نمایش کارهای روزانه"
    })
})


app.listen(3000  , () => console.log("server is running"));