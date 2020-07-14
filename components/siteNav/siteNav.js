/** Description
 *  @module SiteNav
 *  @author vladislavkhlebec
 *  @version 0.0.1
 */

import React from 'react'

import './siteNav.less'

/** SiteNav
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function SiteNav(props) {
	return <ul className={`siteNav ${props.className}`}>{props.children}</ul>
}

/** SiteNav_item
 *  @param props
 *  @param props.children
 *  @return {any}
 */
export function SiteNav_item(props) {
	return <li className='siteNav_item'>{props.children}</li>
}
