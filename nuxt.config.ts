export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			supabaseUrl: process.env.SUPABASE_URL || '',
			supabaseKey: process.env.SUPABASE_KEY || '',
		},
	},

	compatibilityDate: '2025-03-27',
});
