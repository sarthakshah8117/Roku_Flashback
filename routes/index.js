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

router.get('/portfolio', (req, res) => {
    res.render('artwork', {portmessage: "you are on portfolio page"})
})

module.exports = router;