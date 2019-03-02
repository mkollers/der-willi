export interface UserInfo {
    email: string;
    email_verified: boolean;
    family_name: string;
    gender: string;
    given_name: string;
    'https://der-willi.de/groups': string[];
    'https://der-willi.de/permissions': string[];
    locale: string;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: Date;
}