import { Layout, Layout_section } from '../components/layout'
import { connect } from 'react-redux'

import '../styles/signin.less'
import { Button } from '../components/button/button'
import { login } from '../store/users/actions'

const Home = props => {
	const { login } = props
	return (
		<Layout isSignIn={true}>
			<div className='signIn_formContainer'>
				<img src='/images/icons/bear-face.svg' alt='Sign in logo' />
				<Button
					className='button__white'
					onClick={async () => {
						await login()
					}}
				>
					Let me in
				</Button>
			</div>
		</Layout>
	)
}

const mapDispatchToProps = {
	login: login,
}

export default connect(null, mapDispatchToProps)(Home)
