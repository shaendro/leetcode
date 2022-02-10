<script>
	import { array } from '../../utility/RandomGenerator';

	let tests = [];

	const merge = (nums1, m, nums2, n) => {
		nums1 = JSON.parse(JSON.stringify(nums1));
		nums2 = JSON.parse(JSON.stringify(nums2));
		const result = [...nums1.slice(0, -nums2.length), ...nums2].sort((a, b) => a - b);
		for (let i = 0; i < result.length; i++) nums1[i] = result[i];
		return nums1;
	};

	const generateTests = (amount) => {
		tests = [];
		for (let i = 0; i < amount; i++) {
			const test = {};
			test.nums1 = array(0, 200, -10000, 10000).sort((a, b) => a - b);
			test.m = test.nums1.length;
			test.nums2 = array(1, 200, -10000, 10000).sort((a, b) => a - b);
			test.n = test.nums2.length;
			test.nums1 = [...test.nums1, ...test.nums2.map(() => 0)];
			test.result = merge(test.nums1, test.m, test.nums2, test.n);
			tests = [...tests, test];
		}
	};

	generateTests(10);
</script>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<a href="https://leetcode.com/problems/merge-sorted-array/" class="text-3xl text-center">Merge Sorted Array on LeetCode</a>
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
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Nums1</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">M</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Nums2</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">N</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Result</span>
	</div>
	{#each tests as test}
		<div class="w-full grid grid-flow-col grid-cols-5 gap-2 text-xs">
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.nums1.length}): {test.nums1.join(', ')}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.m}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.nums2.length}): {test.nums2.join(', ')}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.n}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.result.length}): {test.result.join(', ')}</span>
		</div>
	{/each}
</div>

<style>
</style>
