var supertest = require('supertest'),
assert = require('assert'),
app = require('../index');

exports.addition_should_exist = function(done){
	supertest(app)
	.get("/add")
	.end(function(err, response){
		assert.ifError(err)
		assert.ok(response.status !== 404)
		done();
	})
}
exports.subtract_should_exist = function(done){
	supertest(app)
	.get("/subtract")
	.end(function(err, response){
		assert.ifError(err)
		assert.ok(response.status !== 404)
		done();
	})
}
exports.add_should_return_correct_results = function(done){
	supertest(app)
  .get('/add?a=2&b=3')
  .end(function(err, response){
		assert.ok(response.body.result === 5);
    return done();
  });
}
exports.subtract_should_return_correct_results = function(done){
	supertest(app)
  .get('/subtract?a=3&b=1')
  .end(function(err, response){
		assert.ok(response.body.result === 2);
    return done();
  });
}
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
}
exports.addition_should_reject_strings = function(done){
  supertest(app)
  .get('/add?a=string&b=2')
  .expect(422)
  .end(done);
}
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
}
exports.subtract_should_reject_strings = function(done){
  supertest(app)
  .get('/subtract?a=string&b=2')
  .expect(422)
  .end(done);
}
