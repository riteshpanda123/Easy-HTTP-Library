const http = new EasyHTTP();

// GET Posts
http
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));

// GET single post
http
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => console.log(post.body))
  .catch((err) => console.log(err));

// custom post
const post = {
  title: 'custom post',
  body: 'this is a custom post',
};

// POST post
http
  .post('https://jsonplaceholder.typicode.com/posts', post)
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

// update post
http
  .put('https://jsonplaceholder.typicode.com/posts/1', post)
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

// DELETE post
http
  .delete('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
