// define an OOP hashmap/hashtable with a hashing function

class HashMap {
    constructor(indexCount = 10){
        this.indexCount = indexCount;
        this.array = new Array(this.indexCount).fill(null).map(()=>[]); //intialize new array with indexCount and create nested array for separate chaining
        //bucket will be one element in this array, which is currently a []
    }

    hashFunction(key){
        let hash = 0;
        for (let character of key){
            hash += key.charCodeAt(character);
        }
        console.log("Hash index is => ", hash % this.indexCount);
        return hash % this.indexCount;
    }



    setItem(key, value){
        let hashConvertedIndex = this.hashFunction(key);
        let bucket = this.array[hashConvertedIndex];

        let found = false;
        for (let entry of bucket){
            if (entry.length == 2 && entry[0]==key){
                found=true;
                console.log("key already exists. setItem() cannot be used to modify bucket items, use updateItem instead");
                break;
            }
        }
        if (!found){
            this.array[hashConvertedIndex].push([key, value])
            console.log(`Successfully added item pair: [${key},${value}] to hashmap`);
        }     
    }

    getItem(key){
        let hashConvertedIndex = this.hashFunction(key);
        let bucket = this.array[hashConvertedIndex];
        let found = false;

        for (let entry of bucket){
            if(entry.length == 2 && entry[0]==key){
                found = true;
                console.log(`Key is found, data being retrieved as follows [${entry}]`);
                console.log(entry);
                return [entry];
            }
        }
        
        if (found === false){
            console.log("Key not found");
        }
    }

    updateKey(key, newKey){
        let hashConvertedIndex = this.hashFunction(key);
        let bucket = this.array[hashConvertedIndex];
        let foundOldKey = false;
        let foundNewKey = false;
        let indexCount = 0;
        let foundIndex;

        for (let entry of bucket){
            if (entry.length == 2 && entry[0]==key){
                foundOldKey=true;
                foundIndex = indexCount;
            }
            if (entry.length == 2 && entry[0]==newKey){
                foundNewKey = true;
                console.log("New key already exists, no duplicates allowed");
                break;
            }
            indexCount++;
        }

        if (foundOldKey && !foundNewKey){
            bucket[foundIndex][0] = newKey;
            console.log(`Updated old key: ${key}, to be new key: ${newKey}`);
        }
    }

    updateValue(key, newValue){
        let hashConvertedIndex = this.hashFunction(key);
        let bucket = this.array[hashConvertedIndex];
        let foundOldKey = false;
        let indexCount = 0;
        let foundIndex;

        for (let entry of bucket){
            if (entry.length == 2 && entry[0]==key){
                foundOldKey=true;
                foundIndex = indexCount;
            } else {
                console.log("Key not found");
                break;
            }
        }
        if (foundOldKey){
            bucket[foundIndex][1]= newValue;
            console.log(`Updated value of key: ${key}, to new value of: ${newValue}`);
        }
    }

    deleteItem(key){
        let hashConvertedIndex = this.hashFunction(key);
        let bucket = this.array[hashConvertedIndex];
        let foundKey = false;
        let indexCount = 0;
        let foundIndex;

        for (let entry of bucket){
            if (entry.length == 2 && entry[0]==key){
                foundKey = true;
                foundIndex = indexCount;
            } else {
                console.log("Key not found");
                break;
            }
            indexCount++;
        }
        if (foundKey){
            if (foundIndex > 0){
                let left = bucket.slice(0, foundIndex);
                let right = bucket.slice(foundIndex+1);
                bucket=[...left, ...right];
                this.array[hashConvertedIndex] = bucket;
                console.log(`Successful in deleting item, updated bucket as follows ${bucket}`);
            } else if (bucket.length > 1) {
                bucket= bucket.slice(1);
                this.array[hashConvertedIndex] = bucket;
                console.log(`Successful in deleting item, updated bucket as follows ${bucket}`);
            } else {
                bucket=[];
                this.array[hashConvertedIndex] = bucket;
            }
        } else {
            console.log("Key not found");
        }
    }

    printHashMap(){
        console.log("HashMap as follows:")
        console.log(this.array)
    }

    increaseSizeTo(newSizeInt){
        let sizeToAdd = newSizeInt - this.indexCount;
        if (sizeToAdd > 0){
            this.indexCount = newSizeInt; //update index count so further increase size is accounted for
            for (let i=0; i<sizeToAdd; i++)
            this.array.push([]);
        }
        else {
            console.log("New size cannot be the same or smaller than the current size.")
        }
    }
}

// Testing without writing test cases //
// let hashMap1 = new HashMap;
// hashMap1.setItem("hello", 100);
// hashMap1.setItem("meow", 2000);
// hashMap1.setItem("woofy", 11000);
// hashMap1.printHashMap();
// hashMap1.getItem("woofy");
// hashMap1.updateValue("meow", 500);
// hashMap1.getItem("meow");
// hashMap1.updateKey("meow", "meow1");
// hashMap1.printHashMap();
// hashMap1.deleteItem("lol");
// hashMap1.deleteItem("woofy");
// hashMap1.getItem("woofy");
// hashMap1.printHashMap();

module.exports=HashMap;
