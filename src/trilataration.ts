export function trilateration(
	x1: number,
	y1: number,
	r1: number,
	x2: number,
	y2: number,
	r2: number,
	x3: number,
	y3: number,
	r3: number
) {
	var A = 2 * x2 - 2 * x1;
	var B = 2 * y2 - 2 * y1;
	var C = r1 ** 2 - r2 ** 2 - x1 ** 2 - y1 ** 2 + x2 ** 2 + y2 ** 2;
	var D = 2 * x3 - 2 * x2;
	var E = 2 * y3 - 2 * y2;
	var F = r2 ** 2 - r3 ** 2 - x2 ** 2 - y2 ** 2 + x3 ** 2 + y3 ** 2;
	var x = (C * E - F * B) / (E * A - B * D);
	var y = (C * D - A * F) / (B * D - A * E);
	if (!isNaN(x) && !isNaN(y)) {
		return { x: x, y: y };
	} else {
		return null;
	}
}
