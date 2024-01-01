//Library import
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
//Local import
import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItems';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => { setSearchResult([]) }, 2000)
    }
        , [])



    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <img src={images.logo} alt="Tik-tok logo" />
            <div className={cx('search')}>
                <Tippy
                    interactive
                    placement="bottom"
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>
                                    Accounts
                                </h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
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