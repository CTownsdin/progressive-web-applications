## Welcome to GitHub Pages

## Hello World

You can use the [editor on GitHub](https://github.com/CTownsdin/progressive-web-applications/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/CTownsdin/progressive-web-applications/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

## 6 - Media queries - Responsive Layout of Columns

```
	<head>
	  <meta charset="utf-8">
	  <!-- IMPORTANT -->
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	
	  <title>responsive columns</title>
	  <link rel="stylesheet" href="/css/main.css">
	</head>
```
	
```
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



