import React from 'react';
import { X, Mail, Lock } from 'lucide-react';
import { useForm } from "react-hook-form";
import { CustomInput } from './CustomInput';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "@/services/axiosInstance";
import Cookies from "js-cookie";

export function LoginForm({ onClose, darkMode }) {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosInstance.post("/api/login_check", {
        username: "user@lecturo.com",
        password: "password",
      });

      const { token } = response.data;
      // redirection ou message flash...

      // Stocker le token
      Cookies.set("jwt_token", token, { secure: true });

      // Rediriger vers une page protégée
      navigate("/profile");
    } catch (error) {
      console.error("Erreur :", error);
      // afficher les erreurs dans le formulaire...
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-8 max-w-md w-full relative`}>
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Se connecter</h2>
        <form className="space-y-4" method='POST' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>

            </label>

            <CustomInput
              icon={Mail}
              name={"_username"}
              register={register}
              rules={{
                required: "L'email est requis",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Email invalide"
                }
              }}
              darkMode={darkMode}
              placeholder={"votre@email.com"}
              errorMessage={errors.email?.message}
              type="text"
              required />

          </div>
          <div>
            <label htmlFor="password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
              Mot de passe
            </label>


            <CustomInput
              icon={Lock}
              name={"_password"}
              register={register}
              rules={{
                required: "Le mot de passe est requis",
                // minLength: {
                //   value: 8,
                //   message: "Le mot de passe doit contenir au moins 8 caractères",
                // },
                // validate: {
                //   hasUppercase: (v) =>
                //     /[A-Z]/.test(v) || "Au moins une majuscule requise",
                //   hasLowercase: (v) =>
                //     /[a-z]/.test(v) || "Au moins une minuscule requise",
                //   hasNumber: (v) =>
                //     /[0-9]/.test(v) || "Au moins un chiffre requis",
                //   hasSpecialChar: (v) =>
                //     /[!@#$%^&*(),.?\":{}|<>]/.test(v) ||
                //     "Au moins un caractère spécial requis",
                // },
              }}
              darkMode={darkMode}
              placeholder={"••••••"}
              errorMessage={errors.password?.message}
              type="password"
              required />
          </div>
          <button
            type="submit"
            className={`w-full ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium rounded-lg px-5 py-2.5 text-center transition-colors`}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}