import { Vector2 } from "../interfaces/vector2";

export function withNoise(v: Vector2, level: number): Vector2 {
	const noise = () => (Math.random() - 0.5) * level;

	const noiseX = noise();
	const noiseY = noise();

	return { x: v.x + noiseX, y: v.y + noiseY };
}
