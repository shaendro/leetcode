<script>
	import { translate } from '../../utility/Translations';
</script>

<div class="flex flex-col gap-8">
	<div class="w-full grid grid-flow-row auto-cols-auto place-items-center gap-8 bg-white drop-shadow-xl rounded-lg p-4 sm:p-8">
		<a href="/" class="text-3xl text-center">{translate('backToList')}</a>
	</div>
	<slot />
</div>

<style>
</style>
