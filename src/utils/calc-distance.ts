import { Vector2 } from "../interfaces/vector2";

export function calcDistance(v1: Vector2, v2: Vector2) {
	return Math.sqrt((v2.x - v1.x) ** 2 + (v2.y - v1.y) ** 2);
}
