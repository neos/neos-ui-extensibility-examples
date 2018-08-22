import Command from '@ckeditor/ckeditor5-core/src/command';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

class ModifyDataCommand extends Command {
    execute(callback) {
        let data = this.editor.getData();
        console.log(data);
        this.editor.setData(data.toUpperCase());
    }
}

export default class ModifyData extends Plugin {
    static get pluginName() {
        return 'modifyDataPlugin';
    }

    init() {
        this.editor.commands.add('modifyData', new ModifyDataCommand(this.editor));
    }
}
