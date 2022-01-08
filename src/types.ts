export interface Labeled<T> {
    label: string;
    value: T;
}

export interface Resume {
    profile: Profile;
    workExperiences: Labeled<WorkExperience[]>;
    educations: Labeled<Education[]>;
    footerCaption: string;
    sideInfo: SideInfo;
}

export interface SideInfo {
    skills: SideInfoList;
    languages: SideInfoList;
    socialLinks: SideInfoList;
    contacts: SideInfoList;
}

export type SideInfoList = Labeled<ListItem[]>;

export type ListItem = [string, string?]

interface TimePeriod {
    dateFrom: string;
    dateUntil: string;
}

interface CityInfo {
    city: string;
}

export interface Education extends TimePeriod, CityInfo {
    school: string;
    degree: string;
    details: StyledLine[];
}

export interface Profile {
    position: string;
    firstName: string;
    lastName: string;
    about: Labeled<StyledLine[]>;
}

export interface WorkExperience extends TimePeriod, CityInfo {
    position: string;
    employer: string;
    details: StyledLine[];
}

export type StyledLine = [string, LineStyle?];

export type LineStyle = 'li' | 'bold' | 'none';