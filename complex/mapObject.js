const map = new Map();

// Add key-value pairs
map.set("name", "Alice");
map.set("age", 25);
map.set("country", "USA");

console.log(map.get("name")); // "Alice"
console.log(map.size); // 3
console.log(map.has("age")); // true

// Delete a key
map.delete("country");
console.log(map.size); // 2

// Clear all entries
map.clear();
console.log(map.size); // 0
