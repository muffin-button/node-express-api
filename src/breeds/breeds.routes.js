import { Router } from "express";
import { BreedsService } from "."
export const breedsRouter = new Router();

// Cat Breeds
// Create
breedsRouter.post('/', (req, res) => {
    const dto = req.body;
    const record = BreedsService.createBreed(dto);
    res.json(record);
});

// Retrieve
breedsRouter.get('/', (req, res) => {
    res.json(BreedsService.getBreeds());
});


// Cat Breed 
// Retrieve
breedsRouter.get('/:breedId', (req, res) => {
    const { breedId } = req.params;
    const result = BreedsService.getBreed(breedId);
    if (result === undefined) {
        res.sendStatus('404');

    } else {
        res.json(result);
    }
});

// Update
breedsRouter.put('/:breedId', (req, res) => {
    // Get cat breed details
    const dto = req.body;
    const record = BreedsService.updateBreed(dto, breedId);
    // Response
    res.json(record);
});

// Delete
breedsRouter.delete('/:breedId', (req, res) => {
    const { breedId } = req.params;
    const record = BreedsService.deleteBreed(breedId);
    // Respose
    if (record === undefined) {
        res.sendStatus('404');

    } else {
        res.json(record);
    }
});