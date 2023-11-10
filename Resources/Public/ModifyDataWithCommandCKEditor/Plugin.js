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
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

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

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js
  var require_plow_js = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().plow;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js
  var require_ckeditor5_exports = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().CkEditor5;
    }
  });

  // src/modifyDataPlugin.js
  var import_ckeditor5_exports, ModifyDataCommand, ModifyData;
  var init_modifyDataPlugin = __esm({
    "src/modifyDataPlugin.js"() {
      import_ckeditor5_exports = __toESM(require_ckeditor5_exports());
      ModifyDataCommand = class extends import_ckeditor5_exports.Command {
        execute(callback) {
          let data = this.editor.getData();
          this.editor.setData(data.toUpperCase());
        }
      };
      ModifyData = class extends import_ckeditor5_exports.Plugin {
        static get pluginName() {
          return "modifyDataPlugin";
        }
        init() {
          this.editor.commands.add("modifyData", new ModifyDataCommand(this.editor));
        }
      };
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js
  var require_neos_ui_ckeditor5_bindings = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().CkEditorApi;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // src/ModifyDataButton.js
  var import_react, import_prop_types, import_plow_js, import_react_ui_components, import_neos_ui_decorators, import_neos_ui_ckeditor5_bindings, import_react_redux, import_neos_ui_redux_store, ModifyDataButton;
  var init_ModifyDataButton = __esm({
    "src/ModifyDataButton.js"() {
      import_react = __toESM(require_react());
      import_prop_types = __toESM(require_prop_types());
      import_plow_js = __toESM(require_plow_js());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      import_neos_ui_ckeditor5_bindings = __toESM(require_neos_ui_ckeditor5_bindings());
      import_react_redux = __toESM(require_react_redux());
      import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
      ModifyDataButton = class extends import_react.PureComponent {
        constructor() {
          super(...arguments);
          this.handleClick = () => {
            (0, import_neos_ui_ckeditor5_bindings.executeCommand)("modifyData");
          };
        }
        render() {
          const props = {
            onClick: this.handleClick,
            isActive: Boolean(this.props.isActive),
            title: this.props.i18nRegistry.translate(this.props.tooltip),
            icon: this.props.icon
          };
          return /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.IconButton, { ...props });
        }
      };
      ModifyDataButton.propTypes = {
        i18nRegistry: import_prop_types.default.object,
        tooltip: import_prop_types.default.string
      };
      ModifyDataButton = __decorateClass([
        (0, import_react_redux.connect)((0, import_plow_js.$transform)({
          fusionPath: (0, import_plow_js.$get)("cr.nodes.focused.fusionPath")
        }), {
          persistChanges: import_neos_ui_redux_store.actions.Changes.persistChanges,
          commenceNodeCreation: import_neos_ui_redux_store.actions.CR.Nodes.commenceCreation
        }),
        (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
          i18nRegistry: globalRegistry.get("i18n")
        }))
      ], ModifyDataButton);
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var import_plow_js2, addPlugin;
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      init_dist();
      import_plow_js2 = __toESM(require_plow_js());
      init_modifyDataPlugin();
      init_ModifyDataButton();
      addPlugin = (Plugin2, isEnabled) => (ckEditorConfiguration, options) => {
        if (!isEnabled || isEnabled(options.editorOptions, options)) {
          ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
          return (0, import_plow_js2.$add)("plugins", Plugin2, ckEditorConfiguration);
        }
        return ckEditorConfiguration;
      };
      dist_default("Neos.Neos.Ui.ExtensibilityExamples:ModifyDataWithCommandCKEditor", {}, (globalRegistry) => {
        const richtextToolbar = globalRegistry.get("ckEditor5").get("richtextToolbar");
        richtextToolbar.set("modifyDataPlugin", {
          commandName: "modifyDataCommand",
          isActive: (0, import_plow_js2.$get)("modifyDataCommand"),
          isVisible: (0, import_plow_js2.$get)(["formatting", "Neos.Neos.Ui.ExtensibilityExamples:modifyDataCommand"]),
          component: ModifyDataButton,
          icon: "search-plus",
          tooltip: "Create an example command"
        }, "before strong");
        const config = globalRegistry.get("ckEditor5").get("config");
        config.set("modifyDataPlugin", addPlugin(ModifyData));
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
