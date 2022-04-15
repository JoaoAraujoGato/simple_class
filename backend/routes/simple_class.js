const router = require('express').Router();

router.get('/', (req, res) => {
    const data = [
        {
            id: 1,
            name: "Inicio do projeto",
            createdAt: '2022-04-15'
        },
        {
            id: 2,
            name: "Projeto",
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
        data
    })
});

router.get('/:id', (req, res) => {
    res.json({
        success: true,
        id: req.params.id
    })
});

router.post('/', (req, res) => {
    res.json(req.body);
})

module.exports = router