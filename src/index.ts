import { Vector2 } from "./interfaces/vector2";
import { trilateration } from "./trilataration";
import { calcAngle } from "./utils/calc-angle";
import { calcDistance } from "./utils/calc-distance";
import { calcDotProduct } from "./utils/calc-dot-product";
import { calcMagnitude } from "./utils/calc-magnitude";
import { withNoise } from "./utils/gen-noise";
import { gradientDescent } from "./utils/gradient-descent";
import { subtractV2 } from "./utils/subtract";
import { triangulation } from "./utils/triangulation";

// VALUES WITHOUT NOISE

// const station1: Vector2 = { x: -40, y: -40 };
// const station2: Vector2 = { x: 40, y: 0 };
// const station3: Vector2 = { x: 0, y: 60 };

// const object1: Vector2 = { x: 20, y: 20 };

// VALUES WITH NOISE

const NOISE_LEVEL = 5;

const station1: Vector2 = withNoise({ x: -40, y: -40 }, NOISE_LEVEL);
const station2: Vector2 = withNoise({ x: 40, y: 0 }, NOISE_LEVEL);
const station3: Vector2 = withNoise({ x: 0, y: 60 }, NOISE_LEVEL);

const object1: Vector2 = withNoise({ x: 20, y: 20 }, NOISE_LEVEL);

const st1obj1dist = calcDistance(object1, station1);
const st2obj1dist = calcDistance(object1, station2);
const st3obj1dist = calcDistance(object1, station3);

console.log("Object coordinates:", object1);
console.log(
	"trilateration",
	trilateration(
		station1.x,
		station1.y,
		st1obj1dist,
		station2.x,
		station2.y,
		st2obj1dist,
		station3.x,
		station3.y,
		st3obj1dist
	)
);

const pivotVector: Vector2 = { x: 0, y: 1 };

const st1obj1Vec: Vector2 = subtractV2(object1, station1);
const st2obj1Vec: Vector2 = subtractV2(object1, station2);

const st1ang = calcAngle(st1obj1Vec, pivotVector, { fullQuadrants: true });
const st2ang = calcAngle(st2obj1Vec, pivotVector, { fullQuadrants: true });

console.log(
	"triangulation",
	triangulation(
		station1.x,
		station1.y,
		st1ang,
		station2.x,
		station2.y,
		st2ang
	)
);

const gd = gradientDescent(
	[
		[station1.x, station1.y],
		[station2.x, station2.y],
		[station3.x, station3.y],
	],
	[st1obj1dist, st2obj1dist, st3obj1dist],
	[10, 10],
	0.01,
	1000
);

console.log("gradient descent", { x: gd[0], y: gd[1] });
