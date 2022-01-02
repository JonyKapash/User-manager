import React from "react";
import AddNewUser from "./AddNewUser";
import SearchBar from "./SearchBar";

function UserTableHeader() {
	return (
		<>
			<div className="title">
				<div className="row">
					<h2>User Manager</h2>
					<div className="title-buttons-container">
						<div className="search-box">
							<SearchBar />
						</div>
						<div className="addUser">
							<AddNewUser />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserTableHeader;
