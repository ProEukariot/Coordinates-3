import { Vector2 } from "../interfaces/vector2";

export function calcMagnitude(v: Vector2) {
	return Math.sqrt(v.x ** 2 + v.y ** 2);
}
