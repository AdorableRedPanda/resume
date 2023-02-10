export interface Labeled<T> {
    label: string;
    value: T;
}

export interface Profile {
    position: string;
    name: string;
    about: Labeled<StyledLine[]>;
}

export interface Resume {
    profile: Profile;
    workExperience: Experience;
    education: Experience;
    skills: string[];
    contacts: ContactLink[];
}


export interface ExperienceItem {
    position: ExperiencePositionInfo;
    dates: [from: string, to: string];
    details: StyledLine[];
}
type ExperiencePositionInfo = [string, string]

export type Experience = Labeled<ExperienceItem[]>;

export type ListItem = [string, string?];

export type ContactLink = [icon: string, href: string, label: string];

export type StyledLine = [string, LineStyle?];

export type LineStyle = 'li' | 'bold' | 'none';