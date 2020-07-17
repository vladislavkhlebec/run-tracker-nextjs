/** Description
 *  @module SiteNavbar
 *  @author rusinozemtsev
 *  @version 0.0.1
 */

import React, { useState } from 'react'

import './siteNavbar.less'
import { SiteNav, SiteNav_item } from '../siteNav'
import Link from 'next/link'

/** SiteNavbar
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function SiteNavbar(props) {
	const { isSignIn } = props
	return (
		<div className='siteNavbar'>
			{!isSignIn && (
				<>
					<input type='checkbox' className='hamburger_toggler' />
					<div className='hamburger'>
						<div></div>
						<span>Меню</span>
					</div>
					<div className='menu_logo__mobile'>
						<Link href='/'>
							<a>
								<img src='/images/logo.svg' />
							</a>
						</Link>
					</div>
					<div className='menu_logo__mobile menu_logo__mobile__white'>
						<Link href='/'>
							<a href='/'>
								<img src='/images/logo_white.svg' />
							</a>
						</Link>
					</div>
				</>
			)}

			<div className='menu'>
				<div className='siteNavbar_line2'>
					<div className='siteNavbar_content'>
						<div className='siteNavbar_contentHeader'>
							<div className='siteNavbar_logo'>
								<Link href='/'>
									<a>
										<img src='/images/logo.svg' />
									</a>
								</Link>
							</div>
						</div>
						{!isSignIn && (
							<div className='siteNavbar_contentMenu'>
								<SiteNav className='mg_b_4x'>
									<SiteNav_item>
										<Link href='/jogs'>
											<a>JOGS</a>
										</Link>
									</SiteNav_item>
									<SiteNav_item>
										<Link href='/info'>
											<a>INFO</a>
										</Link>
									</SiteNav_item>
									<SiteNav_item>
										<Link href='/contact-us'>
											<a>CONTACT US</a>
										</Link>
									</SiteNav_item>
									<SiteNav_item>
										<Link href='/account'>
											<a>filters</a>
										</Link>
									</SiteNav_item>
								</SiteNav>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='mobile_navbarHolder' />
		</div>
	)
}
