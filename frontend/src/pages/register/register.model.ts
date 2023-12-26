export interface RegisterRequest {
    name: string,
    userName: string,
    password: string,
}
export interface RegisterResponse {
    token: string
}