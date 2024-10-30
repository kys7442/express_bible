const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // 모든 출처에 대해 CORS 허용

// 특정 도메인만 허용하려면 다음과 같이 설정할 수도 있습니다
// app.use(cors({ origin: 'http://localhost:5010' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

require("./routes/bible.routes")(app);

// 포트넘버 설정
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
