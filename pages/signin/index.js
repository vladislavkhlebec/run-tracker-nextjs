import { Layout, Layout_section } from '../../components/layout'

import './signin.less'
import { Button } from '../../components/button/button'

export default function Home() {
	return (
		<Layout>
			<div className='action_container action_container__purple'>
				<img src='/images/icons/bear-face.svg' alt='Sign in logo' />
				<Button className='button__white'>Let me in</Button>
			</div>
		</Layout>
	)
}
