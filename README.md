# Extensibility examples for Neos UI

See examples in "Resources/Private" and Configuration/Settings.yaml.

To see the API, check [UI Extensibility Docs](https://neos.readthedocs.io/en/stable/ExtendingNeos/UiExtensibility.html).

## Installation

```
cd Packages/Application/
git clone git@github.com:neos/neos-ui-extensibility-examples.git Neos.Neos.Ui.ExtensibilityExamples
cd ../../
./flow flow:package:rescan
```

# How to build the examples

**Currently, the examples do only work with yarn and not with NPM install.**

- Go to `Resources/Private/[ExampleName]`
- (optional): Use [NVM](https://github.com/creationix/nvm) to ensure you're using the right node.js version: `nvm install`
- Install yarn globally `npm install -g yarn`
- In the folder `Resources/Private/[ExampleName]`, run `yarn`.
- Then, use `npm run build` or `npm run watch`.

# Examples

## CustomStylingForEditor

- Adds custom button for CKEditor 5, to add a custom CSS style

## CustomEditor

- adds custom editor for inspector

## ColorPickerEditor

- a little more advanced example for a color picker editor.

## ReplacingComponentsViaUnplannedExtensibility

- showcasing how to add a custom theme
