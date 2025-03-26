class HashMap {
    constructor() {
        this.bucketArray = new Array(10).fill(null);
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
        hashCode = this.hash(key);

        this.bucketArray[hashCode] = value;
        console.log(
            `Hashcode: ${hashedValue}, bucketArray[haschode]: ${this.bucketArray[hashedValue]} `
        );
    }

    // returns value that is asigned to key
    get(key) {
        hashCode = this.hash(key);

        return this.bucketArray[hashCode] ? this.bucketArray[hashCode] : null;
    }

    // returns true or false based on whether passed key exists in array or not
    has(key) {
        hashCode = this.hash(key);

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
}