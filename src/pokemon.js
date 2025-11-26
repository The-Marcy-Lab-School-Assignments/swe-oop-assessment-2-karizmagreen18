class Pokemon {
#health = 100
#level = 1
static allPokemon = [];
constructor(name, type) {
this.name = name;
this.type = type;
}
get health(){
    return this.#health
}
get level() {
    return this.#level
}
levelUp() {
this.#level += 1
this.#health += 10
console.log(`${this.name} leveled up to level ${this.#level}`)
}

isFainted() {
if (this.#health <= 0) {
    return true
} else {
    return false
}
}

attack(targetPokemon) {
this.#health -= this.#level * 10
console.log(`${this.name} attacked ${targetPokemon.name}!`)
}

getTotalPokemon() {
return Pokemon.allPokemon.length;
}

findByName(name){
return Pokemon.allPokemon.find(Pokemon => Pokemon.name === name)
}
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Pokemon };
