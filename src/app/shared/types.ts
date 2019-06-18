
export interface LoginFormData {
    email: string,
    password: string
}
export interface FormStep {
    step: number,
    active: boolean,
    steps?: FormStep[]
}