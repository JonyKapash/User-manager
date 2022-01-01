import React, { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";

function SearchBar() {
	const [searchData, setSearchData] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const searchInMongoDB = async e => {
		e.preventDefault();
		const searchResultsFromMongDB = await Axios.get(
			`http://localhost:4000/searchUser/${searchData}`
		);
		setSearchResult(searchResultsFromMongDB.data);
        console.log(searchResultsFromMongDB.data);
	};

	return (
		<div className = "searchBar">
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
