import React from "react";
import "./App.css";
import UserModal from "./views/components/UserModal";
import AddNewUser from "./views/components/AddNewUser";
import UserTable from "./views/components/UserTable";
import SearchBar from "./views/components/SearchBar";

function App() {
	
	return (
		<div className="App">
			<h1>User Management</h1>
			<UserModal/>
			<SearchBar/>
			<AddNewUser />
			<UserTable />
		</div>
	);
}

export default App;
