const Bible = require("../models/bible.model");

// 전체 조회
exports.findAll = (req, res) => {
  Bible.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving bibles.",
      });
    else res.send(data);
  });
};

// 그룹챕터
exports.groupChapterOld = (req, res) => {
  Bible.getGroupOld((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving bibles.",
      });
    else res.send(data);
  });
};

// 그룹챕터
exports.groupChapterNew = (req, res) => {
  Bible.getGroupNew((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving bibles.",
      });
    else res.send(data);
  });
};

// id로 조회
exports.findOne = (req, res) => {
  Bible.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Bible with id ${req.params.customerId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Bible with id " + req.params.customerId,
        });
      }
    } else res.send(data);
  });
};
