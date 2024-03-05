export interface ContactsType {
  linkedin: string;
  facebook: string;
  twitter: string;
  telegram: string;
  instagram: string;
  email: string;
  github: string;
  web: string;
  phone: string;
}
export interface NormalizesContactItemType {
  link: string;
  text: string;
  icon: JSX.Element;
}
export interface ProjectType {
  name: string;
  team?: string;
  methodology?: string;
  role: string;
  description: string;
  environment: string;
  responsibilities: string[];
  tags: string[];
}
export interface SkillType {
  key: string;
  value: string;
}
export interface PersonInfoType {
  fullName?: string;
  description?: string;
  contacts: ContactsType;
  summary: string[];
  projects: ProjectType[];
  skills: SkillType[];
}
