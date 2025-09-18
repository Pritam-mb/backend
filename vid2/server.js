import express from 'express'

const app= express();
const jokes =[
    {
        index: 1,
        joke: "kaka amr valo"
    },
      {
        index: 2,
        joke: "kaka amr valo"
    },
      {
        index: 3,
        joke: "kaka amr valo"
    },
]
app.get('/',(req,res)=>{
    res.send('sserver has created')
});

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server ki laga di lodi');
    
})