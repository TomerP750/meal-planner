import type { GoalType } from "./GoalType"


export interface SignUpRequestDto {
    firstName: string 
    lastName: string 
    email: string 
    password: string 
    confirmPassword: string 
    weight: number 
    height: number
    age: number 
    goal: GoalType
}