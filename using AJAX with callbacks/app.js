const http = new easyHTTP();

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// GET single post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// custom post
const post = {
  title: 'custom post',
  body: 'this is a custom post',
};

// POST post
http.post('https://jsonplaceholder.typicode.com/posts', post, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// update post
http.put('https://jsonplaceholder.typicode.com/posts/1', post, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// DELETE post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
