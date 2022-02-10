<script>
	import { int, matrix } from '../../utility/RandomGenerator';

	let tests = [];

	const floodFill = (image, sr, sc, newColor) => {
		image = JSON.parse(JSON.stringify(image));
		const target = { x: sc, y: sr };
		const targetColor = image[target.y][target.x];
		const checked = {};
		const isValid = (x, y) => x >= 0 && x < image[0].length && y >= 0 && y < image.length && !checked[y + x * image.length] && image[y][x] === targetColor;

		const queue = [target];
		while (queue.length !== 0) {
			const pop = queue.pop();
			const x = pop.x;
			const y = pop.y;
			checked[y + x * image.length] = true;
			image[y][x] = newColor;
			if (isValid(x - 1, y + 0)) queue.push({ x: x - 1, y: y + 0 });
			if (isValid(x + 1, y + 0)) queue.push({ x: x + 1, y: y + 0 });
			if (isValid(x + 0, y + 1)) queue.push({ x: x + 0, y: y + 1 });
			if (isValid(x + 0, y - 1)) queue.push({ x: x + 0, y: y - 1 });
		}
		return image;
	};

	const generateTests = (amount) => {
		tests = [];
		for (let i = 0; i < amount; i++) {
			const test = {};
			test.image = matrix(1, 3, 1, 3, 0, 3);
			test.sr = int(0, test.image.length - 1);
			test.sc = int(0, test.image[0].length - 1);
			test.newColor = int(5, 5);
			test.result = floodFill(test.image, test.sr, test.sc, test.newColor);
			tests = [...tests, test];
		}
	};

	generateTests(10);
</script>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<a href="https://leetcode.com/problems/flood-fill/" class="text-3xl text-center">Flood Fill on LeetCode</a>
</div>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<div class="w-full flex flex-col gap-2">
		<button class="w-full rounded-lg drop-shadow-xl bg-cadet-grey text-white" on:click={() => generateTests(1)}>Generate Test Case</button>
		<button class="w-full rounded-lg drop-shadow-xl bg-cadet-grey text-white" on:click={() => generateTests(10)}>Generate 10 Test Cases</button>
		<button class="w-full rounded-lg drop-shadow-xl bg-cadet-grey text-white" on:click={() => generateTests(100)}>Generate 100 Test Cases</button>
		<button class="w-full rounded-lg drop-shadow-xl bg-cadet-grey text-white" on:click={() => generateTests(1000)}>Generate 1000 Test Cases</button>
	</div>
</div>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-2 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<div class="w-full grid grid-flow-col grid-cols-5 gap-2 text-xl font-bold">
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Image</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">SR</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">SC</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">New Color</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Result</span>
	</div>
	{#each tests as test}
		<div class="w-full grid grid-flow-col grid-cols-5 gap-2 text-xs">
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">
				Matrix({test.image.length * test.image[0].length}): {test.image.map((line) => line.join(' ')).join('|')}
			</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.sr}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.sc}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.newColor}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">
				Matrix({test.result.length * test.result[0].length}): {test.result.map((line) => line.join(' ')).join('|')}
			</span>
		</div>
	{/each}
</div>

<style>
</style>
