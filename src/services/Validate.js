module.exports = {
	async validateMandatoryValues(validateData) {
		const itemError = validateData.find(itemData => !itemData.value);
		return itemError;
	}
};