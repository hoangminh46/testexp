const express = require("express");
const user_router = express.Router();

var users = [
  { id: 1, name: "long", email: "user1@gmail.com", age: 20 },
  { id: 2, name: "minh", email: "minh1@gmail.com", age: 23 },
  { id: 3, name: "minh", email: "minh2@gmail.com", age: 25 },
  { id: 4, name: "hai", email: "hai@gmail.com", age: 21 },
];

user_router.get("/", (req, res) => {
  res.render("users/index", { users: users });
});

// search user
user_router.get("/search", (req, res) => {
  var nameSearch = req.query.name;
  var ageSearch = req.query.age;
  var result = users.filter((item) => {
    return (
      item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) !== -1 &&
      item.age === parseInt(ageSearch)
    );
  });
  res.render("users/index", { users: result });
});
//post user
user_router.get("/create", (req, res) => {
  res.render("users/create");
});

user_router.post("/create", (req, res) => {
  users.push(req.body);
  res.redirect("/users");
});

// chi tiet user theo id
user_router.get(`/:id`, (req, res) => {
  var user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.render("users/show", {
    user: user,
  });
});

// export router
module.exports = user_router;
