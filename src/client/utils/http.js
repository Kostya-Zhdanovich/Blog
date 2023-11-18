import axios from "axios";

export const sessionClient = axios.create({
    baseURL: "https://studapi.teachmeskills.by",
});

export const postsClient = axios.create({
    baseURL: "https://api.spaceflightnewsapi.net/v4",
});