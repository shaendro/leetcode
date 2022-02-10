<script>
	import { Vector3 } from 'three';
	import { onDestroy, onMount } from 'svelte';

	export let techs = [];
	let points = [];
	let reference = undefined;
	let lastUpdate = 0;
	let rotationAxis = new Vector3(0.5, 0.5, 0);

	onMount(() => {
		const phi = Math.PI * (3 - Math.sqrt(5));
		points = techs.map((tech, index) => {
			const y = 1 - (index / (techs.length - 1)) * 2;
			const radius = Math.sqrt(1 - y * y);
			const theta = phi * index;
			const x = Math.cos(theta) * radius;
			const z = Math.sin(theta) * radius;
			return {
				name: tech,
				position: new Vector3(x, y, z),
			};
		});
		window.requestAnimationFrame(animateCloud);
	});

	const animateCloud = (now) => {
		for (const point of points) point.position.applyAxisAngle(rotationAxis, (now - lastUpdate) / 1000).normalize();
		lastUpdate = now;
		points = points;
		window.requestAnimationFrame(animateCloud);
	};

	const onPointerMove = (event) => {
		const rect = reference.getBoundingClientRect();
		rotationAxis.x = -2 * (event.offsetY / rect.height - 0.5);
		rotationAxis.y = 2 * (event.offsetX / rect.width - 0.5);
	};

	const getTechStyle = (point) => {
		const x = point.position.x * reference?.getBoundingClientRect().width * 0.3;
		const y = point.position.y * reference?.getBoundingClientRect().height * 0.4;
		return `transform:translate3d(${x}px,${y}px,${0}px)`;
	};
</script>

<div class="w-full h-full relative overflow-hidden" on:pointermove={onPointerMove} bind:this={reference}>
	{#each points.sort((a, b) => a.position.z - b.position.z) as point}
		<div class="absolute w-full h-full flex place-content-center place-items-center top-0 left-0 text-center pointer-events-none select-none" style={getTechStyle(point)}>
			<span class="transition-all bg-white/[.75] rounded-lg px-1 [font-variant:small-caps]" style={`opacity:${point.position.z > 0 ? 1 : 0.25}`}>{point.name}</span>
		</div>
	{/each}
</div>

<style>
</style>
