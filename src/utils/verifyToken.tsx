import { jwtDecode, JwtPayload } from "jwt-decode";

interface User {
  email: string;
  role: string;
  name?: string;
}

const verifyToken = (token: string): User => {
  const decoded = jwtDecode<JwtPayload & Partial<User>>(token);
  console.log(decoded);
  if (!decoded.email || !decoded.role) {
    throw new Error("Invalid token structure: missing email or role");
  }

  return {
    email: decoded.email,
    role: decoded.role,
    name: decoded.name || "Guest",
  };
};

export default verifyToken;
