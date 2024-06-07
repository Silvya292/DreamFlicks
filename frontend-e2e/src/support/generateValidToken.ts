export function generateValidToken() {
  const user = {
    sub: '123',
    name: 'user',
    email: 'user@example.com',
    picture: 'https://example.com/avatar.jpg',
  };

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM' +
    'iLCJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsInB' +
    'pY3R1cmUiOiJodHRwczovL2V4YW1wbGUuY29tL2F2YXRhci5qcGcifQ.eA7' +
    'ZcfYr6Hd5wDqFeC-9TL9E9cux5GY7jSg8zhr2Uo8';

  return token;
}
