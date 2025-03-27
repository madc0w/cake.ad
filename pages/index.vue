<template>
	<div>
		<h1>Hello World!</h1>
		<p>Fetched from Supabase: {{ message }}</p>
	</div>
</template>

<script setup>
const { $supabase } = useNuxtApp();
const { data } = await $supabase
	.from('messages')
	.select('text')
	.limit(1)
	.single();

const message = data?.text || 'No data found';
</script>
