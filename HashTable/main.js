import fs from 'fs' // For reading the file
import readline from 'readline'
// Hash table class using linear probing
class Dictionary {
  constructor(size = 20) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  // Hash function to map words to indices
  hash(word) {
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
      hash += word.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Insert a word and definition using linear probing for collision handling
  insert(word, definition) {
    let index = this.hash(word);
    while (this.table[index] !== null && this.table[index].word !== word) {
      // console.log(word, index)
      index = (index + 1) % this.size; // Move to next slot if occupied
      console.log(word, index)
    }
    this.table[index] = { word, definition };
  }

  // Retrieve the definition for a given word
  getDefinition(word) {
    let index = this.hash(word);
    const originalIndex = index;

    // Linear probing to find the word
    while (this.table[index] !== null) {
      if (this.table[index].word === word) {
        return this.table[index].definition;
      }
      index = (index + 1) % this.size;
      if (index === originalIndex) break; // Stop if back to original index
    }
    return "Word not found!";
  }
}

// Read from the text file and populate the dictionary
function loadWordsFromFile(dictionary, filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n');
  lines.forEach(line => {
    const [word, ...definitionParts] = line.split(':');
    const definition = definitionParts.join(':').trim();
    dictionary.insert(word.trim(), definition);
  });
}

// Prompt user to get a word's definition
function getUserDefinition(dictionary) {
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a word to get its definition: ', (word) => {
    console.log(dictionary.getDefinition(word.trim()));
    rl.close();
  });
}

// Initialize the dictionary and load words
const dictionary = new Dictionary();
loadWordsFromFile(dictionary, 'words.txt'); // 'words.txt' should contain word:definition pairs

// Get definition from user input
// getUserDefinition(dictionary);
