import "./style.css";
const animals = [];
function randEntry(list) {
  return list[Math.floor(Math.random() * list.length)];
}
for (let i = 0; i < 100; i++) {
  animals.push({
    name: randEntry(["Tip", "Pepe", "John", "Flipper"]),
    type: randEntry(["bird", "penguin", "bear"]),
    color: randEntry(["blue", "green", "grey"]),
  });
}
console.table(animals);
const requirements = { color: "blue", type: "bird" };

function filterByRequirements(list, requirements) {
  let filtered = [...list];
  for (let entry in requirements) {
    filtered = filtered.filter(
      (item) => item[entry] && item[entry] === requirements[entry]
    );
  }
  return filtered;
}

const out = filterByRequirements(animals, requirements);
console.table(out);
document.querySelector("h2 span").textContent = animals.length;
document.querySelector("h3 span").textContent = out.length;
