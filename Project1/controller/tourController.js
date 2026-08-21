const tourModel = require('../model/tourModel')

const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
}

const getTourById = (req, res) => {
    const id = parseInt (req.params.id);
    const tour = tourModel.getById(id);
    if (tour) {
        res.status(200).json(tour)
    } else {
        res.status(404).json({message:'Tour not found'})
    }
}

const createTour = (req,res) => {
    const newTour = req.body;
    tourModel.save(newTour);
    res.status(201).json(newTour);
}
const updatetour = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedtour = req.body;
    tourModel.update(id,updatedTour);
    res.status(200).json({message: 'Tour Updated successfully'})
}
const deleteTour = (req,res) => {
    const id = parseInt(req.params.id);
    tourModel.deleteTour(id);
    res.status(200).json({message: 'Tour Deleted successfully'})
}
module.exports = {
    getAllTours,
    getTourById,
    createTour,
    updatetour,
    deleteTour
};

    getTourById