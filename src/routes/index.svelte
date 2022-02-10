<script context="module">
	export const prerender = true;
</script>

<script>
	import { translate } from '../utility/Translations';

	const problems = [
		{ id: 1, name: 'Two Sum', difficulty: 'Easy' },
		{ id: 4, name: 'Median of Two Sorted Arrays', difficulty: 'Hard' },
		{ id: 88, name: 'Merge Sorted Array', difficulty: 'Easy' },
		{ id: 733, name: 'Flood Fill', difficulty: 'Easy' },
		{ id: 1041, name: 'Robot Bounded In Circle', difficulty: 'Medium' },
		{ id: 1444, name: 'Number of Ways of Cutting a Pizza', difficulty: 'Hard' },
		{ id: 1491, name: 'Average Salary Excluding the Minimum and Maximum Salary', difficulty: 'Easy' },
	];

	const canCompleteCircuit = () => {
		let a = [];
		let b = [];
		const length = Math.floor(Math.random() * 500);
		for (let i = 0; i < length; i++) {
			a[i] = Math.floor(Math.random() * 5000);
			b[i] = Math.floor(Math.random() * 5000);
		}

		const change = a.map((fuel, index) => fuel - b[(index + 1) % a.length]);
		for (let start = 0; start < change.length; start++) {
			let tank = change[start];
			let stationsCleared = 1;
			while (tank >= 0 && stationsCleared <= change.length) {
				tank += change[(start + stationsCleared) % change.length];
				stationsCleared++;
			}
			if (stationsCleared === change.length + 1) return console.log('canCompleteCircuit', start);
		}
		return console.log('canCompleteCircuit', -1);
	};

	const majorityElement = () => {
		let array = [];
		const length = Math.floor(Math.random() * 500);
		for (let i = 0; i < length; i++) array[i] = Math.floor(Math.random() * 500);
		const majority = Math.floor(Math.random() * 5000) - 2500;
		for (let i = 0; i <= Math.floor(array.length / 2) + 1; i++) array[i] = majority;
		array.sort(() => 0.5 - Math.random());
		console.log(array);

		array.sort();
		return console.log('majorityElement', array[Math.ceil(array.length / 2)]);
	};

	const isInterleave = () => {
		// const a = 'aabcc';
		// const b = 'dbbca';
		// const c = 'aadbbcbcac';
		const a = 'Bce';
		const b = 'abcBceDe';
		const c = 'abcBceDedel';

		if (a.length + b.length !== c.length) return console.log('isInterleave', false);
		const isInterleaveRecursion = (a, b, c) => {
			let success = c.length === 0;
			success = success || (a[0] === c[0] && isInterleaveRecursion(a.slice(1), b, c.slice(1)));
			success = success || (b[0] === c[0] && isInterleaveRecursion(a, b.slice(1), c.slice(1)));
			return success;
		};
		return console.log('isInterleave', isInterleaveRecursion(a, b, c));
	};

	const minJumpsArray = () => {
		let array = [];
		const length = Math.floor(Math.random() * 5000);
		for (let i = 0; i < length; i++) array[i] = Math.floor(Math.random() * 50) + 1;

		// const minJumps = [0];
		// for (let i = 1; i < array.length; i++) {
		//   let minJump = Infinity;
		// 	for (let j = 0; j < i; j++) if (array[j] >= i - j && minJumps[j] + 1 < minJump) minJump = minJumps[j] + 1;
		// 	minJumps[i] = minJump;
		// }
		const minJumps = array.map(() => Infinity);
		minJumps[0] = 0;
		for (let i = 0; i < array.length; i++) {
			for (let j = 1; j <= array[i]; j++) {
				if (minJumps[i + j] > minJumps[i] + 1) minJumps[i + j] = minJumps[i] + 1;
			}
		}

		return console.log('minJumpsArray', minJumps[minJumps.length - 1]);
	};

	const wordBreak = () => {
		// let string = 'myinterviewtrainer';
		// let dictionary = ['trainer', 'my', 'interview'];
		// let string = 'a';
		// let dictionary = ['aaa', 'my', 'interview'];
		let string = 'aabbaa';
		let dictionary = ['aabb', 'aa', 'bbaa'];

		const wordBreakRecursion = (string) => {
			let success = string.length === 0;
			for (const word of dictionary) {
				if (string.slice(0, word.length) === word) {
					success = success || wordBreakRecursion(string.slice(word.length));
				}
			}
			return success;
		};
		return console.log('wordBreak', wordBreakRecursion(string));
	};

	const regex2 = () => {
		let string = 'aab';
		let expression = 'c*a*b';
		// let string = 'ab';
		// let expression = '.*';

		while (string.length > 0 && expression.length > 0) {
			if (expression[1] === '*') {
				while (string.length > 0 && (string[0] === expression[0] || expression[0] === '.')) {
					string = string.slice(1);
				}
				expression = expression.slice(2);
			} else {
				if (string[0] === expression[0] || expression[0] === '.') {
					string = string.slice(1);
					expression = expression.slice(1);
				} else {
					break;
				}
			}
		}

		return console.log('regex2', string.length === 0 && expression.length === 0);
	};
</script>

<svelte:head>
	<title>Paul Lonauer</title>
	<meta name="description" content={translate('description')} />
</svelte:head>

<div class="flex flex-col gap-8">
	<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-4 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
		<h1 class="text-3xl text-center">LeetCode</h1>
		<div class="w-full flex text-xl font-bold">
			<span class="w-1/2">LeetCode ID</span>
			<span class="w-full">Name</span>
			<span class="w-1/2">Difficulty</span>
		</div>

		{#each problems as problem}
			<a href={`problems/${problem.id}`} class="w-full flex text-xl text-bold">
				<span class="w-1/2">{problem.id}</span>
				<span class="w-full">{problem.name}</span>
				<span class="w-1/2">{problem.difficulty}</span>
			</a>
		{/each}
	</div>
</div>

<style>
</style>
