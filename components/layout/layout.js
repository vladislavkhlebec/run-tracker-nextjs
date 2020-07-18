/** Description
 *  @module Layout
 *  @author vladislavkhlebec
 *  @version 0.3.1
 */

import React from 'react'

import './layout.less'
import Head from 'next/head'
import { SiteNavbar } from '../siteNavbar'
import { fetchJogs } from '../../store/jogs/actions'
import { setEndDate, setStartDate } from '../../store/filters/actions'
import withAuth from '../../utils/withAuth'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'

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
const Layout = props => {
	const { children, isSignIn, _setEndDate, _setStartDate, endDate, startDate, useFilter } = props
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
					<SiteNavbar isSignIn={isSignIn} />
					{useFilter && (
						<div className='filtersMenu_container'>
							<div className='filtersMenu_pickerContainer'>
								<span>Date from</span>
								<div className='filtersMenu_pickerWrapper'>
									<DatePicker
										selected={startDate}
										onChange={date => {
											_setStartDate(date)
										}}
									/>
								</div>
							</div>
							<div className='filtersMenu_pickerContainer'>
								<span>Date to</span>
								<div className='filtersMenu_pickerWrapper'>
									<DatePicker
										selected={endDate}
										onChange={date => {
											_setEndDate(date)
										}}
									/>
								</div>
							</div>
						</div>
					)}
				</LayoutHeader>

				<LayoutContent>{children}</LayoutContent>
			</div>
		</>
	)
}

const mapStateToProps = state => {
	const { endDate, startDate } = state.filters
	return {
		endDate,
		startDate,
	}
}

const mapDispatchToProps = {
	_setEndDate: setEndDate,
	_setStartDate: setStartDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
