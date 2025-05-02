let user = {
    name: "XYZ",
    age: 30
};

let dup = {};

for (let key in user) {
    dup[key] = user[key];
}

dup.name = "ABC";

console.log(user.name);