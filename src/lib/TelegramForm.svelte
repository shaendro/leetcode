<script>
	import { translate } from '../utility/Translations';

	let name = '';
	let email = '';
	let status = 'send';
	let message = '';

	const onSubmit = async (event) => {
		event.preventDefault();
		status = 'sending';
		const response = await fetch('telegram', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: name, email: email, message: message }),
		});
		if (response.status === 200) {
			name = '';
			email = '';
			status = 'send';
			message = '';
		} else status = 'failure';
	};

	$: canSend = () => {
		return name.trim() && email.trim() && message.trim() && status !== 'sending';
	};
</script>

<form class="w-full h-full flex flex-col gap-4 place-content-center" on:submit={onSubmit}>
	<h2 class="text-xl text-center">{translate('message_text')}</h2>
	<input type="text" class="w-full p-1 bg-black/[0.1] rounded-lg outline-cadet-grey" placeholder={translate('name')} bind:value={name} />
	<input type="text" class="w-full p-1 bg-black/[0.1] rounded-lg outline-cadet-grey" placeholder={translate('email')} bind:value={email} />
	<textarea class="w-full p-1 bg-black/[0.1] rounded-lg outline-cadet-grey" rows="4" placeholder={translate('message')} bind:value={message} />
	<button type="submit" class="w-full p-1 text-white disabled:text-inherit bg-cadet-grey disabled:bg-cadet-grey/[0.5] rounded-lg" disabled={!canSend()}>{translate(status)}</button>
</form>

<style>
</style>
