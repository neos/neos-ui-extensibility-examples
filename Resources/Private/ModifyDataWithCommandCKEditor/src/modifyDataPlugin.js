import {Command, Plugin} from 'ckeditor5-exports';

class ModifyDataCommand extends Command {
    execute(callback) {
        let data = this.editor.getData();
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
