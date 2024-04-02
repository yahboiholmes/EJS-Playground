const express = require('express')
/* const list = require('./dummydata/list') */
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.json())



 


 app.get('/', (req, res) => {
   res.render('index', { list : list});
});



app.post('/post',(req,res)=>{
  

})


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})