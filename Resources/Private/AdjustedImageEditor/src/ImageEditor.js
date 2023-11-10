import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default function makeCustomImageEditor(DefaultImageEditor) {
    return class MyImageEditor extends PureComponent {

        static propTypes = {
            commit: PropTypes.func.isRequired,
        };

        handleChangeColor = newColor => {
            this.props.commit(newColor.hex);
        };

        render() {
            return (<div>
                <DefaultImageEditor {...this.props} />
                <b>Something below</b>
            </div>);
        }
    }

}
