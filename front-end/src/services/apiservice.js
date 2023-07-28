import axios from "axios"

export const LoginUser = (userEmailId, userPassword) => {
    return axios.get("http://localhost:8080/user/loginUser/" + userEmailId + "/" + userPassword)
}

export const registerUser = (user) => {
    return axios.post("http://localhost:8080/user/registerUser", user)
}

export const getAllUser = () => {
    return axios.get("http://localhost:8080/user/getAllUsers")
}

export const getUserById = (userId) => {
    return axios.get("http://localhost:8080/user/getUserById/" + userId)
}