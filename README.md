# Smells-like-js
Just a simple js library for creating useful components which have only to main props: **view and model.**

## Getting Started

1. Download or clone project copy
2. Include smells-like.js to the top of your page
3. Create <App/>
4. Then include js-file into bottom of the body

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script type="text/javascript" src="smells-like.js"></script>
</head>
<body>

  <App/>

  <script type="text/javascript" src="app.js"></script>
</body>
</html>
```

5. Add next code into js-file :

```
// Main instance
var App = new Smells({
  tmp: `
    // There is inner components
    <Header></Header>
  `,
  model() {
    // All business logic
  }
}, 'App');


// Child instance
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
```
model() // all business logic of your instance
```
```
tmp();  // templates
```

### Inner methods and props

```
inYouOptions(it will be this).qry(element); // instead of document.querySelector(-All)
```
```
inYouOptions(it will be this).route({ // route your components
  on: '#linkClicking', 
  show: component1, 
  hide: component2, 
  path: 'addressName'
});
```
```
inYouOptions(it will be this).put; // entry div of instance
```

### Public methods and props

```
YouInstance.core; // inners of instance
```
```
YouInstance.entry; // entry element of instance
```
```
YouInstance.entryDiv; // entry div of instance
```
```
YouInstance.die(); // kill view of the instance
```
```
YouInstance.up(); // update view of the insance
```

## Author

* **Ruslan Timurziyev**  - [Github](https://github.com/sawuer/)

See also the list of [contributors](https://github.com/sawuer/smells-like-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

