const person = {
    Fname: "Darshika",
    Lname: "Nemani",
    Age: 21,
    fullName: function(){
        return this.Fname + " " + this.Lname;
    }
};

console.log(`${person.fullName()}`);