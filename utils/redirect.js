import Router from 'next/router'

const redirect = (target, ctx) => {
	if (ctx && ctx.res) {
		ctx.res.writeHead(302, { Location: target })
		ctx.res.end()
	} else {
		Router.push('/error', target)
	}
}

export default redirect
