import React from "react";

function SearchBar() {
	return (
		<div>
			<div className="input-group mb-3 p-2">
				<input
					type="text"
					className="form-control"
					placeholder="Searcch Users..."
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<button
					className="btn btn-warning"
					type="button"
					id="button-addon2"
				>
					+ New User
				</button>
			</div>
		</div>
	);
}

export default SearchBar;
