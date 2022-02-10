<script>
	import { int } from '../../utility/RandomGenerator';

	let tests = [];

	const ways = (pizza, k) => {
		const mod = Math.pow(10, 9) + 7;
		const cutCols = (pizza, cols) => {
			const remainder = pizza.map((map) => map.slice(cols));
			const slice = pizza.map((map) => map.slice(0, cols));
			return { remainder, slice };
		};
		const cutRows = (pizza, rows) => {
			const remainder = pizza.slice(rows);
			const slice = pizza.slice(0, rows);
			return { remainder, slice };
		};
		const hasApple = (pizza) => {
			return pizza.join().includes('A');
		};

		const results = {};
		const cutPizza = (pizza, k) => {
			if (k === 1) {
				return hasApple(pizza) ? 1 : 0;
			} else {
				if (results[k + JSON.stringify(pizza)] !== undefined) return results[k + JSON.stringify(pizza)];
				let ways = 0;
				for (let i = 1; i < pizza[0].length; i++) {
					const cut = cutCols(pizza, i);
					if (hasApple(cut.slice)) {
						ways = ways + cutPizza(cut.remainder, k - 1);
					}
				}
				for (let i = 1; i < pizza.length; i++) {
					const cut = cutRows(pizza, i);
					if (hasApple(cut.slice)) {
						ways = ways + cutPizza(cut.remainder, k - 1);
					}
				}
				results[k + JSON.stringify(pizza)] = ways % mod;
				return ways % mod;
			}
		};

		return cutPizza(pizza, k, []) % mod;
	};

	const generateTests = (amount) => {
		tests = [];
		for (let i = 0; i < amount; i++) {
			const test = {};
			const width = int(1, 50);
			const height = int(1, 50);
			test.pizza = new Array(height).fill().map(() =>
				new Array(width)
					.fill()
					.map(() => ['A', '.'][int(0, 1)])
					.join('')
			);
			test.k = int(1, 10);
			test.result = ways(test.pizza, test.k);
			tests = [...tests, test];
		}
	};

	generateTests(3);
</script>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<a href="https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/" class="text-3xl text-center">Number of Ways of Cutting a Pizza on LeetCode</a>
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
	<div class="w-full grid grid-flow-col grid-cols-3 gap-2 text-xl font-bold">
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Pizza</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Slices</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Result</span>
	</div>
	{#each tests as test}
		<div class="w-full grid grid-flow-col grid-cols-3 gap-2 text-xs">
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">
				Matrix({test.pizza.length * test.pizza[0].length}): {test.pizza.join(' | ')}
			</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.k}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.result}</span>
		</div>
	{/each}
</div>

<style>
</style>
