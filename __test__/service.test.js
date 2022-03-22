// const request = require('supertest');
// const app = require("../server");

// describe('POST /api',  () => {    

//   it('should return 404 if invalid id is passed', async () => {
//     const res = await request(app).get('/api/compute-transaction-fee/1');

//     expect(res.status).toBe(404);
//   }, 10000);

//     it('should return 400 if there is no Amount', async () => {

//       expect(res.status).toEqual(400);
//     });

//     it('should return 400 if EmailAddress is empty ', async () => {
    
//       expect(res.status).toBe(400);
//     });    

//     it('should return 404 if invalid id is passed', async () => {
//         const res = await request(server).post('/compute-transaction-fee/:id');
  
//         expect(res.status).toBe(404);
//       }, 10000);
//   });
