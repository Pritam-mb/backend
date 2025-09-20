import express from 'express'
const app= express();
// const port =3000
const jokes =[
    {
        index: 1,
        joke: "kaka amr valo"
    },
      {
        index: 2,
        joke: "mama amr valo"
    },
      {
        index: 3,
        joke: "mamata di amr valo"
    },
]
app.get('/',(req,res)=>{
    res.send('sserver has created')
});
app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server ki laga di lodi');
    
})