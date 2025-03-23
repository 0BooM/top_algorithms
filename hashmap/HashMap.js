class HashMap{
    constructor(){
        this.bucketArray = new Array[10].fill(null);
        this.capacity = this.array.length;
        this.loadFactor = 0.75;
    }

    // method that takes a key and produces a hash code with it.
    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    } 

    //Sets new value at by calculating hashCode using key value
    set(key, value){
        hashCode = hash(key);
        
        this.bucketArray[hashCode] = value;
        console.log(`Hashcode: ${hashedValue}, bucketArray[haschode]: ${this.bucketArray[hashedValue]} `)
    }

    // returns value that is asigned to key
    get(key){
        hashCode = hash(key);

        return this.bucketArray[hashCode] ? this.bucketArray[hashCode] : null;
    }
}