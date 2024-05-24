import Supabase from '../index.js';
import * as assert from 'assert';

describe('restful supabase', function () {
    this.timeout(0);
    const projectName = 'qplmusgcroaumzwhypmy';
    const service_role = process.env.SUPABASE_SERVICE_ROLE;

    const supabase = new Supabase(projectName, service_role);

    it('create user', async () => {
        const email = 'davidkhala@gmail.com'
        const users = await supabase.listUsers();
        for (const user of users) {
            if (user.email === email) {
                return // found
            }
        }
        await supabase.userCreate(email, 'password');
    });
    it('list users', async () => {
        const users = await supabase.listUsers();
        assert.ok(Array.isArray(users));
        console.debug(users)
    });
    it('getUsers', async () => {
        const uid = "31ea7a98-e79d-4947-aa05-e76703400c90"
        const r = await supabase.getUser(uid)
        console.debug(r)
    })

});