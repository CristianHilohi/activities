import {useState} from "react";

export const useUser = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    return {
        isLoggedIn,
        userName,
        userId,
    }
}