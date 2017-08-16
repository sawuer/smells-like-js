# Smells-like-js
Just a simple js library for creating useful components which have own **view and model.**

## Getting Started

1. Download or clone project copy
2. Include smells-like.js to the top of your page
3. Create div with id
4. Then include js-file into bottom of the body
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script type="text/javascript" src="ramona.js"></script>
</head>
<body>
  <div id="myAppName"></div>
  <script type="text/javascript" src="app.js"></script>
</body>
</html>
```
5. Add next code into js-file :
```
// Main component
var App = new Smells({
  tmp: `
    // There is inner components
    <Header></Header>
  `,
  model() {
    // All business logic
  }
}, 'App');


// Child component
var Header = new Smells({
  tmp: `  
    <h1>Header</h1>
  `,
  model() {
    var th = this;
    console.log('Header model');
  }
}, 'Header');

```

## Docs

* model() - all business logic of your component
* tmp() - templates

### Inner methods and props

this.qry(element); // instead of document.querySelector(-All)
this.route({ // route your components
  on: '#linkClicking', 
  show: component1, 
  hide: component2, 
  path: 'addressName'
});

### Public methods and props

youInstance.core; // inners of instance
youInstance.entry; // entry element of instance
youInstance.entryDiv; // entry div of instance
die(); // kill view of the instance
up(); // update view of the insance

## Author

* **Ruslan Timurziyev**  - [Github](https://github.com/sawuer/)

See also the list of [contributors](https://github.com/sawuer/ramona-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

