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

// 
for (let index = 0; index < participants.length; index++) {
    console.log(participants[index]);
}

console.log("-------------------");

// 
for (let participant of participants) {
    console.log(participant);
}

// break and continue

for (let i = 0; i <= 15; i++) {
    if (i === 5) {
        continue // skip
    }
    
    if ( i === 11 ) {
        break // end
    }
    console.log(i);
}