import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import styles from '../../styles/catDialog.module.css';

class CatDialog extends Component {

    handleClose = () => {
        this.props.onClose();
    }

    render() {
        const { open, selectedCat, selectedCatUrl } = this.props;
        return (
            <Dialog onClose={this.handleClose} open={open} className={styles['cat-dialog-box']}>
                <div className={styles['cat-dialog-container']}>
                    <img src={selectedCatUrl} alt={selectedCat.name} />
                    <h2>Name: {selectedCat.name}</h2>
                </div>
            </Dialog>
        )
    }
}

export default CatDialog;