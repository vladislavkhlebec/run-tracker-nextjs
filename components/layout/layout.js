/** Description
 *  @module Layout
 *  @author vladislavkhlebec
 *  @version 0.3.1
 */

import React from 'react'

import './layout.less'
import Head from 'next/head'
import { SiteNavbar } from '../siteNavbar'

/** LayoutHeader
 *  @param props
 *  @param props.children
 *  @return {any}
 */
const LayoutHeader = props => {
	const { children } = props
	return <div className='layout_header'>{children}</div>
}

/** LayoutContent
 *  @param props
 *  @param props.children
 *  @param props.contentHeight
 *  @return {any}
 */
const LayoutContent = props => {
	const { children } = props
	return (
		<div className='layout_content'>
			<div className='layout_contentContainer'>{children}</div>
			<div className='layout_footer'></div>
		</div>
	)
}

export const Layout_section = props => {
	const { children } = props
	return <section className='layout_section'>{children}</section>
}

/** Layout
 *  @param props
 *  @param props.children
 *  @param props.contentHeight
 *  @return {any}
 */
export const Layout = props => {
	const { children } = props
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap'
					rel='stylesheet'
				/>
				<title>Runtracker - improve your body!</title>
			</Head>
			<div className='layout'>
				<LayoutHeader>
					<SiteNavbar />
				</LayoutHeader>
				<LayoutContent>{children}</LayoutContent>
			</div>
		</>
	)
}
