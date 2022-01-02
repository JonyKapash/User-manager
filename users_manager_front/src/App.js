import React from "react";
import "./App.css";
import UserTable from "./views/components/UserTable";
import UserTableHeader from "./views/components/UserTableHeader";

function App() {
	return (
		<div className="App">
			<div className="container">
				<UserTableHeader />
				<UserTable />
			</div>
		</div>
	);
}

export default App;