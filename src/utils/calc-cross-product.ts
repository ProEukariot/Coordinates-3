import { Vector2 } from "../interfaces/vector2";

export function calcCrossProduct(v1: Vector2, v2: Vector2) {
	return v1.x * v2.y - v1.y * v2.x;
}
