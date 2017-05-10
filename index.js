var express = require('express'),
app = express();

app.get("/add", function(req, res, next){
	var a = parseInt(req.query.a)
		, b = parseInt(req.query.b)
	if (!a || !b) {
		return res.status(422).json("Please provide valid Numberic values")
	}
	var result = a+b
	return res.status(200).json({result})
})
app.get("/subtract", function (req, res, next){
	var a = parseInt(req.query.a)
		, b = parseInt(req.query.b)
	if (!a || !b) {
		return res.status(422).json("Please provide valid Numberic values")
	}
	var result = a-b
	return res.status(200).json({result})
})


app.listen(3000, function(){
  console.log('App is now listening @ 3000');
});
module.exports = app;
