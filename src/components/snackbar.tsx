import React from 'react';
import { connect } from 'react-redux';
import { Snackbar} from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import * as I from './../interfaces';
import {mapStateToPropsSnackbar as mapStateToProps} from '../store/mapStateToProps';
import {mapDispatchToProps} from '../store/mapDispatchToProps';

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}
  
type P = I.PropsStateSnackbar & I.PropsDispaich;
class Snackbar_i extends React.Component<P> {	
	render() {	
        return(
            <Snackbar
                open={this.props.open}
                autoHideDuration={5000}
                onClose={() => this.props.onSnackbarClose()}
                message={this.props.message}
                TransitionComponent={SlideTransition}
            />	
    	)
    }
}

const MySnackbar = connect(mapStateToProps(), mapDispatchToProps)(Snackbar_i);
export default MySnackbar;