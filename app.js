/*
 * App 
 * * * */
var App = new SLJS({
	
	tmp: `
		<Header></Header>
		<Toggler></Toggler>
		<div>
			<PageOne></PageOne>
			<PageTwo></PageTwo>
		</div>
	`,

	model() {

	}

}, 'App');


/*
 * Header 
 * * * * */
var Header = new SLJS({
	
	tmp: `	
		<h1>Header</h1>
	`,

	model() {
		console.log('Header model');
	}

}, 'Header');


/*
 * PageOne 
 * * * * * */
var PageOne = new SLJS({
	
	tmp: `
		<h1>Page1</h1>
	`,
	
	model() {
		console.log('PageOne model');
	}

}, 'PageOne');


/*
 * PageTwo 
 * * * * * */
var PageTwo = new SLJS({
	
	tmp: `
		<h1>Page2</h1>
	`,
	
	model() {
		console.log('PageTwo model');
	}

}, 'PageTwo');


/*
 * Toggler 
 * * * * * */
var Toggler = new SLJS({
	
	tmp: `
		<button id="getPageOne">Page1</button>
		<button id="getPageTwo">Page2</button>
	`,

	model() {
		var th = this;

		PageOne.up();
		PageTwo.die();
		
		th.route({
			on: '#getPageOne', 
			show: PageOne, 
			hide: PageTwo, 
			path: 'one'
		});
		
		th.route({
			on: '#getPageTwo', 
			show: PageTwo, 
			hide: PageOne, 
			path: 'two'
		});

	}

}, 'Toggler');



















