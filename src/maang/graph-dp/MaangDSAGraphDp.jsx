import { DsaSheetPage } from "../basic-dsa/MaangDSABasic";
import { dsaProblems } from "./dsaGraphDpProblems";
import { googleSeriesIntro } from "../basic-dsa/dsaBasicProblems";

/**
 * MaangDSAGraphDp — Part 3 of Venkatesh's sheet:
 * Graph traversal + Dynamic Programming patterns
 * (25 problems · 3 weekly plans).
 */
function MaangDSAGraphDp() {
  return (
    <DsaSheetPage
      sheetTitle="Graph & Dynamic Programming"
      titleAccent="Part 3"
      problems={dsaProblems}
      introLink={googleSeriesIntro.videoLink}
      siblings={[
        { label: "📘 Basic", to: "/maang/basic-dsa" },
        { label: "🚀 Advanced", to: "/maang/advanced-dsa" },
        { label: "🕸️ Graph & DP", active: true },
      ]}
    />
  );
}

export default MaangDSAGraphDp;