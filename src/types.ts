export interface Labeled<T> {
	label: string;
	value: T;
}

export interface Profile {
	about: Labeled<StyledLine[]>;
	name: string;
	position: string;
}

export interface Resume {
	contacts: ContactLink[];
	education: Experience;
	profile: Profile;
	skills: string[];
	workExperience: Experience;
}

export interface ExperienceItem {
	dates: [from: string, to: string];
	details: StyledLine[];
	position: ExperiencePositionInfo;
}
type ExperiencePositionInfo = [string, string];

export type Experience = Labeled<ExperienceItem[]>;

export type ContactLink = [icon: string, href: string, label: string];

export type StyledLine = [string, LineStyle?];

export type LineStyle = 'bold' | 'li' | 'none';
