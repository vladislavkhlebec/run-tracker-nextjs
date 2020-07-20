/** Description
 *  @module SiteNavbar
 *  @version 0.0.1
 */

import React, { useState } from 'react'

import './siteNavbar.less'
import { SiteNav, SiteNav_item } from '../siteNav'
import { connect } from 'react-redux'
import Link from 'next/link'
import { setIsActiveFilter } from '../../store/filters/actions'
import ActiveLink from '../ActiveLink'

/** SiteNavbar
 *  @param props
 *  @param props.children
 *  @return {any}
 */

const SiteNavbar = props => {
	const { isSignIn, isActive, _setIsActiveFilter } = props
	return (
		<div className='siteNavbar'>
			<div className='menu_logo__mobile'>
				<Link href='/'>
					<a>
						<img src='/images/logo.svg' />
					</a>
				</Link>
			</div>
			<div className='siteNavbar_filterButtonContainer siteNavbar_filterButtonContainer__mobile'>
				<button
					className='siteNavbar_filterButton'
					onClick={() => {
						_setIsActiveFilter(!isActive)
					}}
				>
					<img src={`/images/icons/${isActive ? 'filter-active.svg' : 'filter.svg'}`} alt='' />
				</button>
			</div>
			{!isSignIn && (
				<>
					<input type='checkbox' className='hamburger_toggler' />
					<div className='hamburger'>
						<div></div>
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
								<img src='/images/icons/logo.png' />
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
										<ActiveLink activeClassName='active' href='/jogs'>
											<a>JOGS</a>
										</ActiveLink>
									</SiteNav_item>
									<SiteNav_item>
										<ActiveLink activeClassName='active' href='/info'>
											<a>INFO</a>
										</ActiveLink>
									</SiteNav_item>
									<SiteNav_item>
										<ActiveLink activeClassName='active' href='/contact-us'>
											<a>CONTACT US</a>
										</ActiveLink>
									</SiteNav_item>
									<SiteNav_item>
										<div className='siteNavbar_filterButtonContainer siteNavbar_filterButtonContainer__desctop'>
											<button
												className='siteNavbar_filterButton'
												onClick={() => {
													_setIsActiveFilter(!isActive)
												}}
											>
												<img src={`/images/icons/${isActive ? 'filter-active.svg' : 'filter.svg'}`} alt='' />
											</button>
										</div>
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

const mapStateToProps = state => {
	const { isActive } = state.filters

	return {
		isActive,
	}
}

const mapDispatchToProps = {
	_setIsActiveFilter: setIsActiveFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavbar)
