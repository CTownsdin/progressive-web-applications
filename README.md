Markdown guide --> [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).


## Media queries - A Responsive Layout of Columns

```html
<head>
  <meta charset="utf-8">
  <!-- IMPORTANT -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>responsive columns</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
```
	
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

## Service Workers
- [x] Learn about Service Workers.
- [] Write a document about it.
- [ ] Write another document about it.


### Page is hosted at: https://ctownsdin.github.io/progressive-web-applications/
