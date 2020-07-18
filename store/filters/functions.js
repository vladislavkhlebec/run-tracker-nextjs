export const getFilteredJogs = stateFul => {
	const { endDate, startDate, isActive } = stateFul.filters
	const jogs = stateFul.jogs.items
	let filteredJogs = jogs
	if (isActive) {
		if (endDate) {
			filteredJogs = jogs.filter(item => item.date <= endDate.getTime())
		}
		if (startDate) {
			filteredJogs = filteredJogs.filter(item => item.date >= startDate.getTime())
		}
		return filteredJogs
	}
	return jogs
}
