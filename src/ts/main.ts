import { Actor } from "excalibur";
import { CollisionType } from "excalibur";
import { Color } from "excalibur";
import { Engine } from "excalibur";
import { PointerMoveEvent } from "excalibur/dist/Input/PointerEvents";


// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
const game = new Engine({
    width: 800,
    height: 600,
});

// Create an actor with x position of 150px,
// y position of 40px from the bottom of the screen,
// width of 200px, height and a height of 20px
const paddle = new Actor({
    x: 150,
    y: game.drawHeight - 40,
    width: 200,
    height: 20,
});

// Let's give it some color with one of the predefined
// color constants
paddle.color = Color.Chartreuse;

// Make sure the paddle can partipate in collisions, by default excalibur actors do not collide
paddle.body.collider.type = CollisionType.Fixed;

// Add a mouse move listener
game.input.pointers.primary.on("move", (event: PointerMoveEvent) => {
    paddle.pos.x = event.target.lastWorldPos.x;
});

// Start the engine to begin the game.
void game.start();
