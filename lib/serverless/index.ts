export function json (statusCode, json) {
  return {
    statusCode,
    body: JSON.stringify(json)
  }
}

export function handler (fn) {
  return function (event, context, callback) {
    fn(event, context)
      .then((...args) => callback(null, ...args))
      .catch((err) => callback(err))
  }
}
