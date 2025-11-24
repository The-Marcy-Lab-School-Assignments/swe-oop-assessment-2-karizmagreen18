# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1

---Encapsulation is when you keep the properties of an object private so they can't be changed directly from outside. This is beneficial because it protects your data and also prevents any changes from breaking your code. When making a property private, use #.

Code Snippet:

---class Library{
    #Book = []
    constructor(name){
    this.name = name
    }
    addBook(book){
    this.#Book.push(new Book(book))
    }
    listAvailableBooks(){
    return this.#Book.filter((book) => book.isAvailable === true)
    }
    findBook(title){
    this.#Book.find((book) => book.title === title)
    }
    removeBook(title) {
        const found = this.#Book.indexOf((book) => book.title === title)
        this.#Book
    }
}


## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

---The ‘this’ keyword is how an object refers to itself so it can access its own data and methods. ‘this’ is useful because it lets objects access their own data, we can reuse our methods across different instances we may have, and if we did not have the ‘this’ keyword we would have to pass in properties manually into every method. ‘count’ in ‘counter’ would be what ‘this’ is referring to.

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3
 Polymorphism is when objects are given the same method name and you receive a different output.

Code Snippet:

---class Payment {
  status = "pending"
  constructor(amount, recipient) {
  this.amount = amount
  this.recipient = recipient 
}
process() {
  this.status = 'completed'
  return `Payment of $${this.amount} to ${this.recipient} completed`
}
getDetails() {
  return `$${this.amount} to ${this.recipient} - Status: ${this.status}`
}
}

class CreditCardPayment extends Payment {
  constructor(amount, recipient, cardNumber){
 super(amount, recipient) 
 this.cardNumber = cardNumber
}
process() {
const last4 = this.cardNumber.slice(-4)
return `Payment of ${this.amount} to ${this.recipient} completed via Credit Card ${this.cardNumber}`
}
getDetails() {
return `${this.amount} to ${this.recipient} - Status: completed (Card: ${this.cardNumber})`
}
}

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

I would create a Pets class, it would have ‘name’, ‘energy’, ‘happiness’, and ‘sleep’ as properties and ‘hunt’, ‘chase’, and ‘fly’ as methods. I would then extend this to Cats, Dogs, and Birds and use ‘super()’ to copy those properties in my ‘constructor()’ for Pets to pass into those classes.


**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

Instead of creating multiple classes, I can just extend from Pets because they all hold the same properties and methods; I can just input the data for them.

## Response 4