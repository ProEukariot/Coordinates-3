function euclideanDistance(x1, y1, x2, y2) {
	return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function lossFunction(x, y, anchors, distances) {
	let loss = 0;
	for (let i = 0; i < anchors.length; i++) {
		const measuredDistance = distances[i];
		const calculatedDistance = euclideanDistance(
			x,
			y,
			anchors[i][0],
			anchors[i][1]
		);
		loss += (calculatedDistance - measuredDistance) ** 2;
	}
	return loss;
}

function gradient(x, y, anchors, distances) {
	let gradX = 0,
		gradY = 0;
	for (let i = 0; i < anchors.length; i++) {
		const dx = x - anchors[i][0];
		const dy = y - anchors[i][1];
		const measuredDistance = distances[i];
		const calculatedDistance = euclideanDistance(
			x,
			y,
			anchors[i][0],
			anchors[i][1]
		);
		gradX +=
			(calculatedDistance - measuredDistance) * (dx / calculatedDistance);
		gradY +=
			(calculatedDistance - measuredDistance) * (dy / calculatedDistance);
	}
	return [gradX, gradY];
}

export function gradientDescent(
	anchors,
	distances,
	initialGuess,
	learningRate,
	iterations
) {
	let [x, y] = initialGuess;
	for (let i = 0; i < iterations; i++) {
		const [gradX, gradY] = gradient(x, y, anchors, distances);
		x -= learningRate * gradX;
		y -= learningRate * gradY;
	}
	return [x, y];
}
