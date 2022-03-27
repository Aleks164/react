(self.webpackChunktest = self.webpackChunktest || []).push([
  [179],
  {
    "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/index.css":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"
            ),
          _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"
            ),
          _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
            __webpack_require__.n(
              _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
            ),
          _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/getUrl.js"
            ),
          _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
            __webpack_require__.n(
              _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
            ),
          _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            "./src/assets/cat.jpg"
          ),
          ___CSS_LOADER_EXPORT___ =
            _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
              _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
            ),
          ___CSS_LOADER_URL_REPLACEMENT_0___ =
            _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
              _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_3__
            );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "body {\n  background-color: rgb(189 132 132);\n}\n\n.image {\n  background-image: url(" +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ");\n  width: 150px;\n  height: 150px;\n  background-size: cover;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/index.css"],
            names: [],
            mappings:
              "AAAA;EACE,kCAAkC;AACpC;;AAEA;EACE,yDAAyC;EACzC,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB",
            sourcesContent: [
              'body {\n  background-color: rgb(189 132 132);\n}\n\n.image {\n  background-image: url("./assets/cat.jpg");\n  width: 150px;\n  height: 150px;\n  background-size: cover;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./.storybook/preview.js-generated-config-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          parameters: () => parameters,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        esm = __webpack_require__(
          "./node_modules/@storybook/client-logger/dist/esm/index.js"
        ),
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
          case "argTypes":
            return esm.kg.warn(
              "Invalid args/argTypes in config, ignoring.",
              JSON.stringify(value)
            );
          case "decorators":
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case "parameters":
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case "render":
            return (0, ClientApi.$P)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./generated-stories-entry.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"
            ),
          ],
          module,
          !1
        );
    },
    "./src/App.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          default: () => App_stories,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var react = __webpack_require__("./node_modules/react/index.js"),
        slicedToArray = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
        ),
        jsx_runtime =
          (__webpack_require__("./node_modules/core-js/modules/web.timers.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        image_Image = function Image(props) {
          var _useState = (0, react.useState)(props.floating),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            floating = _useState2[0],
            setFloating = _useState2[1];
          return (0, jsx_runtime.jsx)("div", {
            onClick: function clickChange(event) {
              setFloating("right" === floating ? "left" : "right"),
                (event.target.style.float = floating);
            },
            style: { float: floating },
            className: "image",
          });
        };
      image_Image.displayName = "Image";
      try {
        (image_Image.displayName = "Image"),
          (image_Image.__docgenInfo = {
            description: "",
            displayName: "Image",
            props: {
              floating: {
                defaultValue: null,
                description: "",
                name: "floating",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"left"' }, { value: '"right"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/image/image.tsx#Image"] = {
              docgenInfo: image_Image.__docgenInfo,
              name: "Image",
              path: "src/components/image/image.tsx#Image",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Image.displayName = "Image"),
          (Image.__docgenInfo = {
            description: "",
            displayName: "Image",
            props: {
              floating: {
                defaultValue: null,
                description: "",
                name: "floating",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"left"' }, { value: '"right"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/image/index.tsx#Image"] = {
              docgenInfo: Image.__docgenInfo,
              name: "Image",
              path: "src/components/image/index.tsx#Image",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var paragraph_Paragraph = function Paragraph(_ref) {
        var textP = _ref.textP;
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)("p", { children: textP }),
            (0, jsx_runtime.jsx)("b", { children: textP }),
            (0, jsx_runtime.jsx)("br", {}),
            (0, jsx_runtime.jsx)("i", { children: textP }),
          ],
        });
      };
      try {
        (paragraph_Paragraph.displayName = "Paragraph"),
          (paragraph_Paragraph.__docgenInfo = {
            description: "",
            displayName: "Paragraph",
            props: {
              textP: {
                defaultValue: null,
                description: "",
                name: "textP",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/paragraph/paragraph.tsx#Paragraph"
            ] = {
              docgenInfo: paragraph_Paragraph.__docgenInfo,
              name: "Paragraph",
              path: "src/components/paragraph/paragraph.tsx#Paragraph",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Paragraph.displayName = "Paragraph"),
          (Paragraph.__docgenInfo = {
            description: "",
            displayName: "Paragraph",
            props: {
              textP: {
                defaultValue: null,
                description: "",
                name: "textP",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/paragraph/index.tsx#Paragraph"
            ] = {
              docgenInfo: Paragraph.__docgenInfo,
              name: "Paragraph",
              path: "src/components/paragraph/index.tsx#Paragraph",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var h1Style = {
          border: "2px solid black",
          backgroundColor: "rgb(176 159 233)",
          textAlign: "center",
          width: "230px",
        },
        Title = function Title() {
          var _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            value = _useState2[0],
            setValue = _useState2[1],
            _useState3 = (0, react.useState)(!1),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            hover = _useState4[0],
            setHover = _useState4[1],
            hoverChange = function hoverChange(event) {
              (event.target.style.backgroundColor = hover
                ? "rgb(176 159 233)"
                : "red"),
                setHover(!hover);
            };
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)("h1", {
                style: h1Style,
                onClick: function handleChange() {
                  setValue(!value);
                },
                onMouseEnter: hoverChange,
                onMouseLeave: hoverChange,
                children: "Click on me",
              }),
              value &&
                (0, jsx_runtime.jsxs)("div", {
                  style: h1Style,
                  children: [
                    (0, jsx_runtime.jsx)("h1", { children: "Hidden content1" }),
                    (0, jsx_runtime.jsx)("hr", {}),
                    (0, jsx_runtime.jsx)("h1", { children: "Hidden content2" }),
                    (0, jsx_runtime.jsx)("hr", {}),
                    (0, jsx_runtime.jsx)("h1", { children: "Hidden content3" }),
                  ],
                }),
            ],
          });
        },
        Hr = function Hr() {
          return (0, jsx_runtime.jsx)("hr", { className: "hr" });
        };
      function HRenderer(_ref) {
        var hNumber = _ref.hNumber,
          text = _ref.text;
        return (function hn() {
          switch (hNumber) {
            case "h1":
            default:
              return (0, jsx_runtime.jsx)("h1", { children: text });
            case "h2":
              return (0, jsx_runtime.jsx)("h2", { children: text });
            case "h3":
              return (0, jsx_runtime.jsx)("h3", { children: text });
            case "h4":
              return (0, jsx_runtime.jsx)("h4", { children: text });
            case "h5":
              return (0, jsx_runtime.jsx)("h5", { children: text });
            case "h6":
              return (0, jsx_runtime.jsx)("h6", { children: text });
          }
        })();
      }
      Hr.displayName = "Hr";
      try {
        (HRenderer.displayName = "HRenderer"),
          (HRenderer.__docgenInfo = {
            description: "",
            displayName: "HRenderer",
            props: {
              hNumber: {
                defaultValue: null,
                description: "",
                name: "hNumber",
                required: !0,
                type: { name: "ValueType" },
              },
              text: {
                defaultValue: null,
                description: "",
                name: "text",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/htags/HRenderer.tsx#HRenderer"
            ] = {
              docgenInfo: HRenderer.__docgenInfo,
              name: "HRenderer",
              path: "src/components/htags/HRenderer.tsx#HRenderer",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function HSelect(props) {
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)("label", {
              htmlFor: "h-select",
              children: 'Выберите тег "h" ',
            }),
            (0, jsx_runtime.jsxs)("select", {
              onChange: props.handleChange,
              name: "h-source",
              "data-testid": "h-select",
              defaultValue: "default",
              children: [
                (0, jsx_runtime.jsx)("option", {
                  value: "default",
                  children: "h1",
                }),
                (0, jsx_runtime.jsx)("option", { value: "h2", children: "h2" }),
                (0, jsx_runtime.jsx)("option", { value: "h3", children: "h3" }),
                (0, jsx_runtime.jsx)("option", { value: "h4", children: "h4" }),
                (0, jsx_runtime.jsx)("option", { value: "h5", children: "h5" }),
                (0, jsx_runtime.jsx)("option", { value: "h6", children: "h6" }),
              ],
            }),
          ],
        });
      }
      try {
        (HSelect.displayName = "HSelect"),
          (HSelect.__docgenInfo = {
            description: "",
            displayName: "HSelect",
            props: {
              handleChange: {
                defaultValue: null,
                description: "",
                name: "handleChange",
                required: !0,
                type: {
                  name: "(event: MouseEvent<HTMLDivElement, MouseEvent>) => void",
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/htags/HSelect.tsx#HSelect"
            ] = {
              docgenInfo: HSelect.__docgenInfo,
              name: "HSelect",
              path: "src/components/htags/HSelect.tsx#HSelect",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var MainHSelector_HSelector = function HSelector(prop) {
        var _useState = (0, react.useState)(prop.value),
          _useState2 = (0, slicedToArray.Z)(_useState, 2),
          hSelect = _useState2[0],
          setHSelect = _useState2[1];
        return (
          (0, react.useEffect)(
            function () {
              setHSelect(prop.value);
            },
            [prop.value]
          ),
          (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(HRenderer, {
                hNumber: hSelect,
                text: "Some text in " + hSelect + " element",
              }),
              (0, jsx_runtime.jsx)(HSelect, {
                handleChange: function handleChange(event) {
                  setHSelect(event.target.value);
                },
              }),
            ],
          })
        );
      };
      try {
        (MainHSelector_HSelector.displayName = "HSelector"),
          (MainHSelector_HSelector.__docgenInfo = {
            description: "",
            displayName: "HSelector",
            props: {
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !0,
                type: { name: "ValueType" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/htags/MainHSelector.tsx#HSelector"
            ] = {
              docgenInfo: MainHSelector_HSelector.__docgenInfo,
              name: "HSelector",
              path: "src/components/htags/MainHSelector.tsx#HSelector",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (HSelector.displayName = "HSelector"),
          (HSelector.__docgenInfo = {
            description: "",
            displayName: "HSelector",
            props: {
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !0,
                type: { name: "ValueType" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/htags/index.tsx#HSelector"
            ] = {
              docgenInfo: HSelector.__docgenInfo,
              name: "HSelector",
              path: "src/components/htags/index.tsx#HSelector",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var textP =
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempora repellendus ea commodi repellat accusamus nostrum ipsam repudiandae odio? Dolore libero quisquam blanditiis officiis ipsa nobis ullam quod, accusamus quia.",
        DefultPage = function DefultPage() {
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(Title, {}),
              (0, jsx_runtime.jsx)(Hr, {}),
              (0, jsx_runtime.jsx)(MainHSelector_HSelector, { value: "h1" }),
              (0, jsx_runtime.jsx)(Hr, {}),
              (0, jsx_runtime.jsx)(paragraph_Paragraph, { textP }),
              (0, jsx_runtime.jsx)(Hr, {}),
              (0, jsx_runtime.jsx)(image_Image, { floating: "left" }),
            ],
          });
        },
        ConditionRender_ConditionRender = function ConditionRender(value) {
          switch (value[0]) {
            case "Image":
              var checkFloadting = value[1];
              return (
                "left" !== value[1] &&
                  "right" !== value[1] &&
                  (checkFloadting = "left"),
                (0, jsx_runtime.jsx)(image_Image, { floating: checkFloadting })
              );
            case "Paragraph":
              return (0, jsx_runtime.jsx)(paragraph_Paragraph, { textP });
            case "Title":
              return (0, jsx_runtime.jsx)(Title, {});
            case "Hr":
              return (0, jsx_runtime.jsx)(Hr, {});
            case "HSelector":
              return (0, jsx_runtime.jsx)(MainHSelector_HSelector, {
                value: value[1],
              });
            default:
              return (0, jsx_runtime.jsx)(DefultPage, {});
          }
        };
      try {
        (ConditionRender_ConditionRender.displayName = "ConditionRender"),
          (ConditionRender_ConditionRender.__docgenInfo = {
            description: "",
            displayName: "ConditionRender",
            props: {
              0: {
                defaultValue: null,
                description: "",
                name: "0",
                required: !0,
                type: { name: "string" },
              },
              1: {
                defaultValue: null,
                description: "",
                name: "1",
                required: !0,
                type: { name: "string | null | undefined" },
              },
              length: {
                defaultValue: null,
                description: "",
                name: "length",
                required: !0,
                type: { name: "2" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/ConditionRender/ConditionRender.tsx#ConditionRender"
            ] = {
              docgenInfo: ConditionRender_ConditionRender.__docgenInfo,
              name: "ConditionRender",
              path: "src/components/ConditionRender/ConditionRender.tsx#ConditionRender",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ConditionRender.displayName = "ConditionRender"),
          (ConditionRender.__docgenInfo = {
            description: "",
            displayName: "ConditionRender",
            props: {
              0: {
                defaultValue: null,
                description: "",
                name: "0",
                required: !0,
                type: { name: "string" },
              },
              1: {
                defaultValue: null,
                description: "",
                name: "1",
                required: !0,
                type: { name: "string | null | undefined" },
              },
              length: {
                defaultValue: null,
                description: "",
                name: "length",
                required: !0,
                type: { name: "2" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/ConditionRender/index.tsx#ConditionRender"
            ] = {
              docgenInfo: ConditionRender.__docgenInfo,
              name: "ConditionRender",
              path: "src/components/ConditionRender/index.tsx#ConditionRender",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var App = function App(_ref) {
        var isLokiTest = _ref.isLokiTest,
          sleepMs = _ref.sleepMs,
          _useState = (0, react.useState)(["default", ""]),
          _useState2 = (0, slicedToArray.Z)(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];
        return (
          (0, react.useEffect)(function () {
            isLokiTest ||
              setTimeout(function () {
                var propsCompPrompt,
                  componentNamePrompt = window.prompt(
                    "Type Title, Hr, HSelector, Paragraph or Image"
                  );
                "HSelector" === componentNamePrompt &&
                  (propsCompPrompt = window.prompt(
                    "Type h1, h2, h3, h4, h5 or h6"
                  )),
                  "Image" === componentNamePrompt &&
                    (propsCompPrompt = window.prompt("Type left or right")),
                  "" !== componentNamePrompt &&
                    null !== componentNamePrompt &&
                    setValue([componentNamePrompt, propsCompPrompt]);
              }, sleepMs);
          }),
          (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: ConditionRender_ConditionRender(value),
          })
        );
      };
      try {
        (App.displayName = "App"),
          (App.__docgenInfo = {
            description: "",
            displayName: "App",
            props: {
              isLokiTest: {
                defaultValue: null,
                description: "",
                name: "isLokiTest",
                required: !0,
                type: { name: "boolean" },
              },
              sleepMs: {
                defaultValue: null,
                description: "",
                name: "sleepMs",
                required: !0,
                type: { name: "number" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/App.tsx#App"] = {
              docgenInfo: App.__docgenInfo,
              name: "App",
              path: "src/App.tsx#App",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        cjs_ruleSet_1_rules_7_use_1_src = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/index.css"
        ),
        options = { insert: "head", singleton: !1 };
      injectStylesIntoStyleTag_default()(
        cjs_ruleSet_1_rules_7_use_1_src.Z,
        options
      );
      cjs_ruleSet_1_rules_7_use_1_src.Z.locals;
      const App_stories = {
        title: "App",
        component: App,
        argTypes: {
          isLokiTest: { options: [!0, !1], control: { type: "radio" } },
        },
      };
      var Primary = function Primary() {
        return (0, jsx_runtime.jsx)(App, { isLokiTest: !1, sleepMs: 2e3 });
      };
      (Primary.displayName = "Primary"),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source: "() => <App isLokiTest={false} sleepMs={2000} />",
            },
          },
          Primary.parameters
        ));
    },
    "./storybook-init-framework-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = { "./App.stories.tsx": "./src/App.stories.tsx" };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$");
      },
    "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":
      (module) => {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        (webpackEmptyContext.keys = () => []),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (webpackEmptyContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),
          (module.exports = webpackEmptyContext);
      },
    "./src/assets/cat.jpg": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      module.exports = __webpack_require__.p + "static/media/cat.68524e66.jpg";
    },
    "?4f7e": () => {},
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [77],
      () => (
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_exec__("./storybook-init-framework-entry.js"),
        __webpack_exec__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"
        ),
        __webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),
        __webpack_exec__("./generated-stories-entry.js")
      )
    );
    __webpack_require__.O();
  },
]);
