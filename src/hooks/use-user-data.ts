import { User } from "@/common/types/user";
import { getCookie } from "@/services/cookies";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUserData() {
  const navigate = useNavigate();
  const token = getCookie("accessToken");

  if (!token) {
    navigate("/login");
  }

  const decodedData = jwtDecode<JwtPayload & User>(token!);

  const [user, setUser] = useState<User>({
    id: decodedData.id,
    username: decodedData.username,
    email: decodedData.email,
  });

  return {
    user,
    setUser,
  };
}
