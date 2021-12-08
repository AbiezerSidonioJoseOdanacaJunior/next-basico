export default function questao(req, res) {
    if ( req.method === "GET") {
        const id = req.query.id
        res.status(200).json({
            id,
            enuciado: 'Qual sua cor perferida?',
            respostas: [ 
                'Branca', 
                'Vermelha', 
                'Amarela',
                 'Verde', 
                 'Azul'
            ]
        })
    }else {
        res.status(405).send()
    }
}