# react-material-with-data-mocker
react-reflux-material-with-data-mocker

three key points：
Reflux .createActions
Reflux .createStore
     listenables : [ListActions ]
     this .trigger ( this. list);
     getInitialState return this .list ;
mixins: [ Reflux .connect ( ListStore, "list")], use list as a state
