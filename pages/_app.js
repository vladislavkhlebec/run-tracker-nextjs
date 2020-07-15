import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_BASE
axios.defaults.withCredentials = true

export default function App({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}
