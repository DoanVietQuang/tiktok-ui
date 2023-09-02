import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avartar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ca82fa3f0dd53dfd1e63834cbb3624fa~c5_100x100.jpeg?x-expires=1693670400&x-signature=PoRhYIpJfu5YzCRwmQxZay5q%2FQo%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Doan Viet Quang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>doanvietquangaaa</span>
            </div>
        </div>
    );
}

export default AccountItem;
