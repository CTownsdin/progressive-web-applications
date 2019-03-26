Markdown guide --> [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

This page is hosted at --> https://ctownsdin.github.io/progressive-web-applications/

PWA Training Labs - https://developers.google.com/web/ilt/pwa/


------
## Media queries - A Responsive Layout of Columns

   
### Meta Viewport Tag
```html
<head>
  <meta charset="utf-8">
  <!-- IMPORTANT -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>responsive columns</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
```
  
### Media queries controlling column-count
```css
@media only screen and (min-width: 1600px) {
  .columns-container {
    column-count: 6;
  }
}
@media only screen and (max-width: 1599px) {
  .columns-container {
    column-count: 3;
  }
}
@media only screen and (max-width: 767px) {
  .columns-container {
    column-count: 2;
  }
}
@media only screen and (max-width: 479px) {
  .columns-container {
    column-count: 1;
  }
}
```
   
------
## Service Workers (SW)


### Register the SW within the index.html file.
- [x] sw registered
```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
</script>
```



------
## Fetch Networking



------
## Responsive Images


Images commonly make up around 60% of a web pages bytes. Optimizing images can deliver big dividends.

```
- <picture>
- <source>
- srcset
  - pixel density descriptors
    - w unit, tells the browser the pixel width prior to downloading
  - falls back to src
- sizes
```

Things to consider:
```
- Resolution
- Display Size
- Format Support
- Art Direction
```

```html
<p>Cascade of formats, uses best available first</p>
<picture>
  <source srcset="kittens.webp" type="image/webp">
  <source srcset="kittens.jpg"  type="image/jpep">
  <img src="kittens.jpg" alt="Two kittens">
</picture>

<p>Art Direction using Media Queries</p>
<picture>
  <source media="(min-width: 650px)" srcset="kitten-large.png">
  <source media="(min-width: 465px)" srcset="kitten-medium.png">
  <img src="kitten-small.jpg" alt="Cute kitten">
</picture>

<p>Art Direction with Media Queries AND Pixel Density Descriptors</p>
<picture>
  <source media="(min-width: 1000px)" 
    srcset="bird_large_1x.jpg 1x, bird_large_2x.jpg 2x">

  <source media="(min-width: 500px)" 
    srcset="bird_med_1x.jpg 1x, bird_med_2x.jpg 2x">

  <img src="bird_small.jpg" alt="A colorful bird" />
</picture>

<p>Three resolutions, two formats, and two crops per image really add up.</p>
<picture>
  <!-- 16:9 crop -->
  <source
    type="image/webp"
    media="(min-width: 36em)"
    srcset="quilt_2/detail/large.webp  1920w,
            quilt_2/detail/medium.webp  960w,
            quilt_2/detail/small.webp   480w" />
  <source
    media="(min-width: 36em)"
    srcset="quilt_2/detail/large.jpg  1920w,
            quilt_2/detail/medium.jpg  960w,
            quilt_2/detail/small.jpg   480w" />
  <!-- square crop -->
  <source
    type="image/webp"
    srcset="quilt_2/square/large.webp   822w,
            quilt_2/square/medium.webp  640w,
            quilt_2/square/small.webp   320w" />
  <source
    srcset="quilt_2/square/large.jpg   822w,
            quilt_2/square/medium.jpg  640w,
            quilt_2/square/small.jpg   320w" />
  <img
    src="quilt_2/detail/medium.jpg"
    alt="Detail of the above quilt, highlighting the embroidery and exotic stitchwork." />
</picture>

<figure>
  <picture>
    <source media="(min-width: 750px)"
      srcset="images/horses-1600_large_2x.jpg 2x,
              images/horses-800_large_1x.jpg" />
    <source media="(min-width: 500px)" 
      srcset="images/horses_medium.jpg" />
    <img src="images/horses_small.jpg" alt="Horses in Hawaii">
  </picture>
  <figcaption>Horses in Hawaii</figcaption>
</figure>
```
https://developers.google.com/web/ilt/pwa/responsive-images-slides
https://alistapart.com/article/responsive-images-in-practice

------
## Video

reference:  
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video





