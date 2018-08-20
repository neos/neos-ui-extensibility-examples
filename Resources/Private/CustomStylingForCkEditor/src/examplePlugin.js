import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

export default class Example extends Plugin {
    static get pluginName() {
        return 'exampleExtension';
    }
    init() {
        this.editor.model.schema.extend('$text', {allowAttributes: 'exampleAttribute'});
        const config = {
            model: 'exampleAttribute',
            view: {
                name: 'span',
                classes: 'example-class',
                styles: {
                    'background-color': 'green',
                }
            }
        };
        this.editor.conversion.attributeToElement(config);
        this.editor.commands.add('exampleCommand', new AttributeCommand(this.editor, 'exampleAttribute')); // "exampleCommand" is the identifier of the command now
    }
}
