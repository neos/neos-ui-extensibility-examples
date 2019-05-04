import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

export default class Example extends Plugin {
    static get pluginName() {
        return 'exampleExtension';
    }
    init() {
        // we allow to mark arbitrary texts with the attribute "exampleAttribute" in the CKEditor Model.
        this.editor.model.schema.extend('$text', {allowAttributes: 'exampleAttribute'});

        // then, we define how this attribute in the model should be translated to the view, i.e. by setting a span with a
        // certain class; and a certain CSS style.
        // Reference: https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_conversion_conversion-Conversion.html#function-attributeToElement
        const config = {
            // the name of the model must match the "allowAttribute" from above.
            model: 'exampleAttribute',
            view: {
                name: 'span',
                classes: 'example-class',

                // here, we additionally set a CSS style property inline. In the real world, you probably would
                // not do this, but instead style the class using your CSS.
                //
                // NOTE: when removing the style definition here, the style tags are automatically removed when a
                //       <span class="example-class" style="..."></span> is encountered.
                styles: {
                    'background-color': 'green',
                }
            }
        };
        this.editor.conversion.attributeToElement(config);

        // Finally, we need to add a new command to apply this attribute.
        // "highlightCommand" is the identifier of the command now
        this.editor.commands.add('highlightCommand', new AttributeCommand(this.editor, 'exampleAttribute'));
    }
}
