# Extensibility examples for Neos UI

See examples in "Resources/Private" and Configuration/Settings.yaml.

To see the API, check ["EXTENSIBILITY.md" in the Neos.Neos.Ui Git Repository](https://github.com/neos/neos-ui/blob/master/EXTENSIBILITY.md).

## Installation

```
cd Packages/Application/
git clone git@github.com:neos/neos-ui-extensibility-examples.git Neos.Neos.Ui.ExtensibilityExamples
cd ../../
./flow flow:package:rescan
```

# How to build the examples

**Currently, the examples do only work with yarn and not with NPM install.**

- (optional): Use [NVM](https://github.com/creationix/nvm) to ensure you're using the right node.js version: `nvm install`
- Install yarn globally `npm install -g yarn`
- Go to `Resources/Private/[ExampleName]` and run `yarn`.

# Examples

## CustomStylingForEditor

- Adds custom button for CKEditor, to add a custom CSS style

## CustomEditor

- adds custom editor for inspector

## ColorPickerEditor

- a little more advanced example for a color picker editor.

## ReplacingComponentsViaUnplannedExtensibility

- showcasing how to add a custom theme
