import {createClient} from '@supabase/supabase-js';

export default class Supabase {
	/**
	 *
	 * @param projectName
	 * @param key either ANON_key or service_role key.
	 */
	constructor(projectName, key) {
		this.connection = createClient(`https://${projectName}.supabase.co`, key, {
			auth: {
				autoRefreshToken: false,
				persistSession: false,
				detectSessionInUrl: false
			}
		});
	}

	async userCreate(email, password) {
		const {data, error} = await this.connection.auth.admin.createUser({
			email, password,
			email_confirm: true
		});
		if (error) {
			throw error;
		}
		const {user} = data;
		return user;
	}
	async getUser(uid){
		const {data, error} =  await this.connection.auth.admin.getUserById(uid)
		if (error) {
			throw error;
		}
		return data.user;
	}
	async listUsers() {
		const {data, error} = await this.connection.auth.admin.listUsers();
		if (error) {
			throw error;
		}
		return data.users;
	}
}

