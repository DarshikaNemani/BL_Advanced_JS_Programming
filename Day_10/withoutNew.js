function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name = name;
}

let xyz = User("XYZ");
console.log(xyz.name);