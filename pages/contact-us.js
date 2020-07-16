import React, { useEffect } from 'react'
import withAuth from '../utils/withAuth'
import { Layout, Layout_section } from '../components/layout'

import '../styles/main.less'

const Index = () => {
	return (
		<Layout>
			<Layout_section>
				<article>
					<h2>contacts</h2>
				</article>
			</Layout_section>
		</Layout>
	)
}

export default withAuth(Index)
