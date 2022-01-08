export interface Labeled<T> {
    label: string;
    value: T;
}

export interface Profile {
    position: string;
    firstName: string;
    lastName: string;
    about: Labeled<StyledLine[]>;
}

export interface Resume {
    profile: Profile;
    workExperience: Experience;
    education: Experience;
    footerCaption: string;
    sideInfo: SideInfo;
}

export interface SideInfo {
    skills: SideInfoList;
    languages: SideInfoList;
    socialLinks: SideInfoList;
    contacts: SideInfoList;
}

export interface ExperienceItem {
    position: ExperiencePositionInfo;
    city: string;
    dateFrom: string;
    dateUntil: string;
    details: StyledLine[];
}
type ExperiencePositionInfo = [string, string]

export type Experience = Labeled<ExperienceItem[]>;

export type SideInfoList = Labeled<ListItem[]>;

export type ListItem = [string, string?]

export type StyledLine = [string, LineStyle?];

export type LineStyle = 'li' | 'bold' | 'none';