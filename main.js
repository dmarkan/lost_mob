let health = 5;
let attack = 1;
let armor = 0;
let label = document.querySelector("#label");
let up = document.querySelector("#up");
let img = document.querySelector("#img");
let story = document.querySelector("#story");
let at = document.querySelector("#at");
let hp = document.querySelector("#hp");
let ac = document.querySelector("#ac");
let enemy = document.querySelector("#enemy");
let stick = document.querySelector("#stick");
let key = document.querySelector("#key");
let wolfHp = 3;
let wolfAt = 0;
let wolfAc = 0;


function text() {
let labela = document.querySelector("#labela").value;
if (labela == "help" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML =='')) {
    alert("Try to type: up, down, left, right, look"); 
}
if (labela == "look" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML =='')) {
    alert("You see some sticks on the ground, if you want to pick one up, type: pick up stick"); 
}
if (labela == "pick up stick" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML =='')) {
    alert("You took one stick and equipped it as a weapon, your attack increases!");
    at.innerHTML = "Attack: " + (attack + 1);
    stick.style.visibility = "visible";
}
if (labela == "up" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML =='')) {
    enemy.style.visibility = "visible";
    img.src = "images/wolf.jpg";
    story.innerHTML = "You see a large wolf in front of you! What you wanna do?";
    up.style.display = "none";
}
if (labela == "down" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML =='')) {
    img.src = "images/cabin.jpg";
    story.innerHTML = "You see an old cabin in the distance";
    down.style.display = "none";
}
if (labela == "look" && story.innerHTML == "You see an old cabin in the distance") {
   alert("The door to the cabin seems to be locked!");
}
if (labela == "help" && story.innerHTML == "You see an old cabin in the distance") {
    alert("Try to type: up, look");
 }
 if (labela == "up" && story.innerHTML == "You see an old cabin in the distance") {
    story.innerHTML = "";
    img.src = "images/start.jpg";
 }
if (labela == "left" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML == "")) {
    img.src = "images/bones.jpg";
    story.innerHTML = "Something happened here...";
    left.style.display = "none";
}
if (labela == "help" && story.innerHTML == "Something happened here...") {
    alert("Try to type: right, look"); 
}
if (labela == "look" && story.innerHTML == "Something happened here...") {
    alert("Who or what did this?");
}
if (labela == "right" && story.innerHTML == "Something happened here...") {
    img.src = "images/start.jpg";
    story.innerHTML = "";
}
if (labela == "right" && (story.innerHTML == "You woke up in the woods feeling dizzy, what happened?" || story.innerHTML == "")) {
    img.src = "images/trash.jpg"; 
    story.innerHTML = "What a mess!";
    right.style.display = "none";
}
if (labela == "help" && story.innerHTML == "What a mess!") {
    alert("Try to type: left, look");
}
if (labela == "look" && story.innerHTML == "What a mess!") {
    alert("Somebody must've left in a hurry and left a shirt behind, maybe you can use it, try to pick it up (type : pick up shirt)");
}
if (labela == "pick up shirt" && story.innerHTML == "What a mess!") {
    alert("You took the shirt and equipped it as an armor, your armor increases!");
    ac.innerHTML = "Armor: " + (armor + 1);
    shirt.style.visibility = "visible";
}
if (labela == "left" && story.innerHTML == "What a mess!") {
    img.src = "images/start.jpg";
    story.innerHTML = "";
}
if (labela == "help" && story.innerHTML == "You see a large wolf in front of you! What you wanna do?") {
    alert("Try to type: down, look, attack"); 
   }
   if (labela == "down" && (story.innerHTML == "You see a large wolf in front of you! What you wanna do?" || story.innerHTML == "The wolf growls at you, it's ready to attack!")) {
    enemy.style.visibility = "hidden";
    img.src = "images/start.jpg"; 
    story.innerHTML = "You woke up in the woods feeling dizzy, what happened?";
   }
   if (labela == "back" && story.innerHTML == "You defeated the wolf! There is a key in his stomach, you took the key") {
    img.src = "images/start.jpg";
    enemy.style.visibility = "hidden";
    story.innerHTML = "You defeated the wolf, now find what that key opens";
   }
   if (labela == "down" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
    img.src = "images/cabin.jpg";
    story.innerHTML = "Maybe try to unlock the cabin door";
    down.style.display = "none";
   }
   if (labela == "help" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
    alert("You can only go back from here, and down from the start"); 
   }
   if (labela == "left" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
    img.src = "images/bones.jpg";
    left.style.display = "none";
}
if (labela == "back" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
    img.src = "images/start.jpg";
}
if (labela == "right" && story.innerHTML === "You defeated the wolf, now find what that key opens") {
    img.src = "images/trash.jpg";
    right.style.display = "none";
}
if (labela == "help" && story.innerHTML === "Maybe try to unlock the cabin door") {
    alert("How about you try to unlock the cabin door with a key? (type: unlock door");
}
if (labela == "unlock door" && story.innerHTML === "Maybe try to unlock the cabin door") {
    alert("You unlocked the door and enter the cabin...");
}
   if (labela == "look" && story.innerHTML == "You see a large wolf in front of you! What you wanna do?") {
    story.innerHTML = "The wolf growls at you, it's ready to attack!";
   }
   if (labela == "help" && story.innerHTML == "You defeated the wolf! There is a key in his stomach, you took the key") {
    alert("You defeated the wolf, great! now go back (type: back)");
   }
    if (labela == "attack" && (story.innerHTML == "You see a large wolf in front of you! What you wanna do?" || "The wolf growls at you, it's ready to attack!")) {
        for (let i = 0; i<3; i++) {
        let random = Math.floor(Math.random() * 2);
        wolfAt += random;
        wolfHp = wolfHp - i;
        if (wolfAt>armor) {
            alert("The wolf hits you!");
            health = health - 1;
            hp.innerHTML = "Health: " + (health - 1);
        } else {
            alert("The wolf misses!");
        } 
        if (attack>wolfAc) {
            enemy.innerHTML = "Enemy health: " + (wolfHp - 1);
        }
        if (wolfHp <= 0) {
            story.innerHTML = "You defeated the wolf! There is a key in his stomach, you took the key";
            key.style.visibility = "visible";
        }    
    }
}
}



