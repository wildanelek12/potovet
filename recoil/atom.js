import { atom } from "recoil";

export const showModalSkill = atom({
    key: 'showModalSkill',
    default: false
});

export const showModalWork = atom({
    key: 'showModalWork',
    default: false
});

export const showModalEducation = atom({
    key: 'showModalEducation',
    default: false
});

export const showModalInterest = atom({
    key: 'showModalInterest',
    default: false
});

export const showModalSocialMedia = atom({
    key: 'showModalSocialMedia',
    default: false
});

export const showYearContent = atom({
    key: 'showYearContent',
    default: true
});

export const showMonthContent = atom({
    key: 'showMonthContent',
    default: false
});

export const showProjectContent = atom({
    key: 'showProjectContent',
    default: false
});

export const atomProjectName = atom({
    key: 'atomProjectName',
    default: ''
});
export const atomProjectImage = atom({
    key: 'atomProjectImage',
    default: []
});
export const atomDescProblemStatement = atom({
    key: 'atomDescProblemStatement',
    default: ''
});