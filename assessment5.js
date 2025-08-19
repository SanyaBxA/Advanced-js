function* generate(){
    let i=0;
    while (true){
        yield `U00${i}`;
        i++;
    }
}

const nextID= generate();
console.log(nextID.next().value);
console.log(nextID.next().value);
console.log(nextID.next().value);
console.log(nextID.next().value);
