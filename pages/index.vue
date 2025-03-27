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

// const config = useRuntimeConfig();

// const supabase = createClient(
// 	config.public.supabaseUrl,
// 	config.public.supabaseKey
// );

// const { data, error } = await supabase.from('Messages').select('text').limit(1);

// if (error) {
// 	console.error('Supabase Error:', JSON.stringify(error));
// }

// const message = error
// 	? 'Error fetching data'
// 	: data?.[0]?.text || 'No data found';

const router = useRouter();

onMounted(async () => {
	const { $supabase } = useNuxtApp();
	const user = (await $supabase.auth.getUser()).data.user;
	console.log('user', user);
	if (user) {
		// ...existing code...
	} else {
		router.push('/signup');
	}
});
</script>
