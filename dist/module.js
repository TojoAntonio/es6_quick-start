(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    return a + b;
};

var square = function square(b) {
    return b * b;
};

var variable = 8;

var MyClass = function () {
    function MyClass(informations) {
        _classCallCheck(this, MyClass);

        this.name = informations.name;
        this.phoneNo = informations.phoneNo;
    }

    _createClass(MyClass, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getPhoneNo",
        value: function getPhoneNo() {
            return this.phoneNo;
        }
    }]);

    return MyClass;
}();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

// 25
console.log("square(5) = " + (0, _import.square)(5));

var info = {
    name: 'Tojo Antonio',
    phoneNo: '+230 58 200 206'
};

var x = new _import.MyClass(info);

//My name is Tojo Antonio
console.log("My name is " + x.getName());

//Myphone number is 59 200 206
console.log("My phone number is " + x.getPhoneNo());

},{"./import":1}]},{},[2]);
