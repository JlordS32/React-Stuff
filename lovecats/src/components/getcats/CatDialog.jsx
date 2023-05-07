import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import styles from '../../styles/catDialog.module.css';

class CatDialog extends Component {

    handleClose = () => {
        this.props.onClose();
    }

    render() {
        const { open, selectedCat, selectedCatUrl } = this.props;

        const {
            id = '',
            name = '',
            temperament = '',
            life_span = '',
            origin = '',
            description = '',
            img: {
              url: imgUrl = '',
              height: imgHeight = 0,
              width: imgWidth = 0,
            } = {},
            weight: {
              imperial: weightImperial = '',
              metric: weightMetric = '',
            } = {},
            affection_level: affectionLevel = 0,
            child_friendly: childFriendly = 0,
            dog_friendly: dogFriendly = 0,
            energy_level: energyLevel = 0,
            intelligence = 0,
            social_needs: socialNeeds = 0,
            stranger_friendly: strangerFriendly = 0,
            vocalisation = 0,
            grooming = 0,
            hairless = 0,
            hypoallergenic = 0,
            health_issues: healthIssues = 0,
            shedding_level: sheddingLevel = 0,
        } = selectedCat || {};
        
        console.log(selectedCat);
          
        return (
            <Dialog onClose={this.handleClose} open={open} className={styles['cat-dialog-box']}
            classes={{ paper: styles['cat-dialog-paper'] }} >
                <div className={styles['cat-dialog-container']}>
                    <div className={styles['content-wrapper']}>
                        <img src={imgUrl} alt={name} />
                        <h2>{name}</h2>
                        <div className={styles['cat-description']}>
                            {description}
                        </div>
                        <div className={styles['cat-details']}>
                            <div>Temperance: {temperament}</div>
                            <div>Life Span: {life_span}</div>
                            <div>Origin: {origin}</div>
                            <div>Weight: {weightMetric}</div>
                        </div>
                        <h2>Stats</h2>
                        <div className={styles['cat-stats']}>
                            <div>
                                Affection:
                            </div>
                            <div>
                                Child Affinity:
                            </div>
                            <div>
                                Dog Affinity:
                            </div>
                            <div>
                                Energy:
                            </div>
                            <div>
                                Intelligence:
                            </div>
                            <div>
                                Social:
                            </div>
                            <div>
                                Social:
                            </div>
                            <div>
                                Stranger Affinity:
                            </div>
                            <div>
                                Vocalisation:
                            </div>
                            <div>
                                Grooming:
                            </div>
                            <div>
                                Hypo Allergic:
                            </div>
                            <div>
                                Shredding:
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
}

export default CatDialog;