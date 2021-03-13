const express = require('express');
const router = express.Router();

const { createProxyMiddleware } = require ('http-proxy-middleware');

router.use('/api', createProxyMiddleware ({
    target: 'http://localhost:5050',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get('/', (req, res) => {
    res.render('index', {message: "hello from handlebars!"})
    
})

router.get('/music', (req, res) => {
    res.render('music', {music: "fav music!"})
    
})

router.get('/TVshows', (req, res) => {
    res.render('TVshows', {message: "Watch TV here!"})
    
})

router.use((req, res) => {
    res.status(404);
    res.render("error", { layout: "errorLayout.hbs", errormessage: `you have lost your way! "${req.url}" doesn't exists!`})
})

module.exports = router;