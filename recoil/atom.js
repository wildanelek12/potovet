import { atom } from "recoil";

export const showModalSkill = atom({
  key: "showModalSkill",
  default: false,
});

export const showModalWork = atom({
  key: "showModalWork",
  default: false,
});

export const showModalEducation = atom({
  key: "showModalEducation",
  default: false,
});

export const showModalInterest = atom({
  key: "showModalInterest",
  default: false,
});

export const showModalSocialMedia = atom({
  key: "showModalSocialMedia",
  default: false,
});

export const showYearContent = atom({
  key: "showYearContent",
  default: true,
});

export const showMonthContent = atom({
  key: "showMonthContent",
  default: false,
});

export const showProjectContent = atom({
  key: "showProjectContent",
  default: false,
});

export const atomProjectName = atom({
  key: "atomProjectName",
  default: "",
});
export const atomProjectImage = atom({
  key: "atomProjectImage",
  default: [],
});
export const atomDescProblemStatement = atom({
  key: "atomDescProblemStatement",
  default: "",
});

export const atomFormProject = atom({
  key: "atomFormProject",
  default: {
    name_project: "",
    categories: { id: 1, name: "Academic", unavailable: false },
    time_elapsed: "",
    project_image: [],
    description: "",
    method: "",
    research_results: "",
    wireframing: "",
    prototype: "",
    prototype_url: "",
    lesson_learn: "",
    challenging_impact: "",
  },
});

export const atomFormUserProfile = atom({
  key: "atomFormUserProfile",
  default: {
    id: "",
    name: "",
    job: "",
    summary: "",
  },
});

export const atomToken = atom({
  key: "atomToken",
  default: "",
});
