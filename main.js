/**
 * main Application JavaScript file
 *
 * 11000
 */

var React              = require("react");
var ReactRouter   = require('react-router');
var Fluxxor            = require("fluxxor");

var actions            = {};
var stores             = {};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var DefaultRoute  = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Route         = ReactRouter.Route;
var RouteHandler  = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

//var myLink = React.createElement(Link, {to: 'turbochat'}, '...Link...');

var App = React.createClass({displayName: "App",
    render: function () {
        return (
            React.createElement(RouteHandler, React.__spread({},  this.props))
        );
    }
});

var PageLogin = React.createClass({displayName: "PageLogin",
    render: function() {
        var myLink = React.createElement(Link, {to: 'turbochat'}, '...Link...');
        return (
            React.createElement('div', {className: 'PageLogin'}, myLink)
        )
    }
});
var PageTurboChat = React.createClass({displayName: "PageTurboChat",
    render: function() {
        return (
            React.createElement('div', {className: 'PageTurboChat'}, 'PageTurboChat')
        )
    }
});
var PageNotFound = React.createClass({displayName: "PageNotFound",
    render: function() {
        return (
            React.createElement('div', {className: 'PageNotFound'}, 'PageNotFound')
        )
    }
});

var routes = (
    React.createElement(Route, {name: 'app', path: '/', handler: App},
        React.createElement(Route, {name: 'login', path: '\#\!login', handler: PageLogin}),
        React.createElement(Route, {name: 'turbochat', path: 'turbochat', handler: PageTurboChat}),
        //React.createElement(DefaultRoute, {name: 'default-route', handler: PageTurboChat}),
        React.createElement(NotFoundRoute, {name: 'page-not-found', handler: PageNotFound})
    )
);

var Router = ReactRouter.create({
    routes: routes


    // TODO: investigate
    //,
    //location: Router.HistoryLocation
});


Router.run(function (Handler) {

    // TODO: remove
    //aaa = React.renderToString(React.createElement(Handler, {flux: flux}),
    //    document.getElementsByClassName(appConfig.appHtmlNodeClass)[0],
    //    function () {
    //    console.log('Rendered');
    //    //document.getElementsByTagName("html")[0].removeAttribute('width');
    //    //document.getElementsByTagName("html")[0].removeAttribute('height');
    //});
    //
    //bbb = React.renderToStaticMarkup(React.createElement(Handler, {flux: flux}),
    //    document.getElementsByClassName(appConfig.appHtmlNodeClass)[0],
    //    function () {
    //        console.log('Rendered');
    //        //document.getElementsByTagName("html")[0].removeAttribute('width');
    //        //document.getElementsByTagName("html")[0].removeAttribute('height');
    //});

    React.render(
        React.createElement(Handler, {flux: flux}),
        document.getElementsByClassName('appTest-html')[0]

        // TODO: remove
        ,function () {
            console.log('Rendered');
            //document.getElementsByTagName("html")[0].removeAttribute('width');
            //document.getElementsByTagName("html")[0].removeAttribute('height');
        }
    );
});

// TODO: if need checker open WebApp in other tabs
//window.addEventListener('storage', function(e) {console.info(e)});