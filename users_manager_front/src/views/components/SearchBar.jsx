import React, { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";

function SearchBar() {
	const [searchData, setSearchData] = useState("");

    
	const searchInMongoDB = () => {
		Axios.get(`http://localhost:4000/searchUser/:${searchData}`);
	};
    
	return (
		<div>
			<Form onSubmit={searchInMongoDB}>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Control
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
