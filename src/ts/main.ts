import { Engine } from "excalibur";
// game.ts

// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
const game = new Engine({
    width: 800,
    height: 600,
});
// todo build awesome game here

// Start the engine to begin the game.
void game.start();
