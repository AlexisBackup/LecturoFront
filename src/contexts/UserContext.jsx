import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";
import axiosInstance from "@/services/axiosInstance";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userState, setUserState] = useState({
        data: null,
        loading: true,
        error: null,
    });
    const [currentEventId, setCurrentEventId] = useState(null);
    const [currentEvent, setCurrentEvent] = useState(null);
    const isAdministrator = userState.data?.roles?.includes("ROLE_ADMIN") || false;
    const canOnlyManageEvent = (userState.data?.isOrganizerOfEvent && !isAdministrator) || false;

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        const updateCurrentEvent = () => {
            const newCurrentEvent = userState.data?.events?.find((event) => event.id === currentEventId);
            setCurrentEvent(newCurrentEvent || null);
        };

        updateCurrentEvent();
    }, [currentEventId, userState.data?.events]);

    const fetchUser = useCallback(async (force = false) => {
      

      if(!force && userState.data){
        return;
      }
        try {
            const jwt = Cookies.get("jwt_token");

            if (!jwt) {
              
                setUserState({ data: null, loading: false, error: null });
                return;
            }

            setUserState(prev=>({...prev,loading :true}))
            const response = await axiosInstance.get("api/user");
            setUserState({ data: response.data, loading: false, error: null });
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response && err.response.status === 401) {
                    Cookies.remove("jwt_token");
                    navigate("/login");
                } else {
                    console.error("Une erreur est survenue:", err);
                    setUserState({ data: null, loading: false, error: err });
                }
            }
        }
    },[userState.data,navigate]);

    const changeCurrentEvent = (eventId) => {
        setCurrentEventId(eventId);
    };

    const flushAllData = () => {
        setUserState({ data: null, loading: false, error: null });
        setCurrentEventId(null);
        setCurrentEvent(null);
        Cookies.remove("jwt_token");
        Cookies.remove("selectedEventId");
    };

    const value = {
        userState,
        setUserState,
        currentEventId,
        currentEvent,
        changeCurrentEvent,
        isAdministrator,
        canOnlyManageEvent,
        flushAllData,
        fetchUser
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};