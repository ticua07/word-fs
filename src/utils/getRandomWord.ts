import { words } from "./words";

export function getRandomWord() {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * words.length);

    // Return the item at the random index
    return words[randomIndex];
}

