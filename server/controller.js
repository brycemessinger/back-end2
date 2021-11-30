const data = require('./db.json');

let idGlobal = 4;

module.exports = {
    getHouses: (req, res) => {
    res.status(200).send(data)
    },
    deleteHouses: (req, res) => {
        const {id} = req.params;
        

        let index = data.findIndex(elem => +elem.id === +id)
        data.splice(index,1)
        res.status(200).send(data)
    },
    createHouses: (req, res) => {
        const {address, price, imageURL} = req.body;
        let newHouse  = {
            id: idGlobal,
            price: price,
            imageURL: imageURL,
            address: address
            
            
        }
    
        data.push(newHouse);
        idGlobal++;
        res.status(200).send(data)
    },
    updateHouses: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = data.findIndex(elem => +elem.id === +id)
    
        if(data[index].price < 10000 && type === 'minus'){
            res.status(400).send("Houses aren't free")
        }
        else if(type === 'minus'){
            data[index].price -= 10000
            res.status(200).send(data)
        }else if(type === 'plus'){
        data[index].price += 10000
        res.status(200).send(data)
        }
    },
}

