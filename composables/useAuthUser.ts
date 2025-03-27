export const useAuthUser = () => {
	const user = useState('auth-user', () => null);

	const fetchUser = async () => {
		const { $supabase } = useNuxtApp();
		const { data } = await $supabase.auth.getUser();
		user.value = data.user;
	};

	return { user, fetchUser };
};
