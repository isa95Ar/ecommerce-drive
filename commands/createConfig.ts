import Config from '../src/models/Config';

const createConfig = (): void => {
	try {
		Config.create({
			openDate: null,
			closeDate: null
		});
	} catch (e) {
		throw new Error(e);
	}
};

export default createConfig;
