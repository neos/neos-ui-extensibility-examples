import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-css-themr';

const contextTheme = {
  '@neos-project/react-ui-components/button': require('./button-extension.css')
};


const makeAdjustedSidebar = OriginalLeftSideBar => {
    return class CustomSidebar extends PureComponent {
        render() {
            const props = this.props;
            return (
                <ThemeProvider theme={contextTheme}>
                    <OriginalLeftSideBar {...props}/>
                </ThemeProvider>
            );
        }
    }
};

export default makeAdjustedSidebar;
