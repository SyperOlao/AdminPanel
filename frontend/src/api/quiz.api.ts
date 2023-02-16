import {IQuizGroup} from "./quiz.interface";
import axios from "axios";
import {BASE_URL} from "../paths/paths";

export const updateQuizGroup = (quizGroup: IQuizGroup) => {
    return axios.post(BASE_URL + 'updateQuizGroup', {
        quizGroup: quizGroup
    });
};

export const addQuizGroupHttp = (quizGroup: IQuizGroup) => {
    return axios.post(BASE_URL + 'addQuizGroup', {
        quizGroup: quizGroup
    });
};

export const deleteQuizGroupHttp = (id: string) => {
    return axios.delete(BASE_URL + 'deleteQuizGroup', {
        data: {
            id: id
        }
    });
};