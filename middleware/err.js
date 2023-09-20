const testErr = (err, req, res, next) => {
  err === 1 && res.send({ status: false, msg: "params wrong" });
  err === 2 && res.send({ status: false, msg: "token verify failed" });
}

module.exports = testErr;