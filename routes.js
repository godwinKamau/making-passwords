//Working with Carlos:
//code a little; test a little
//
//created module.exports as its own function, passed app as a parameter
//use require in the server to call this function

module.exports = function (app) {
  app.get("/foo", (req, res) => {
    return res.send("bar");
  });
};
