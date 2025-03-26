export default class HashMap {
    constructor() {
        this.bucketArray = new Array(16).fill(null);
        this.capacity = this.bucketArray.length;
        this.loadFactor = 0.75;
    }

    // method that takes a key and produces a hash code with it.
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    //Sets new value at by calculating hashCode using key value
    set(key, value) {
        if(this.length() >= this.capacity * this.loadFactor){
            this.resize();
        } 
        let hashCode = this.hash(key);
        this.bucketArray[hashCode] = value;
    }

    // returns value that is asigned to key
    get(key) {
        let hashCode = this.hash(key);

        return this.bucketArray[hashCode] ? this.bucketArray[hashCode] : null;
    }

    // returns true or false based on whether passed key exists in array or not
    has(key) {
        let hashCode = this.hash(key);

        return this.bucketArray[hashCode] ? true : false;
    }
    //takes a key as an argument, then removes the entry with that key
    remove(key) {
        if (!this.has(key)) return false;

        let hashCode = this.hash(key);

        this.bucketArray[hashCode] = null;

        return true;
    }

    // returns the number of stored keys in the hash map
    length() {
        return this.bucketArray.filter((item) => item !== null).length;
    }

    //removes all entries in the hash map.
    clear() {
        this.bucketArray = new Array(this.capacity).fill(null);
    }

    //returns an array containing all the keys inside the hash map.
    keys() {
        let keys = [];
        this.bucketArray.forEach((bucket, index) => {
            if (bucket !== null) {
                // Jeśli wartość w danym indeksie nie jest null
                keys.push(index); // Dodajemy indeks do tablicy keys
            }
        });
        return keys;
    }

    //returns an array containing all the values.
    values() {
        let values = [];
        this.bucketArray.forEach((value) => {
            if (value) {
                values.push(value);
            }
        });

        return values;
    }

    entries(){
        let entries = []
        this.bucketArray.forEach((value, index) => {
            if(value){
                entries.push([index, value]);
            }
        })

        return entries
    }
}