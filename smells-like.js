/**
 * Smells Like JavaScript
 * Author: Timurziyev Ruslan
 * Link: https://github.com/sawuer/smells-like-js
 */

class SLJS {

	constructor(opt, entry) {

		/**
		 * Checking
		 */
		function err(text) {
			throw new TypeError(text);
		}

		if (!Object.keys(opt).length) {
			err("Props of new SLJS instance are does'nt exist");
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

		/*
		 * CORE METHODS AND PROPS  
		 * * * * * * * * * * * * */

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

		/*
		 * PUBLIC PROPS  
		 * * * * * * * * * * * * * */
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

	/**
	 * Clean tmp
	 */
	die() {
		this.entryDiv.innerHTML = '';
	}

	/**
	 * Up tmp
	 */
	up() {
		this.entryDiv.innerHTML = this.core.tmp;
	}



}


