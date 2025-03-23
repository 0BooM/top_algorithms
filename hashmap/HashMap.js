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

}