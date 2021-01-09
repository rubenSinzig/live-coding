// for loops
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
// arrays & loops
let participants = [
            "Paul",
            "Michael",
            "Paula",
            "Sabine",
            "Thomas",
            "Sebastian",
            "Melanie", 
            ]

// writing for how to pass through
for (let index = 0; index < participants.length; index++) {
    console.log(participants[index]);
}

console.log("-------------------");

// writing for output all elements from an array
for (let participant of participants) {
    console.log(participant);
}
