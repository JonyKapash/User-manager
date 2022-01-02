import React, { useState } from "react";
import { useCon } from "../../context/AppContext";
import UserTableBody from "./UserTableBody";
import UserTableHead from "./UserTableHead";
import ReactPaginate from "react-paginate";

function UserTable() {
	const { usersList } = useCon();
	const [pageNumber, setPageNumber] = useState(0);
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
							key={index}
							userId={user._id}
							picture={user.picture.thumbnail}
							firstName={user.name.first}
							lastName={user.name.last}
							email={user.email}
							country={user.location.country}
							registered={user.registered.date.toLocaleString("en-US", {
								day: "numeric", // numeric, 2-digit
								year: "numeric", // numeric, 2-digit
								month: "long", // numeric, 2-digit, long, short, narrow
							})}
						/>
					</>
				);
			});

	const pageCount = Math.ceil(usersList.length / usersPerPage);

	return (
		<div>
			<table className="table table-striped table-hover table-bordered table-responsive">
				<thead>
					<UserTableHead />
				</thead>
				<tbody>{displayUsers}</tbody>
			</table>
			<ReactPaginate
				previousLabel={"<"}
				nextLabel={">"}
				breakLabel={"..."}
				marginPagesDisplayed={3}
				pageCount={pageCount}
				onPageChange={e => setPageNumber(e.selected)}
				containerClassName={"pagination"}
				activeClassName={"pagination-active"}
			/>
		</div>
	);
}

export default UserTable;
