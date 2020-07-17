export const getJogById = (stateFul, jogId) => {
	const jogs = stateFul.jogs.items

	return jogs.find(item => item.id === jogId)
}
