import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const PageUsers = () => {
	const userSelector = (state: RootState) => state.user;
	const { users, status } = useSelector(userSelector);

	return (
		<>
			{status === "loading" ? (
				<p>loading users...</p>
			) : (
				<>
					<p className="mb-3">There are {users.length} users.</p>
					<ul className="list-disc ml-6">
						{users.map((user) => {
							return (
								<li>
									{user.firstName} {user.lastName}
								</li>
							);
						})}
					</ul>
				</>
			)}
		</>
	);
};
