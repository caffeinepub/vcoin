import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UserProfile {
    referralCode: string;
    name: string;
    email: string;
    referredBy?: string;
    registrationTimestamp: Time;
    fingerprint: string;
    passwordChangeRequired: boolean;
}
export type Time = bigint;
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createDepositIntent(intent: string): Promise<string>;
    deleteUser(user: Principal): Promise<void>;
    getAllUsers(): Promise<Array<[Principal, UserProfile]>>;
    getCallerDepositIntents(): Promise<Array<string>>;
    getCallerDepositSubmissions(): Promise<Array<string>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCurrentPresaleStage(): Promise<{
        stage: bigint;
        price: number;
        remainingSupply: bigint;
    }>;
    getDepositIntent(intentId: string): Promise<string | null>;
    getDepositSubmission(submissionId: string): Promise<string | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getWalletAddress(): Promise<string>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitDeposit(submission: string): Promise<string>;
    updateUserProfile(user: Principal, profile: UserProfile): Promise<void>;
}
