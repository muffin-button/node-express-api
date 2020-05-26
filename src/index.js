const uuid = require('uuid4');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(cors());
app.options('*');


const collection = [
    {
        id: uuid(),
        name: 'Maine Coon',
        desc: '',
        items: ['Rocket', 'Pooter', 'Wendell']
    },
    {
        id: uuid(),
        name: 'Siamese',
        desc: '',
        items: ['Clayton', 'Tanya', 'Blueberry']
    },
    {
        id: uuid(),
        name: 'Norweigan Forest Cat',
        desc: '',
        items: ['Maggie']
    },
    {
        id: uuid(),
        name: 'British Shorthair',
        desc: '',
        items: ['Sasha', 'Tony', 'Bridget', 'Isabelle', 'Mittens']
    },
    {
        id: uuid(),
        name: 'Cornish Rex',
        desc: '',
        items: ['George', 'Maxwell']
    },
];


app.use((req, res, next) => {
    req.on('end', () => {
        console.log(`Request: [${req.method}] URL: [${req.originalUrl}] Response: [${res.statusCode}] `);
    });
    next();
});


// Cat Breeds
// Create
//app.post('/');

// Retrieve
app.get('/', (req, res) => {
    res.json(collection);
});


// Cat Breed 
// Retrieve
app.get('/:breedId', (req, res) => {
    const { breedId } = req.params;
    
    const result = collection.find((x) => {
        return x.id === breedId;
    });

    if(result === undefined){
        res.sendStatus('404');

    } else {
        res.json(result);
    }
});
// Update
// app.put('/:breedId');
// Delete
// app.delete('/:breedId');


app.listen(5000, '0.0.0.0', () => {
    console.log(`Server is listening on 0.0.0.0:5000 ...`);
});


