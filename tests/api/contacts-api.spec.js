import { test, expect } from '@playwright/test';

test.describe('Contact CRUD API Tests', () => {

    let token;
    let contactId;

    test.beforeAll(async ({ request }) => {
        const res = await request.post('/users/login', {
            data: {
                email: process.env.USER_EMAIL,
                password: process.env.USER_PASSWORD
            }
        });
        const body = await res.json();
        token = body.token;
    });

    test('Get contact list', async ({ request }) => {
        const res = await request.get('/contacts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(res.ok()).toBeTruthy();
        expect(res.status()).toBe(200);
    });

    test('Add contact', async ({ request }) => {
        const res = await request.post('/contacts', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                firstName: 'API',
                lastName: 'User',
                birthdate: '2000-01-01',
                email: `apitest@mail.com`,
                phone: '1234567890',
                street1: 'Main St',
                city: 'city',
                stateProvince: 'province',
                postalCode: '94568',
                country: 'country'
            }
        });
        expect(res.ok()).toBeTruthy();
        expect(res.status()).toBe(201);
        const body = await res.json();
        contactId = body._id;
        expect(contactId).toBeDefined();
    });

    test('Get contact details', async ({ request }) => {
        const res = await request.get(`/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(res.ok()).toBeTruthy();
    });

    test('Update contact', async ({ request }) => {
        const res = await request.put(`/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                firstName: 'Updated API',
                lastName: 'User',
                birthdate: '2000-01-01',
                email: 'updatedtest@mail.com',
                phone: '1234567890',
                street1: 'Main St',
                city: 'city',
                stateProvince: 'province',
                postalCode: '94568',
                country: 'country'
            }
        });
        expect(res.ok()).toBeTruthy();
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(body.firstName).toBe('Updated API');
        expect(body.email).toBe('updatedtest@mail.com');
    });

    test('Update contact country', async ({ request }) => {
        const res = await request.patch(`/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                country: 'updated country'
            }
        });
        expect(res.ok()).toBeTruthy();
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(body.country).toBe('updated country');
    });

    test('Delete contact', async ({ request }) => {
        const res = await request.delete(`/contacts/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        expect(res.ok()).toBeTruthy();
        expect(res.status()).toBe(200);
        const text = await res.text();
        expect(text).toBe('Contact deleted');
    });

   
});
