import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <img src={images.logo} alt="Tik-tok logo" />
            <div className={cx('search')}>
                <Tippy render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        Kết quả tìm kiếm
                    </div>
                )}
                >
                    <input type="text"
                        placeholder='Tìm kiếm'
                        spellCheck={false}
                    />

                </Tippy>
                <button className={cx('clear')}>
                    {<FontAwesomeIcon icon={faCircleXmark} />}
                </button>
                {<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    {<FontAwesomeIcon icon={faMagnifyingGlass} />}
                </button>
            </div>
            <div className={cx('action')}></div>
        </div>
    </header>;
}

export default Header