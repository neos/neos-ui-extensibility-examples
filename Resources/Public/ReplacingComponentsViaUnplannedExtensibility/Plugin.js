(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-css-themr/index.js
  var require_react_css_themr = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-css-themr/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactCssThemr;
    }
  });

  // css-modules:css-modules://WEnnKcvo5ETY2Hlpqu685Dmtbtpm32OZdmSP5vypHrY.css
  var init_ = __esm({
    "css-modules:css-modules://WEnnKcvo5ETY2Hlpqu685Dmtbtpm32OZdmSP5vypHrY.css"() {
    }
  });

  // src/style.module.css
  var style_module_default;
  var init_style_module = __esm({
    "src/style.module.css"() {
      init_();
      style_module_default = { "btn": "oIBp7G_btn" };
    }
  });

  // src/AdjustedSidebar.js
  var import_react, import_react_css_themr, contextTheme, makeAdjustedSidebar, AdjustedSidebar_default;
  var init_AdjustedSidebar = __esm({
    "src/AdjustedSidebar.js"() {
      import_react = __toESM(require_react());
      import_react_css_themr = __toESM(require_react_css_themr());
      init_style_module();
      contextTheme = {
        "@neos-project/react-ui-components/button": style_module_default
      };
      makeAdjustedSidebar = (OriginalLeftSideBar) => {
        return class CustomSidebar extends import_react.PureComponent {
          render() {
            const props = this.props;
            return /* @__PURE__ */ import_react.default.createElement(import_react_css_themr.ThemeProvider, { theme: contextTheme }, /* @__PURE__ */ import_react.default.createElement(OriginalLeftSideBar, { ...props }));
          }
        };
      };
      AdjustedSidebar_default = makeAdjustedSidebar;
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      init_dist();
      init_AdjustedSidebar();
      dist_default("Neos.Neos.Ui.ExtensibilityExamples:ReplacingComponentsViaUnplannedExtensibility", {}, (globalRegistry) => {
        const containerRegistry = globalRegistry.get("containers");
        const OriginalLeftSideBar = containerRegistry.get("LeftSideBar");
        containerRegistry.set("LeftSideBar", AdjustedSidebar_default(OriginalLeftSideBar));
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
