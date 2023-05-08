import React, { 
    Component,
} from 'react';
import Dialog from '@mui/material/Dialog';
import styles from '../../styles/catDialog.module.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ImageWithSkeleton } from './ImageWithSkeleton';

class CatDialog extends Component {

    handleClose = () => {
        this.props.onClose();
        this.setState({ imgLoaded: false });
    } 

    render() {
        const { open, selectedCat } = this.props;

        if (!selectedCat) {
            return null;
        }

        const {
            name = '',
            temperament = '',
            life_span = '',
            origin = '',
            description = '',
            img: {
              url: imgUrl = '',
            } = {},
            weight: {
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

        const stats = {
            affection_level: { value: affectionLevel, str: `Affection Level: ${affectionLevel}` },
            child_friendly: { value: childFriendly, str: `Child Friendly: ${childFriendly}` },
            dog_friendly: { value: dogFriendly, str: `Dog Friendly: ${dogFriendly}` },
            energy_level: { value: energyLevel, str: `Energy Level: ${energyLevel}` },
            intelligence: { value: intelligence, str: `Intelligence: ${intelligence}` },
            social_needs: { value: socialNeeds, str: `Social Needs: ${socialNeeds}` },
            stranger_friendly: { value: strangerFriendly, str: `Stranger Friendly: ${strangerFriendly}` },
            vocalisation: { value: vocalisation, str: `Vocalisation: ${vocalisation}` },
            grooming: { value: grooming, str: `Grooming: ${grooming}` },
            hairless: { value: hairless, str: `Hairless: ${hairless}` },
            hypoallergenic: { value: hypoallergenic, str: `Hypoallergenic: ${hypoallergenic}` },
            health_issues: { value: healthIssues, str: `Health Issues: ${healthIssues}` },
            shedding_level: { value: sheddingLevel, str: `Shedding Level: ${sheddingLevel}` },
        };
          

        return (
            <Dialog onClose={this.handleClose} open={open} className={styles['cat-dialog-box']}
            classes={{ paper: styles['cat-dialog-paper'] }} >
                <div className={styles['cat-dialog-container']}>
                    <SkeletonTheme baseColor="#61dbfb" highlightColor="#444">
                        <div className={styles['content-wrapper']}>
                            <ImageWithSkeleton   
                                imgUrl={imgUrl} 
                                name={name}  
                            />
                            
                            <h2>{name}</h2>

                            <div className={styles['cat-description']}>
                                <h3>Description</h3>
                                <div className={styles['cat-description-details']}>
                                    <div>{description}<br /><br /></div>
                                    <div><strong>Temperance:</strong> {temperament || <Skeleton />}<br /><br /></div>
                                    <div><strong>Life Span:</strong> {life_span} years<br /><br /></div>
                                    <div><strong>Origin:</strong> {origin}<br /><br /></div>
                                    <div><strong>Weight:</strong> {weightMetric} kg</div>
                                </div>
                            </div>
                            <div className={styles['cat-stats-container']}>
                                <h3>Stats</h3>
                                <div className={styles['stats-wrapper']}>
                                    {Object.entries(stats).map(([key, stat]) => (
                                    <div key={key} className={styles['stats']}>
                                        <div className={styles['stats-name']}>{stat.str.split(':')[0]}</div>
                                        <div
                                        className={styles['cat-stats-bar']}
                                        >
                                            <div className={styles['progress-bar']}
                                                style={{
                                            width: `${stat.value * 20}%`,
                                            }}>
                                            </div>
                                        </div>
                                        <div className={styles['max-bar']}>5</div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>
            </Dialog>
        )
    }
}

export default CatDialog;