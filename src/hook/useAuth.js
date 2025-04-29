import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/services/axiosInstance";
import { useUser } from "@/contexts/UserContext";
import Cookies from "js-cookie";

export const useAuth = () => {
  const navigate = useNavigate()
  const [authState, setAuthState] = useState({
    errorMessage: "",
  });
  const { setUserState, flushAllData } = useUser();

  const isLoggedIn = () => {
    return !!getCookie("jwt_token");
  };

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post("api/login_check", {
        email: email,
        password: password,
      });
      const { token } = response.data;

      setCookie("jwt_token", token, cookieParams);
      // TODO : en prod, ajouter d'autres options de sécurité si nécessaire, par exemple :
      // secure: true,
      // Assurez-vous que le cookie est transmis uniquement via HTTPS
      await fetchUserData();

    } catch (error) {
      console.error("Erreur de connexion", error);
      setAuthState({
        errorMessage: "Échec de la connexion : Vérifiez vos identifiants.",
      });
    }
  };

  const fetchUserData = async () => {
    const jwt = Cookies.get("jwt_token");
    if (jwt) {
      const response = await axiosInstance.get("api/user");
      setUserState({ data: response.data, loading: false, error: null });
    }
  };

  const logout = () => {
    flushAllData();
    window.location.href = "/";
  };

  return { authState, isLoggedIn, login, logout, fetchUserData };
};