<script>
	import { array } from '../../utility/RandomGenerator';

	let tests = [];

	const average = (salary) => {
		salary = JSON.parse(JSON.stringify(salary));
		salary.sort((a, b) => a - b);
		salary.pop();
		salary.shift();
		return salary.reduce((sum, value) => sum + value, 0) / salary.length;
	};

	const generateTests = (amount) => {
		tests = [];
		for (let i = 0; i < amount; i++) {
			const test = {};
			test.salary = array(3, 500, 1000, 100000);
			test.result = average(test.salary);
			tests = [...tests, test];
		}
	};

	generateTests(10);
</script>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<a href="https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/" class="text-3xl text-center"
		>Average Salary Excluding the Minimum and Maximum Salary on LeetCode</a
	>
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
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Salary</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Result</span>
	</div>
	{#each tests as test}
		<div class="w-full grid grid-flow-col grid-cols-2 gap-2 text-xs">
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.salary.length}): {test.salary.join(', ')}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.result.toFixed(4)}</span>
		</div>
	{/each}
</div>

<style>
</style>
