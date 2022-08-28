const player = {
    name: "eom",
    points: 10,
    fat: true,
};


console.log(player);

player.fat = false;

// 두개는 같음
console.log(player.name);
console.log(player["name"]);

player.lastName = "Jeng"
player.points = player.points + 15;

console.log(player);