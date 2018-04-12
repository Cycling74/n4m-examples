const Max = require("max-api");

const dims = [ 20, 20 ];
const segment_count = 10;

const DIRECTIONS = Object.freeze({
    NONE: "NONE",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    DOWN: "DOWN",
    UP: "UP"
});

class SnakeSegment {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._direction = DIRECTIONS.NONE;
    }

    get direction() {
        return this._direction;
    }

    set direction(d) {
        this._direction = d;
    }

    get position() {
        return { x: this._x, y: this._y };
    }

    update(dims) {
        if (this._direction === DIRECTIONS.LEFT) {
            this._x -= 1;
        } else if (this._direction === DIRECTIONS.RIGHT) {
            this._x += 1;
        } else if (this._direction === DIRECTIONS.UP) {
            this._y -= 1;
        } else if (this._direction === DIRECTIONS.DOWN) {
            this._y += 1;
        }
        
        this._x = (this._x + dims[0]) % dims[0];
        this._y = (this._y + dims[1]) % dims[1];
    }
}

const segments = [];
for (let i = 0; i < segment_count; i++) {
    segments.push(new SnakeSegment(5, 5));
}

Max.addHandlers({
    addSegment: () => {
        const last_segment = segments[segments.length - 1];
        segments.push(new SnakeSegment(last_segment.position.x, last_segment.position.y));
    },
    getPixels: () => {
        const pixels = ["pixels"];
        segments.forEach(segment => {
            pixels.push(segment.position.x);
            pixels.push(segment.position.y);
        });
        Max.outlet(pixels);
    },
    input: (d) => {
        if (!DIRECTIONS.hasOwnProperty(d)) {
            Max.post("Invalid input to snake game " + d, Max.POST_LEVELS.WARN);
        } else {
            segments[0].direction = d;
        }
    },
    update: () => {
        segments.forEach(segment => segment.update(dims));
        for (let i = segments.length - 1; i > 0; i--) {
            const this_segment = segments[i];
            const next_segment = segments[i - 1];
            this_segment.direction = next_segment.direction;
        }
        Max.outlet("didUpdate");
    }
})