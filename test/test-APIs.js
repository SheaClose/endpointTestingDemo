var supertest = require('supertest'),
assert = require('assert'),
app = require('../index');

exports.addition_should_respond_with_a_numeric_result = function(done){
	supertest(app)
  .get('/add?a=5&b=4')
  .expect(200)
  .end(function(err, response){
    assert.ok(!err);
    assert.ok(typeof response.body.result === 'number');
		assert.ok(response.body.result === 9);
    return done();
  });
};

exports.addition_should_reject_strings = function(done){
  supertest(app)
  .get('/add?a=string&b=2')
  .expect(422)
  .end(done);
};

exports.subtract_should_respond_with_a_numeric_result = function(done){
  supertest(app)
  .get('/subtract?a=5&b=4')
  .expect(200)
  .end(function(err, response){
    assert.ok(!err);
    assert.ok(typeof response.body.result === 'number');
		assert.ok(response.body.result === 1);
    return done();
  });
};
exports.subtract_should_reject_strings = function(done){
  supertest(app)
  .get('/subtract?a=string&b=2')
  .expect(422)
  .end(done);
};
