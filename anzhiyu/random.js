var posts=["posts/3357.html","posts/2700.html","posts/3290.html","posts/b26f.html","posts/df2a.html","posts/ab5b.html","posts/c5be.html","posts/94a6.html","posts/337a.html","posts/fb4c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };