import React, { useEffect } from 'react'
import Link from 'next/link'
import withAuth from '../../utils/withAuth'
import Layout, { Layout_section } from '../../components/layout/layout'
import { connect } from 'react-redux'
import { fetchJogs } from '../../store/jogs/actions'
import { getFormattedDate } from '../../libs/date'
import { Button } from '../../components/button'
import '../../styles/jogs-page.less'
import 'react-datepicker/dist/react-datepicker.css'
import { getFilteredJogs } from '../../store/filters/functions'

const Index = ({ syncJogs, jogs = [] }) => {
	useEffect(() => {
		syncJogs()
	}, [])
	return (
		<Layout useFilter={true}>
			<Layout_section>
				<Link href='/jogs/create'>
					<a className='addJog'>
						<img src='/images/icons/add.svg' alt='Add jog' />
					</a>
				</Link>
				<div className='jogs_container'>
					{jogs.length ? (
						jogs
							.slice()
							.reverse()
							.map((item, i) => {
								return (
									<Link href={`/jogs/update?id=${item.id}`} key={`jogs_${i}`}>
										<a className='jog_container'>
											<div className='jog_logoContainer'>
												<img src='/images/icons/runner.svg' alt='Runner' />
											</div>
											<div className='jog_contentContainer'>
												<span className='lightText'>{getFormattedDate(item.date)}</span>
												<span>
													Speed:
													<small>{item.speed}</small>
												</span>
												<span>
													Distance:
													<small>{item.distance} km</small>
												</span>
												<span>
													Time:
													<small>{item.time} min</small>
												</span>
											</div>
										</a>
									</Link>
								)
							})
					) : (
						<div className='action_container action_container__transparent'>
							<img src='/images/icons/sad-rounded-square-emoticon.svg' alt='Logo' />
							<p className='action_title lightText'>Nothing is there</p>
							<Button className='button__purple'>Create your first jog</Button>
						</div>
					)}
				</div>
			</Layout_section>
		</Layout>
	)
}

const mapStateToProps = state => {
	return {
		jogs: getFilteredJogs(state),
	}
}

const mapDispatchToProps = {
	syncJogs: fetchJogs,
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Index))
