
/*
 * GET home page.
 */

exports.base = function(req, res){
  res.render('domtest');
};

exports.jsondata = function(req, res){
  res.send(JSON.stringify(generateData(req)))
};

exports.plaindata = function(req, res) {
  res.render("plaindata",{data: generateData(req)})
};

var generateData = function(req) {
  var size = req.query['size']

  var data = []
  for(var i = 0; i < size; i++) {
    data.push({
      name: randomString(10),
      value: Math.random(10000)
    })
  }

  return data;
}

var randomString = function(length) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

  length = length ? length : 32;

  var string = '';

  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }

  return string;
}
