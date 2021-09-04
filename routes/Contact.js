const express = require('express')
const router = express.Router()
const { Contact } = require('../models')
const { Op } = require('sequelize')
const { validateToken } = require('../middleware/apiToken')

router.get('/', async (req, res) => {
    try {
        const posts = await Contact.findAll();
        res.status(200).json({
            message: 'success retrieve data',
            data: posts
        })
    } catch (err) {
        res.status(400).json({
            message: err,
        })
    }
})

router.post('/create', validateToken, async (req, res) => {
    try {
        const post = await Contact.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        if (post) {
            return res.status(200).json({
                message: 'success created contact',
                data: post
            })
        }
    } catch (err) {
        const errObj = {};
        err.errors.map(er => {
            errObj[er.path] = er.message;
        })
        return res.status(404).json({
            message: 'fail to create contact',
            error: errObj
        })
    }
})

router.put('/put-:id', validateToken, async (req, res) => {
    try {
        const patchContact = await Contact.update({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }, { where: { id: req.params.id } })
        if (patchContact != 0) {
            return res.status(200).json({
                message: 'success update contact',
            })
        } else {
            return res.status(404).json({
                message: 'contact not found',
            })
        }
    } catch (err) {
        const errObj = {};
        err.errors.map(er => {
            errObj[er.path] = er.message;
        })
        return res.status(404).json({
            message: 'fail to update contact',
            error: errObj
        })
    }
})

router.delete('/delete-:id', validateToken, async (req, res) => {
    try {
        const deleteContact = await Contact.destroy({ where: { id: req.params.id } })

        if (deleteContact != 0) {
            return res.status(200).json({
                message: 'success delete contact'
            })
        } else {
            return res.status(404).json({
                message: 'contact not found',
                error: errObj
            })
        }
    } catch (err) {
        const errObj = {};
        err.errors.map(er => {
            errObj[er.path] = er.message;
        })
        return res.status(404).json({
            message: 'fail to delete contact',
            error: errObj
        })
    }
})

router.get('/search', validateToken, async (req, res) => {
    const queryObj = { ...req.query };
    let queryStr = JSON.stringify(queryObj)
    const posts = await Contact.findAll({ where: JSON.parse(queryStr) });
    return res.status(200).json({
        data: posts
    })
})


module.exports = router
