export function log(req, res, next) {
  console.log('Method: ', req.method);
  console.log('URL: ', req.url);
  next();
}