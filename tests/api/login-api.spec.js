import { test, expect } from '@playwright/test';

test.describe('Login API Tests', () => {

    test('Login with valid credentials', async ({ request }) => {
        const res = await request.post('/users/login', {
            data: {
                email: process.env.USER_EMAIL,
                password: process.env.USER_PASSWORD
            }
        });
        expect(res.ok()).toBeTruthy();
        const body = await res.json();
        expect(body.token).toBeDefined();
    });

    test('Login with valid email and invalid password', async ({ request }) => {
        const res = await request.post('/users/login', {
            data: {
                email: process.env.USER_EMAIL,
                password: 'invalidpassword'
            }
        });
        expect(res.status()).toBe(401);
    });

    test('Login with invalid email and valid password', async ({ request }) => {
        const res = await request.post('/users/login', {
            data: {
                email: 'invalid@email.com',
                password: process.env.USER_PASSWORD
            }
        });
        expect(res.status()).toBe(401);
    });

    test('Login with missing fields', async ({ request }) => {
        const res = await request.post('/users/login', {
            data: {}
        });
        expect(res.status()).toBe(401);
    });
});
