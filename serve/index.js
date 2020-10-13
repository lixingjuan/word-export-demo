const Koa = require("koa");
const fs = require("fs");
const app = new Koa();

app.use(async (ctx) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  const res = fs.readFileSync("./serve/demo.html", "utf8");
  console.log(res);
  console.log("end");
  ctx.body = res;
});

app.listen(4000);
