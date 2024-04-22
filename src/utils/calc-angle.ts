import { Vector2 } from "../interfaces/vector2";
import { calcCrossProduct } from "./calc-cross-product";
import { calcDeterminant } from "./calc-determinant";
import { calcDotProduct } from "./calc-dot-product";
import { calcMagnitude } from "./calc-magnitude";

export type CalcAngleOptions = { fullQuadrants?: boolean };

export function calcAngle(v1: Vector2, v2: Vector2, opt?: CalcAngleOptions) {
	// const dotProduct = calcDotProduct(v1, v2);

	// const magnitude1 = calcMagnitude(v1);
	// const magnitude2 = calcMagnitude(v2);

	// const cosine = dotProduct / (magnitude1 * magnitude2);

	// const crossProduct = calcCrossProduct(v1, v2);

	// let angle = Math.acos(cosine);

	// if (isNaN(cosine)) angle = 0;

	// if (opt && opt?.fullQuadrants) {
	// 	angle = crossProduct >= 0 ? angle : 2 * Math.PI - angle;
	// }

	// return angle;

	let angle = Math.atan2(calcDeterminant(v1, v2), calcDotProduct(v1, v2));

	return angle < 0 ? Math.PI * 2 + angle : angle;
}
