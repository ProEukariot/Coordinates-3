export function triangulation(
	x1: number,
	y1: number,
	theta1: number,
	x2: number,
	y2: number,
	theta2: number
) {
	let tanTheta1 = Math.tan(theta1);
	let tanTheta2 = Math.tan(theta2);

	let x3 =
		(tanTheta1 * x1 - tanTheta2 * x2 + y2 - y1) / (tanTheta1 - tanTheta2);
	let y3 =
		(y1 * tanTheta2 - y2 * tanTheta1 + (x2 - x1) * tanTheta2 * tanTheta1) /
		(tanTheta2 - tanTheta1);
	return { x: x3, y: y3 };
}
