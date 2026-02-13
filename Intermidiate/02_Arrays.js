const marvel_heros = ["thor", "ironman", "hulk", "captain america"];
const dc_heros = ["superman", "batman", "wonder"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

//  const allHeros = marvel_heros.concat(dc_heros);  // same as push but it does not change the original array
//  console.log(marvel_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]; // it add all withiut making sub arrya as a individual element
//console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,8,[9,10]];
const real_another_arr = another_arr.flat(Infinity); // to convert nested array to single array
//console.log(real_another_arr);

console.log(Array.isArray("kunal Garg"));
console.log(Array.from("Kunal"));
console.log(Array.from({name: "kunal"})); // intrested for interviews



 