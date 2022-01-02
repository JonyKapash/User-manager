import React, { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { useCon } from "../../context/AppContext";

function SearchBar() {
	const [searchData, setSearchData] = useState("");
	const { setUsersList } = useCon();

	const searchInMongoDB = async e => {
		e.preventDefault();
		const result = await Axios.get(
			`http://localhost:4000/searchUser/${searchData}`
		);
		if (result.data.length === 0) {
			alert("Sorry no user found");
		} else {
			setUsersList(result.data);
		}
	};

	return (
		<div className="searchBar">
			<Form onSubmit={searchInMongoDB}>
				<Form.Group className="mb-3">
					<Form.Control
						placeholder="Search"
						name="searchBar"
						type="text"
						onChange={e => setSearchData(e.target.value)}
					/>
				</Form.Group>
			</Form>
		</div>
	);
}

export default SearchBar;
