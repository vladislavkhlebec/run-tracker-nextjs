import React from 'react'
import withAuth from '../utils/withAuth'
import Router from 'next/router'
import { Layout } from '../components/layout'

const Jogs = () => {
	return <Layout></Layout>
}

export default withAuth(Jogs)
