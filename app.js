const express=require('express')
const app=express();

app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.render('index.ejs');
})
app.get('/',function(req,res){
    const params={}
    res.render('index.ejs',params);
})
app.get('/contact',function(req,res){
    const params={}
    res.render('contact.ejs',params)
})
app.listen(5000)