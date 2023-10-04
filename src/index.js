const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const server = express() // Alterei de "sever" para "server"
const port = 3004

server.use(cors())

const movieApiJsonStructure = mongoose.model('movie', {
    title: String,
    description: String,
    imageUrl: String,
    trailerUrl: String,
})

server.use(express.json())

server.get('/', async (req, res) => {
    const movieList = await movieApiJsonStructure.find()
    res.send(movieList)
})

server.post('/createMovie', async (req, res) => {
    const newMovie = new movieApiJsonStructure({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        trailerUrl: req.body.trailerUrl,
    })
    await newMovie.save()
    res.send(newMovie)
})

server.delete('/deleteMovies/:id', async (req, res) => {
    const deleteMovie = await movieApiJsonStructure.findByIdAndDelete(req.params.id)
    res.send(deleteMovie)
})

server.put('/put/:id', async (req, res) => {
    const putFilm = await movieApiJsonStructure.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        trailerUrl: req.body.trailerUrl,
    })
    res.send(putFilm)
})

server.listen(port, () => {
    mongoose.connect('mongodb+srv://haylalira1231:12311345@cluster0.o3td50m.mongodb.net/?retryWrites=true&w=majority')
    console.log("estou escutando a api")
})
