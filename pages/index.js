import Layout, { Layout_section } from '../components/layout/layout'
import { connect } from 'react-redux'

import '../styles/signin.less'
import { Button } from '../components/button/button'
import { login } from '../store/users/actions'

const Home = props => {
	const { userLogin } = props
	return (
		<Layout isSignIn={true}>
			<div className='action_container action_container__purple'>
				<img src='/images/icons/bear-face.svg' alt='Sign in logo' />
				<Button
					className='button__white'
					onClick={() => {
						userLogin()
					}}
				>
					Let me in
				</Button>
			</div>
		</Layout>
	)
}

const mapDispatchToProps = {
	userLogin: login,
}

export default connect(null, mapDispatchToProps)(Home)
