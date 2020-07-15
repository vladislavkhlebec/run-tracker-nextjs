/** Description
 *  @module SiteNavbar
 *  @author rusinozemtsev
 *  @version 0.0.1
 */

import React, { useState } from 'react'

import './siteNavbar.less'
import { SiteNav, SiteNav_item } from '../siteNav'

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
						<a href='/'>
							<img src='/images/logo.svg' />
						</a>
					</div>
					<div className='menu_logo__mobile menu_logo__mobile__white'>
						<a href='/'>
							<img src='/images/logo_white.svg' />
						</a>
					</div>
				</>
			)}

			<div className='menu'>
				<div className='siteNavbar_line2'>
					<div className='siteNavbar_content'>
						<div className='siteNavbar_contentHeader'>
							<div className='siteNavbar_logo'>
								<a href='/'>
									<img src='/images/logo.svg' />
								</a>
							</div>
						</div>
						{!isSignIn && (
							<div className='siteNavbar_contentMenu'>
								<SiteNav className='mg_b_4x'>
									<SiteNav_item>
										<a href='about'>JOGS</a>
									</SiteNav_item>
									<SiteNav_item>
										<a href='news'>INFO</a>
									</SiteNav_item>
									<SiteNav_item>
										<a href='contacts'>CONTACT US</a>
									</SiteNav_item>
									<SiteNav_item>
										<a href='account'>filters</a>
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
