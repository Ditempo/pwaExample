exports.test = (req, res) => {
	const json = {test: "good"};
	res.status(200).send(json);
};
exports.getCourse = async (req, res) => {
	const json = {here: "here"};
	res.status(200).send(json);
};
