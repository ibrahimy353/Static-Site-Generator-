"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function RootLayout(_a) {
    var children = _a.children;
    var header = (React.createElement("header", null,
        React.createElement("div", null,
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("h1", null, " Ibrahim SSG")),
            React.createElement("p", null, "Welcome to my static site generator"),
            React.createElement("br", null))));
    var footer = (React.createElement("footer", null,
        React.createElement("div", null,
            React.createElement("br", null),
            React.createElement("h3", null, "Developed by Ibra"))));
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null),
        React.createElement("body", null,
            header,
            children,
            footer)));
}
exports["default"] = RootLayout;
