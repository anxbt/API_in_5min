const app =require('express')();
const PORT =8082;

const morgan=require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended}))


app.listen(
    PORT,
    () => console.log(`Server running on ${PORT}`)
);

app.get('/fruits',(req,res) =>{
    const fruits = [
        { id: 1, name: "Apple 🍎" },
        { id: 2, name: "Banana 🍌" },
        { id: 3, name: "Orange 🍊" },
        { id: 4, name: "Grapes 🍇" },
        { id: 5, name: "Strawberry 🍓" },
        { id: 6, name: "Watermelon 🍉" },
        { id: 7, name: "Pineapple 🍍" },
        { id: 8, name: "Mango 🥭" },
        { id: 9, name: "Kiwi 🥝" },
        { id: 10, name: "Peach 🍑" }
    ];
    res.send(fruits)
})