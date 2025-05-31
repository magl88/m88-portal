import { redirect } from "react-router";

const isAuthenticated = () => {
	const token = localStorage.getItem("authToken");
	return !!token;
};

const roleGuard = (requiredRoles = []) => {
	return async () => {
		if (!isAuthenticated()) {
			return redirect("/login");
		}

		if (requiredRoles.length > 0) {
			const userRole = localStorage.getItem("userRole");

			if (userRole && !requiredRoles.includes(userRole as never)) {
				return redirect("/");
			}
		}

		return null;
	};
};

export { roleGuard };
