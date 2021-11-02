import React from 'react'
import { Navbar } from '../../common'

import './Header.css'

function Header() {
    return (
        <section className='header'>
            <section className='header-top'>
                <section className='header-top-logo'>
                    <a href='/' className='header-logo'>
                        Logo
                    </a>
                </section>
                <section className='header-top-navbar'>
                    <section className='header-top-navigation'>
                        <Navbar />
                    </section>
                    <hr className='header-top-separator' />
                </section>
            </section>
            <section className='header-bottom'>
                <section className='header-bottom-phone'>
                    99999999999
                </section>
                <section className='header-bottom-email'>
                    shop@email.com
                </section>

            </section>

        </section>
    )
}

export default Header