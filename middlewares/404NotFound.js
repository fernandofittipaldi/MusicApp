export const notFound = ((req, res, next) => {
  res.status(404).send({ success: false, message: '404 Not Found' });
  next();
})