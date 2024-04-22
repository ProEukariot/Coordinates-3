import { Vector2 } from "../interfaces/vector2";

export function subtractV2(v1: Vector2, v2: Vector2) {
	return { x: v2.x - v1.x, y: v2.y - v1.y };
}
