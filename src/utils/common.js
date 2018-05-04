let serverPath = 'http://www.abc.com/api/'
function posts (url) {
  let all = serverPath + url
  return all
}
posts('')

export function post (url) {
  let all = serverPath + url
  return all
}

// module.exports = {
//   post: post
// }
