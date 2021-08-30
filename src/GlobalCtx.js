import { createContext, useState } from 'react';

const GloabalCtx = createContext(undefined);

const GlobalCtxProvider = (props) => {
	const [state, setState] = useState(false);
	return (
		<GloabalCtx.Provider value ={[state, setState]}>
			{props.children}
		</GloabalCtx.Provider>
	);
};

export { GloabalCtx, GlobalCtxProvider };
