import handler from './user';

describe('getUser', () => {
  test('returns user detail', async () => {

    const response = await fetch('http://localhost:3000/api/user');
    expect(response.status).toBe(200)
    const body = await response.json();
    expect(body.name).toEqual('Test User');
    expect(body.id).toEqual(8512);
    expect(body.department).toEqual('Billing');
  })
});
