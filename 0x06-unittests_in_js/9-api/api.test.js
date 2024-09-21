const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../api');
const should = chai.should();

chai.use(chaiHttp);

describe('GET /cart/:id', () => {
  it('should return payment methods for a valid cart id', (done) => {
    chai.request(server)
      .get('/cart/12')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return 404 for an invalid cart id', (done) => {
    chai.request(server)
      .get('/cart/hello')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
