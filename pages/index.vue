<template>
	<div>
		<div>
			<!-- <p>Fetched from Supabase: {{ message }}</p> -->
			<!-- <router-view></router-view> -->
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(async () => {
	const { $supabase } = useNuxtApp();
	try {
		// Refresh the session before fetching the user
		const { data: session, error: sessionError } =
			await $supabase.auth.getSession();
		if (sessionError) {
			console.error('Error refreshing session:', sessionError);
			router.push('/signup');
			return;
		}

		const {
			data: { user },
			error,
		} = await $supabase.auth.getUser();
		if (error) {
			console.error('Error fetching user:', error);
			router.push('/signup');
		} else if (user) {
			console.log('user', user);
			router.push('/');
		} else {
			router.push('/signup');
		}

		// Listen for auth state changes to handle post-signup login
		$supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN' && session?.user) {
				console.log('User signed in:', session.user);
				router.push('/'); // Redirect to home or another route after signing in
			}
		});
	} catch (err) {
		console.error('Unexpected error:', err);
		router.push('/signup');
	}
});
</script>
