const express = require('express');
const router = express.Router();
const Places = require('../models/place.model');

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/new', (req, res, next) => 
res.render('places/new'))

router.post('/places/create', (req, res, next) => {

	Places.create({
		name: req.body.name,
		type: req.body.type,
	})
		.then(() => res.redirect("/"))
		.catch(err => next(err))

});


router.get('/places/show', (req, res, next) => {
	Places.find()
		.then(placesFromDB => res.render('places/show', { places: placesFromDB }))
		.catch(err => next(err))
})

router.get('/places/:places_id/edit', (req, res, next) => {

	Places.findById(req.params.places_id)
		.then(places => res.render('places/update', { places }))
		.catch(err => next(error))
})

router.post('/places/:places_id', (req, res, next) => {
	const { name, type } = req.body

	Places.findByIdAndUpdate(req.params.places_id, { name, type })
		.then(place => res.redirect("/"))
		.catch(err => next(err))
});

router.get('/places/:places_id/delete', (req, res, next) => {
	Places.findByIdAndRemove(req.params.places_id)
		.then(() => res.redirect('/'))
		.catch(err => next(err))
});


module.exports = router;
