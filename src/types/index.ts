export const titleList = [
  "Mr.",
  "Mrs.",
  "Ms.",
  "Dr.",
  "Prof.",
  "Rev.",
  "Hon.",
  "Sir",
  "Madam",
] as const;

export type Title = (typeof titleList)[keyof typeof titleList];

export const genderList = [
  "Male",
  "Female",
  "Other",
  "Prefer not to say",
] as const;

export type Gender = (typeof genderList)[number];
