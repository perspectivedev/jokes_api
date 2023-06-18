const Jokes = require('../modules/jokes.module');

module.exports.findAllJokes = ( req, res ) => {
    Jokes.find()
        .then( (allDaJokes) => {
            res.json( { Jokes: allDaJokes } )
        } );
}

module.exports.findOneSingleJoke = ( req, res ) => {
    Jokes.findOne( { _id: req.params.id } )
        .then( oneSingleJoke => {
            res.json( { joke: oneSingleJoke } );
        } )
        .catch( ( err ) => {
            res.json( err )
        } )
}

module.exports.createNewJoke = ( req, res ) => {
    Jokes.create( req.body )
        .then( newlyCreateJoke => {
            res.json( { joke: newlyCreateJoke } );
        } )
        .catch( ( err ) => {
            res.json( err )
        } )
}

module.exports.updateExistingJoke = ( req, res ) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
    .then( updateJoke => {
        res.json( { joke: updateJoke } );
    } )
    .catch( ( err ) => {
        res.json( err )
    } )
}

module.exports.deleteAnExistingJoke = ( req, res ) => {
    Jokes.deleteOne( { _id: req.params.id } )
        .then( results => {
            res.json( { results: results } );
        })
        .catch( ( err => {
            res.json( err )
        } ) )
}