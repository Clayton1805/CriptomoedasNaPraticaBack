module.exports = (req, _res, next) => {
  console.log({
    data: new Date(),
    method: req.method,
    router: req.originalUrl,
  });
  next();
};
