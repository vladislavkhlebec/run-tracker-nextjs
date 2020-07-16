import React, { useEffect } from 'react'
import withAuth from '../../utils/withAuth'
import { Layout, Layout_section } from '../../components/layout'
import { connect } from 'react-redux'
import { fetchJogs } from '../../store/jogs/actions'

import '../../styles/jogs-page.less'
import { getFormattedDate } from '../../libs/date'
import { Button } from '../../components/button'

const Index = ({ syncJogs, jogs = [] }) => {
	useEffect(() => {
		syncJogs()
	}, [])
	return (
		<Layout>
			<Layout_section>
				<div className='jogs_container'>
					{jogs.length ? (
						jogs.map((item, i) => {
							return (
								<div className='jog_container' key={`jogs_${i}`}>
									<div className='jog_logoContainer'>
										<img src='/images/icons/runner.svg' alt='Runner' />
									</div>
									<div className='jog_contentContainer'>
										<span className='lightText'>{getFormattedDate(item.date)}</span>
										<span>
											Speed:
											<small>speed</small>
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
								</div>
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
	const jogs = state.jogs.items
	return {
		jogs,
	}
}

const mapDispatchToProps = {
	syncJogs: fetchJogs,
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Index))
