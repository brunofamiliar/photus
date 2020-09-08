"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Photus = factory());
})(void 0, function () {
  'use strict';

  var Options = /*#__PURE__*/function (_Error) {
    _inherits(Options, _Error);

    var _super = _createSuper(Options);

    function Options() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          message = _ref.message,
          type = _ref.type,
          errors = _ref.errors;

      _classCallCheck(this, Options);

      _this = _super.call(this);
      _this.name = 'OptionsPromiseError';
      _this.message = message;
      _this.type = type;
      _this.errors = errors;
      return _this;
    }

    return Options;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  function Grid(arrayImages) {
    if (!Array.isArray(arrayImages)) return null;
    var section = document.createElement('section');
    section.style = 'teste';
    arrayImages.forEach(function (item) {
      section.appendChild(item);
    });
    return section;
  }

  function selectLayout(_ref2, images) {
    var type = _ref2.type;

    switch (type) {
      case 'grid':
        return Grid(images);
    }
  }

  function loadImages(_ref3) {
    var images = _ref3.images;
    if (images === null || images === 'undefined') return null;
    var arrayImages = images.map(function (_ref4) {
      var path = _ref4.path,
          name = _ref4.name;
      var img = document.createElement('img');
      img.src = path;
      img.alt = name;
      return img;
    });
    return arrayImages;
  }

  function photus(options) {
    return Promise.resolve(options).then(validateOptions).then(loadImages).then(function (images) {
      return selectLayout(options, images);
    }).then(appendContentRoot);
  }

  function validateOptions(options) {
    var optionsTypeOf = _typeof(options);

    if (optionsTypeOf === 'object' || options === null) return options;
    throw new Options({
      message: 'Erro ao inicializar o objeto photus.',
      type: 'validation_options_error',
      errors: [{
        message: 'O construtor é facultativo e só pode ser inicializado utilizando um Object',
        service: 'options_valitation'
      }]
    });
  } // injecting content into the root tag


  function appendContentRoot(content) {
    var bootstrap = document.getElementById('pht__endpoint');
    bootstrap.appendChild(content);
  }

  return photus;
});