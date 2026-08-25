// Company-wise interview data loader.
//
// The interview content is pre-parsed into structured JS files
// (src/data/companyInterviews/<company-id>/<interview>.js) by
// scripts/convert-company-interviews.cjs.
//
// Each company has its own FOLDER, and every interview inside that company
// lives in its own file inside the folder — so adding a new interview means
// simply dropping another file into that company's folder.
//
// This loader recursively imports every generated file, groups them by the
// company id/name (because each file exports the full company object with a
// single interview), and exposes the sorted list.

const interviewModules = import.meta.glob("./**/*.js", {
  import: "company",
  eager: true,
});

const companyMap = new Map();

Object.values(interviewModules).forEach((company) => {
  if (!company || !company.id) return;
  const existing = companyMap.get(company.id);
  if (existing) {
    // Merge interviews from another file belonging to the same company folder
    company.interviews.forEach((interview) => {
      existing.interviews.push(interview);
      existing.questionCount += interview.questionCount;
    });
  } else {
    companyMap.set(company.id, {
      id: company.id,
      name: company.name,
      interviews: [...company.interviews],
      questionCount: company.questionCount,
    });
  }
});

const companies = Array.from(companyMap.values()).sort((a, b) =>
  a.name.localeCompare(b.name),
);

const totalCompanyQuestions = companies.reduce(
  (sum, c) => sum + c.questionCount,
  0,
);

export { companies, totalCompanyQuestions };
