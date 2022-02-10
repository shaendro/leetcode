<script>
	import { int } from '../../utility/RandomGenerator';

	let tests = [];

	const isRobotBounded = (instructions) => {
		const transform = instructions.replaceAll('R', 'LLL');
		const lefts = (transform.split('L').length - 1) % 4;

		const movements = transform.split('L');
		let x = 0;
		let y = 0;
		movements.forEach((move, index) => {
			if (index % 4 === 0) x += move.length;
			if (index % 4 === 1) y += move.length;
			if (index % 4 === 2) x -= move.length;
			if (index % 4 === 3) y -= move.length;
		});

		return lefts !== 0 || (x === 0 && y === 0);
	};

	const generateTests = (amount) => {
		tests = [];
		for (let i = 0; i < amount; i++) {
			const test = {};
			test.instructions = new Array(int(1, 500)).fill().map(() => ['G', 'L', 'R'][int(0, 2)]);
			test.instructions = test.instructions.join('');
			test.result = isRobotBounded(test.instructions);
			tests = [...tests, test];
		}
	};

	generateTests(10);
</script>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<a href="https://leetcode.com/problems/robot-bounded-in-circle/" class="text-3xl text-center">Robot Bounded In Circle on LeetCode</a>
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
	<div class="w-full grid grid-flow-col grid-cols-2 gap-2 text-xl font-bold">
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Instructions</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Result</span>
	</div>
	{#each tests as test}
		<div class="w-full grid grid-flow-col grid-cols-2 gap-2 text-xs">
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">String({test.instructions.length}): {test.instructions}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.result}</span>
		</div>
	{/each}
</div>

<style>
</style>
