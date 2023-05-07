import React, { useState } from 'react';
import styles from '../../styles/catDialog.module.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const ImageWithSkeleton = ({ imgUrl, name }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    const handleImageLoad = () => {
        setImgLoaded(true);
    };

    return (
        <div className={styles['image-container']}>
            {!imgLoaded && <Skeleton width="100%" height="100%" />}
            
            <img 
                src={imgUrl} 
                alt={name} 
                onLoad={handleImageLoad} 
            />
        </div>
    );
};
