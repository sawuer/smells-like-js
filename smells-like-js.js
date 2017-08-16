/**
 * Smells Like JavaScript
 */
class Smells {

	constructor(opt, entry) {

		/**
		 * Checking
		 */
		function err(text) {
			throw new Error(text);
		}

		if (!Object.keys(opt).length) {
			err("Props of new Izy instance are does'nt exist");
		}

		if (!entry) {
			err("Entry element does'nt exist");
		}

		if (!opt.tmp) {
			err("Tmp does'nt exist");
		}

		if (!opt.model) {
			err("Model does'nt exist");
		}


		/* * * * * * * * * * * * * * 
		 * CORE METHODS AND PROPS  *
		 * * * * * * * * * * * * * */

		/** 
		 * Inner method for getting into dom
		 */
		opt.qry = (el) => {
			var all = document.querySelectorAll(el);
			if (all.length > 1) {
				return all;
			}
			return document.querySelector(el);
		}

		/**
		 * Route clicking on button
		 */
		opt.route = (conf) => {
			opt.qry(conf.on).onclick = () => {
				window.location = 'index.html#' + conf.path;
		    localStorage.setItem('myItem', "something you want to store");
				conf.show.up();
				conf.hide.die();
			}
		}

		/**
		 * Put data into html
		 */
		opt.put = (where, what) => {
			opt.qry(where).innerHTML = what;
		}

		/* * * * * * * * * * * * * * *
		 * PUBLIC METHODS AND PROPS  *
		 * * * * * * * * * * * * * * */

		this.core = opt;
		this.entry = entry;
		this.entryDiv = opt.qry(entry);
		
		/**
		 * Containing tmp result into 
		 * entry div of instance
		 */ 
		this.entryDiv.innerHTML = opt.tmp;
		this.core.model();

	}


	die() {
		this.entryDiv.innerHTML = '';
	}

	up() {
		this.entryDiv.innerHTML = this.core.tmp;
	}



}


