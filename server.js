const express = require('express');

const app = express();

const PORT = 3080;

app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

app.get('/simple_class', (req, res) => {
    const data = [
        {
            id: 1,
            name: "Meu projeto inciando",
            createdAt: '2022-04-15'
        },
        {
            id: 2,
            name: "Meu projeto 3",
            createdAt: '2022-04-15'
        },
        {
            id: 3,
            name: "Meu projeto 2",
            createdAt: '2022-04-15'
        }
    ];

    res.json({
        success: true,
        data: data
    })
})

app.listen(PORT);