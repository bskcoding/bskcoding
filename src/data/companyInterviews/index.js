// Company-wise interview data loader.
//
// The interview content is pre-parsed into structured JS files
// (data-*.js in this folder) by scripts/convert-company-interviews.cjs.
// This loader simply imports them all and exposes the sorted list.

const mdModules = import.meta.glob("./data-*.js", {
  import: "company",
  eager: true,
});

const companies = Object.values(mdModules).sort((a, b) =>
  a.name.localeCompare(b.name),
);

const totalCompanyQuestions = companies.reduce(
  (sum, c) => sum + c.questionCount,
  0,
);

export { companies, totalCompanyQuestions };
