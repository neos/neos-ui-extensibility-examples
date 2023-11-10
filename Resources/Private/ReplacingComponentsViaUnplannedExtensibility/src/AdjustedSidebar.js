import React, {PureComponent} from 'react';
import { ThemeProvider } from '@friendsofreactjs/react-css-themr';
import style from './style.module.css';

const contextTheme = {
  '@neos-project/react-ui-components/button': style
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
