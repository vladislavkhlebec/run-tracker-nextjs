/** Description
 *  @module Layout
 *  @author vladislavkhlebec
 *  @version 0.3.1
 */

import React from 'react'

import './layout.less'
import Head from 'next/head'

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
				<title>Runtracker - improve your body!</title>
			</Head>
			<div className='layout'>
				<LayoutHeader></LayoutHeader>
				<LayoutContent>{children}</LayoutContent>
			</div>
		</>
	)
}
