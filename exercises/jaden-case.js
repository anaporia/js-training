'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
 function jadenCase (input) {
     let words = input.split (' ');
     for (let i = 0; i < words.length; i++) {
         words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
     } return words.join(' ');
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('jaden'), 'Jaden')
assert.strictEqual(jadenCase('this is a test'), 'This Is A Test')
assert.strictEqual(jadenCase('how you doin ?'), 'How You Doin ?')
// End of tests */
