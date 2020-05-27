const uuid = require('uuid4');

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

/**
 * Service for Managing Breeds
 */
export class BreedsService {

    // Cat Breeds
    /**
     * Create a new breed and insert it into our collection
     * @param {object} dto breed representation
     */
    static createBreed(dto) {
        // Get cat breed details
        const newRecord = {
            id: uuid(),
            name: dto.name !== undefined ? dto.name + '' : '',
            desc: dto.desc !== undefined ? dto.desc + '' : '',
            items: []
        }
        // Add to list
        collection.push(newRecord);
        // Response
        return newRecord;
    }

    // Retrieve
    static getBreeds() {
        return collection;
    }

    // Cat Breed 
    // Retrieve
    static getBreed(breedId) {

        const result = collection.find((x) => {
            return x.id === breedId;
        });
        return result;
    }

    // Update
    static updateBreed(dto, breedId) {
        // Get cat breed details
        const record = collection.find((x) => {
            return x.id === breedId;
        });
        record.name = dto.name !== undefined ? dto.name + '' : '';
        record.desc = dto.desc !== undefined ? dto.desc + '' : '';
        // Response
        return record;
    }

    // Delete
    static deleteBreed(breedId) {
        const recordIndex = collection.findIndex(x => x.id === breedId);
        if (recordIndex === -1) {
            console.log(`Did not find breedId ${breedId}`);
            return undefined;
        }
        
        const record = collection[recordIndex];
        collection.splice(recordIndex, 1);
        // Respond with deleted record
        return record;
    }




}