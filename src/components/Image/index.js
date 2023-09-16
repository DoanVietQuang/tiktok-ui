import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, className, fallBack: currentFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const hanldeErrorImage = () => {
        setFallBack(currentFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={hanldeErrorImage}
        />
    );
});

export default Image;
