const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

mongoose
.connect('mongodb+srv://aldobesma:A5RWwbOE1PCfRFFL@cluster0.v1dijk9.mongodb.net/myDB')
.catch((err) => console.log(err));

//DB Schema
const postSchema = mongoose.Schema({
    title: String,
    description: String
})

const Post = mongoose.model('Post', postSchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/create', (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description
    }).then(doc => console.log(doc))
    .catch(err => console.log(err));
})

app.get('/posts', (req, res) => {
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

app.delete('/delete/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(post => console.log(post))
    .catch(err => console.log(err));
})

app.put('/update/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description
    }, { new: true })
        .then(post => {
            console.log(post);
            res.json(post);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Internal Server Error");
        });
});



app.listen(3001, () => {
    console.log('Example app listening on port 3001!')
})