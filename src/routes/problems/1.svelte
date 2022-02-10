<script>
	import { array, int } from '../../utility/RandomGenerator';

	let tests = [];

	const twoSum = (nums, target) => {
		const seen = {};
		for (let i = 0; i < nums.length; i++) {
			const complement = target - nums[i];
			if (seen[complement] !== undefined) return [seen[complement], i];
			else seen[nums[i]] = i;
		}
	};

	const generateTests = (amount) => {
		tests = [];
		for (let i = 0; i < amount; i++) {
			const test = {};
			test.nums = array(2, 500, -500, 500);
			test.target1 = int(0, test.nums.length - 2);
			test.target2 = int(test.target1 + 1, test.nums.length - 1);
			test.target = test.nums[test.target1] + test.nums[test.target2];
			test.result = twoSum(test.nums, test.target);
			tests = [...tests, test];
		}
	};

	generateTests(10);
</script>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<a href="https://leetcode.com/problems/two-sum/" class="text-3xl text-center">TwoSum on LeetCode</a>
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
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Nums</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Target</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Result</span>
	</div>
	{#each tests as test}
		<div class="w-full grid grid-flow-col grid-cols-3 gap-2 text-xs">
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.nums.length}): {test.nums.join(', ')}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.target}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.result.length}): {test.result.join(', ')}</span>
		</div>
	{/each}
</div>

<style>
</style>
