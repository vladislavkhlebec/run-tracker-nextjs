export const getFormattedDate = aDate => {
	const date = new Date(aDate)
	const str = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
	return str
}
