const express=require('express')
const app=express()
const mysql=require('mysql')
const cors=require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
  };
  app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'dict'
})

app.post('/create',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const msg=req.body.msg;

    db.query("INSERT INTO contact(name,email,message) VALUES(?,?,?)",[name,email,msg],
    (error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.send("values inserted")
        }
    })
})

app.get('/getword',(req,res)=>{
    db.query("SELECT * FROM words ORDER BY RAND() LIMIT 1",
    (error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.send(results)
        }
    });
})

app.listen(3002,()=>{
    console.log("server is running on port 3002")
})