import axios from "axios";
import { UserType } from '../types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0ed0d19f-0cdd-4e2c-a282-fb87e87e2853"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
