const http = new EasyHTTP();

// Get Posts
http
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((post) => console.log(post))
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

// Create Post
http
  .post('https://jsonplaceholder.typicode.com/posts', post)
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

// Update Post
http
  .put('https://jsonplaceholder.typicode.com/posts/1', post)
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

// Delete Post
http
  .delete('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
