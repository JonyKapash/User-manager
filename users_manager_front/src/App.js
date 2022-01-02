import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import AppContext from "./context/AppContext";
import UserTable from "./views/components/UserTable";
import UserTableHeader from "./views/components/UserTableHeader";

function App() {
	const [usersList, setUsersList] = useState({});

	useEffect(() => {
		let isMount = true;
		const getAllUsers = async () => {
			const response = await Axios.get("http://localhost:4000/");
			if (isMount) {
				setUsersList(response.data);
			}
			return () => {
				isMount = false;
			};
		};
		getAllUsers();
	}, [usersList]); //todo: when we remove the users list from the dependency array, the search will not re-render the table.
	return (
		<div className="App">
			<AppContext.Provider
				value={{
					usersList: usersList,
					setUsersList: setUsersList,
				}}
			>
				<div className="container">
					<UserTableHeader />
					<UserTable />
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
