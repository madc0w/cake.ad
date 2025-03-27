import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin((nuxtApp) => {
	const {
		public: { supabaseUrl, supabaseKey },
	} = useRuntimeConfig() as unknown as {
		public: {
			supabaseUrl: string;
			supabaseKey: string;
		};
	};

	const supabase = createClient(supabaseUrl, supabaseKey);

	nuxtApp.provide('supabase', supabase);
});
