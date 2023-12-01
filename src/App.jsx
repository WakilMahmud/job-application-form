import { createContext, useState } from "react";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
export const InformationContext = createContext();

function App() {
	const [info, setInfo] = useState({});

	return (
		<InformationContext.Provider value={(info, setInfo)}>
			<PersonalInfo></PersonalInfo>
		</InformationContext.Provider>
	);
}

export default App;
