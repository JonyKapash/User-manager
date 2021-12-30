import React from "react";
import "./App.css";
import SearchBar from "./views/components/SearchBar";
import UserTable from "./views/components/UserTable";

function App() {
	
	return (
		<div className="App">
			<h1>User Management</h1>
			<SearchBar />
			<UserTable />
		</div>
	);
}

export default App;
