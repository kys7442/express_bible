const sql = require("./db");

// 생성자
const Bible = function (bible) {
  this.lang = bible.lang;
  this.book_no = bible.book_no;
  this.book_kor = bible.book_kor;
  this.book_eng = bible.book_eng;
  this.chapter = bible.chapter;
  this.page = bible.page;
  this.contents = bible.contents;
};

Bible.findById = (customerId, result) => {
  sql.query(
    `SELECT * FROM bibles WHERE book_no = ${customerId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found bibles: ", res);
        result(null, res);
        return;
      }

      // not found Customer with the id
      result({ kind: "not_found" }, null);
    }
  );
};

// 챕터 그룹
Bible.getGroupOld = (result) => {
  sql.query(
    "SELECT book_no, book_kor FROM bibles WHERE book_no < 40 GROUP BY book_kor ORDER BY book_no",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("group_old: ", res);
      result(null, res);
    }
  );
};

Bible.getGroupNew = (result) => {
  sql.query(
    "SELECT book_no, book_kor FROM bibles WHERE book_no >= 40 GROUP BY book_kor ORDER BY book_no",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("group_new: ", res);
      result(null, res);
    }
  );
};

// customer 전체 조회
Bible.getAll = (result) => {
  sql.query("SELECT * FROM bibles", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("customer: ", res);
    result(null, res);
  });
};

module.exports = Bible;
