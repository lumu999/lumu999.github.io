var posts=["posts/3357.html","posts/2700.html","posts/b26f.html","posts/3290.html","posts/337a.html","posts/df2a.html","posts/c5be.html","posts/ab5b.html","posts/fb4c.html","posts/94a6.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };