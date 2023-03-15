const express = require("express");
const app = express();
const port = 3000;

// // Require user route
const userRoute = require("./routes/user");
// Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
app.use("/users", userRoute);
//
app.use(express.json());
app.set("views", "./views");
app.set("view engine", "pug");
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Trang chủ
app.get("/", (req, res) => {
  res.send("<h1>hello world </h1>");
});

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
