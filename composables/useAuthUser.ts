export const useAuthUser = () => {
	const user = useState('auth-user', () => null);

	const fetchUser = async () => {
		const { $supabase } = useNuxtApp();
		try {
			// Refresh the session before fetching the user
			const { data: session, error: sessionError } =
				await $supabase.auth.getSession();
			if (sessionError) {
				console.error('Error refreshing session:', sessionError);
				user.value = null;
				return;
			}

			const { data, error } = await $supabase.auth.getUser();
			if (error) {
				console.error('Error fetching user:', error);
				user.value = null;
			} else {
				user.value = data.user;
			}
		} catch (err) {
			console.error('Unexpected error:', err);
			user.value = null;
		}
	};

	return { user, fetchUser };
};
