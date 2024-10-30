module.exports = (app) => {
  const bible = require("../controllers/bible.controller");

  // 전체 조회
  app.get("/bible", bible.findAll);

  //그룹
  app.get("/bibles/groupold", bible.groupChapterOld);
  app.get("/bibles/groupnew", bible.groupChapterNew);

  // id로 조회
  app.get("/bibles/chapter/:customerId", bible.findOne);
};
