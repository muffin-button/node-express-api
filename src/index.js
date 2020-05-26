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


// app.use("*", (req, res, next) => {
//     req.on('end', () => {
//         console.log(`Request: [${req.method}] URL: [${req.originalUrl}] Response: [${res.statusCode}] `);
//     });
//     next();
// });


// Cat Breeds
// Create
app.post('/', (req, res) => {
    // Get cat breed details
    const dto = req.body;
    const newRecord = {
        id: uuid(),
        name: dto.name !== undefined ? dto.name + '' : '',
        desc: dto.desc !== undefined ? dto.desc + '' : '',
        items: []
    }
    // Add to list
    collection.push(newRecord);
    // Response
    res.json(newRecord);
});

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
app.put('/:breedId', (req, res) => {
    // Get cat breed details
    const dto = req.body;
    const record = collection.find((x) => {
        return x.id === req.params.breedId;
    });
    record.name = dto.name !== undefined ? dto.name + '' : '';
    record.desc = dto.desc !== undefined ? dto.desc + '' : '';
    // Response
    res.json(record);
});

// Delete
// app.delete('/:breedId');


app.listen(5000, '0.0.0.0', () => {
    console.log(`Server is listening on 0.0.0.0:5000 ...`);
});


