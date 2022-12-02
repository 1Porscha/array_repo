// console.log("working great")

let party = [    {
    name: 'Joline',
    hitpoints: 15,
    belongings: ["spear", "bread", "Tums"],
    companion: {
        name: "Tabby",
        type: "cat",
    }
},
{
    name: 'Timothy',
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
    }
},
{
    name: 'Sarah',
    hitpoints: 20,
    belongings: ["bow", "arrows", "wood"],
    companion: {
        name: "Tony",
        type: "tiger",
    }
},]

// Prompt 6, 7, 8,  and 11 should be functions (

// Prompt 1: double the hitpoints of everyone in the party
// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
// Prompt 6: Joline got upset and left the party. Take her out of the array. (use the name of the leaving member as a parameter)
// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)

// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)

// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 

// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 

// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.

// Prompt 1: double the hitpoints of everyone in the party

party.forEach((el) => {
    el.hitpoints = 2*el.hitpoints;
})

console.log(party);

// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp

party.forEach((member)=> {
    if (member.name =="Timothy"){
        
        member.hitpoints -= 5
    }
})

console.log(party);

// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
 
party.forEach(el => {
    if(el.name == "Sarah"){
      party[2].companion.type = 'jellyfish'
    }

    });

console.log(party);

// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings

party.forEach(el => {
    if(el.name == "Timothy"){
        party[1].hitpoints+=20;
        delete party[1].belongings[1]
    }
} )

console.log(party)

// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.

party.forEach(el => {
    if(el.name == "Joline"){
        delete party[0].belongings[1];
        
    } if(el.name == 'Timothy'){
        party[1].belongings.push('bread')
    }
} )

console.log(party)

// Prompt 6: Joline got upset and left the party. Take her out of the array. (use the name of the leaving member as a parameter)

for (var i = 0; i< party.length; i++){
    if (party[i].name === "Joline") {
        party.splice(i,1);
        break;
     }
}
   
console.log(party)

// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
const saveNewAdventurer = (adventurer) =>{
        party.push(adventurer)
}

let myAdventurer={
    name: 'Porscha', 
    hitpoints: 10, 
    belongings:["pen"],
    companion :{
        name: "Mona",
        type: "dog",
    }
} 

saveNewAdventurer(myAdventurer) 
console.log(party)

// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)

const addGold = (amountOfGold) =>{
    console.log(amountOfGold/party.length)

party.forEach((el) => {
    el.gold = amountOfGold/party.length;
}
)
}

addGold(66)
console.log(party)

// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 

party.forEach(el => {
    if(el.name == "Sarah"){
        el.gold -= 5;
        el.companion.type = 'bear'
    }
} )

console.log(party)

//Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 

party.forEach(el => {
    if(el.name == "Timothy"){
        el.belongings.forEach((item,index) => {
            if(item == "sword"){
            el.belongings.splice(index,1,"Rusty Sword")
            }
            
        } )
    }
})

console.log(party)

// if (party[i].name === "Joline") {
//     party.splice(i,1);
//     break;
//  }
// }

// console.log(party)

// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.

const setLeader = (leaderName) =>{
 party.forEach((member) =>{
    if(member.name == leaderName){
        member.leader= true
        


    }else{
        member.leader= false

    }
 } )
} 

setLeader("Porscha")

console.log(party)