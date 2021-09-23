const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 8000
const path = require('path')
const router = express.Router();


app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/src/main.html'))
    })

router.get('/connection', function(req, res){
res.sendFile(path.join(__dirname+'/index.html'))
})

router.get('/dev', function(req, res){
res.sendFile(path.join(__dirname+'/src/devmain.html'))
})

router.get('/video-feed', function(req, res){
    res.sendFile(path.join(__dirname+'/src/devmain.html'))
    })

app.use('/', router);
app.use("/static", express.static('./static/'));
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})