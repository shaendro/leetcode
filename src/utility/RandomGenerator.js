/**
 * A module for generating randomized values
 */

/**
 * Returns a random integer between min and max
 */
export const int = (min, max) => {
	return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Returns a random array with a size between smin and smax, filled with values between vmin and vmax
 */
export const array = (smin, smax, vmin, vmax) => {
	return new Array(int(smin, smax)).fill().map(() => int(vmin, vmax));
};

/**
 * Returns a random matrix with a size between wmin, wmax, hmin, and hmax, filled with values between vmin and vmax
 */
export const matrix = (wmin, wmax, hmin, hmax, vmin, vmax) => {
	const width = int(wmin, wmax);
	const height = int(hmin, hmax);
	return new Array(width).fill().map(() => array(height, height, vmin, vmax));
};
