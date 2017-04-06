var supertest = require( "supertest" )
var assert = require( "assert" )
var app = require( "../index" )

exports.addition_should_exist = function(done){
	supertest(app)
	.get('/add')
	.end(function(err, response){
		assert.ifError(err);
		assert.ok(response.status !== 404);
		done()
	})
}

exports.should_reject_non_numbers = function(done){
	supertest(app)
	.get("/add?a=fish&b=boat")
	.expect(422)
	.end(function(err, response){
		done()
	})
}

exports.add_should_respond_with_correct_results = function (done){
	supertest(app)
	.get("/add?a=3&b=3")
	.expect(200)
	.end(function(err, response){

		assert.ok(!err);
		assert.ok ( typeof response.body.result ===  'number')
		assert.ok (response.body.result == 6)
		done()
	})
}

exports.subtract_should_exist = function(done){
	supertest(app)
	.get("/subtract")
	// .expect(response.body !== 404)
	.end(function(err, response){
		assert.ifError(err);
		assert.ok(response.status !== 404);
		done()
	})
}

exports.should_reject_non_numbers = function(done){
	supertest(app)
	.get("/subtract?a=fish&b=boat")
	.expect(422)
	.end(function(err, response){
		done()
	})
}

exports.subtract_should_return_correct_numeric_answer = function (done) {
	supertest(app)
	.get("/subtract?a=5&b=7")
	.expect(200)
	.end(function(err, response){

		assert.ok(!err);
		assert.ok(typeof response.body.result === "number")
		assert.ok(response.body.result === -2)
		done()
	})
}
