import React from "react";
import "./App.css";
import UserTable from "./views/components/UserTable";
import SearchBar from "./views/components/SearchBar";

function App() {
	return (
		<div className="App">
			<div className="container">		
				<SearchBar />
				<UserTable />
			</div>
		</div>
	);
}

export default App;
