import Axios from "axios";
import React, { useEffect, useState } from "react";
import UserTableBody from "./UserTableBody";
import UserTableHead from "./UserTableHead";
import ReactPaginate from "react-paginate";

function UserTable() {
	const [usersList, setUsersList] = useState({});
	const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		const GetAllUsers = async () => {
			const response = await Axios.get("http://localhost:4000/");
			setUsersList(response.data);
		};
		GetAllUsers();
	}, []);

	const usersPerPage = 9;
	const pagesVisited = pageNumber * usersPerPage;

	// we take the usersList and slice it to get the users we want to display, pagesVisited starts at 0 and we add usersPerPage to it to get the users we want to display on the current page
	const displayUsers =
		usersList &&
		usersList.length > 0 &&
		usersList
			.slice(pagesVisited, pagesVisited + usersPerPage)
			.map((user, index) => {
				return (
					<>
						<UserTableBody
							userId={user._id}
							key={index}
							picture={user.picture.thumbnail}
							firstName={user.name.first}
							lastName={user.name.last}
							email={user.email}
							country={user.location.country}
							registered={user.registered.date}
						/>
					</>
				);
			});

	const pageCount = Math.ceil(usersList.length / usersPerPage);

	return (
		<div>
			<UserTableHead />
			{displayUsers}
			<ReactPaginate
				previousLabel={"<"}
				nextLabel={">"}
				breakLabel={"..."}
				breakClassName={"pagination-brake"}
				pageCount={pageCount}
				onPageChange={e => setPageNumber(e.selected)}
				containerClassName={"pagination"}
				activeClassName={"pagination-active"}
			/>
		</div>
	);
}

export default UserTable;
