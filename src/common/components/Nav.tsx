import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-4 bg-slate-500 px-4 py-2 content">
				<li>
					<NavLink to="/welcome">Welcome</NavLink>
				</li>
				<li>
					<NavLink to="/techbooks">Tech Books</NavLink>
				</li>
				<li>
					<NavLink to="/shoppingcart">Shopping Cart</NavLink>
				</li>
				<li>
					<NavLink to="/users">Users</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
		</nav>
	);
};
