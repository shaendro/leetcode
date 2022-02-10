<script>
	import { array, int } from '../../utility/RandomGenerator';

	let tests = [];

	const merge = (nums1, nums2) => {
		nums1 = JSON.parse(JSON.stringify(nums1));
		nums2 = JSON.parse(JSON.stringify(nums2));
		const merge = [];
		const fullLength = nums1.length + nums2.length;
		for (let i = 0; i <= fullLength / 2; i++) {
			if (nums1[0] !== undefined && nums2[0] !== undefined) {
				merge[i] = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
			} else if (nums1[0] !== undefined) {
				merge[i] = nums1.shift();
			} else {
				merge[i] = nums2.shift();
			}
		}
		const expectedResults = fullLength % 2 === 0 ? 2 : 1;
		if (expectedResults === 2) {
			return (merge[merge.length - 1] + merge[merge.length - 2]) / 2;
		} else {
			return merge[merge.length - 1];
		}
	};

	const generateTests = (amount) => {
		tests = [];
		for (let i = 0; i < amount; i++) {
			const test = {};
			test.nums1 = array(0, 1000, -10000, 10000).sort((a, b) => a - b);
			test.nums2 = array(1, 1000, -10000, 10000).sort((a, b) => a - b);
			test.result = merge(test.nums1, test.nums2);
			tests = [...tests, test];
		}
	};

	generateTests(10);
</script>

<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
	<a href="https://leetcode.com/problems/median-of-two-sorted-arrays/" class="text-3xl text-center">Median of Two Sorted Arrays on LeetCode</a>
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
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Nums1</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Nums2</span>
		<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Result</span>
	</div>
	{#each tests as test}
		<div class="w-full grid grid-flow-col grid-cols-3 gap-2 text-xs">
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.nums1.length}): {test.nums1.join(', ')}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">Array({test.nums2.length}): {test.nums2.join(', ')}</span>
			<span class="w-full text-center text-ellipsis overflow-hidden whitespace-nowrap">{test.result.toFixed(4)}</span>
		</div>
	{/each}
</div>

<style>
</style>
