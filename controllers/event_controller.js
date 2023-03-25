// DEPENDENCIES
const event = require('express').Router()
const db = require('../models')
const { Event } = db
const { Op } = require('sequelize')

// FIND ALL EVENTS
event.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['date', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
event.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE ONE EVENT
event.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: { Event_id: req.params.id }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvent} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
event.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = bands
