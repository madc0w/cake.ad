<template>
	<div>
		<h1>Sign Up</h1>
		<form @submit.prevent="handleSignup">
			<div>
				<label for="email">Email:</label>
				<input type="email" id="email" v-model="email" required />
			</div>
			<div>
				<label for="password">Password:</label>
				<input type="password" id="password" v-model="password" required />
			</div>
			<button type="submit">Sign Up</button>
		</form>
		<p v-if="errorMessage" class="error">{{ errorMessage }}</p>
	</div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';

const config = useRuntimeConfig();
const supabase = createClient(
	config.public.supabaseUrl,
	config.public.supabaseKey
);

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSignup = async () => {
	try {
		const { error } = await supabase.auth.signUp({
			email: email.value,
			password: password.value,
		});
		errorMessage.value = error
			? error.message
			: 'Signup successful! Please check your email.';
	} catch (err) {
		errorMessage.value = 'An unexpected error occurred.';
	}
};
</script>

<style scoped>
.error {
	color: red;
}
</style>
