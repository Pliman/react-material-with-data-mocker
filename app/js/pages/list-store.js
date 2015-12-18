"use strict";

const Reflux = require('reflux');
const ListActions = require('./list-actions');

let ListStore = Reflux.createStore({
	// this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
	listenables: [ListActions],
	onList: function(element) {
		console.log('doing list action!');
		this.list.push(element);
		this.trigger(this.list);
	},
	updateList: function(list){
		this.list = list;
		this.trigger(list); // sends the updated list to all listening components (TodoApp)
	},
	// this will be called by all listening components as they register their listeners
	getInitialState: function() {
		this.list = [111,222,333];
		return this.list;
	}
});

module.exports = ListStore;