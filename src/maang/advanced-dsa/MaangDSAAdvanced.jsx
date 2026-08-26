import { DsaSheetPage } from "../basic-dsa/MaangDSABasic";
import { dsaProblems } from "./dsaAdvancedProblems";
import { googleSeriesIntro } from "../basic-dsa/dsaBasicProblems";

/**
 * MaangDSAAdvanced — Part 2 of Venkatesh's sheet:
 * Backtracking, Divide & Conquer, Trie, advanced Greedy/Heaps and
 * advanced searching & string problems (38 problems · 4 weekly plans).
 */
function MaangDSAAdvanced() {
  return (
    <DsaSheetPage
      sheetTitle="Advanced DSA"
      titleAccent="Part 2"
      problems={dsaProblems}
      introLink={googleSeriesIntro.videoLink}
      siblings={[
        { label: "📘 Basic", to: "/maang/basic-dsa" },
        { label: "🚀 Advanced", active: true },
        { label: "🕸️ Graph & DP", to: "/maang/graph-dp" },
      ]}
    />
  );
}

export default MaangDSAAdvanced;