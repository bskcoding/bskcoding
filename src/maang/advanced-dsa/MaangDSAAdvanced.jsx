import { DsaSheetPage } from "../basic-dsa/MaangDSABasic";
import { dsaProblems } from "./dsaAdvancedProblems";
import { googleSeriesIntro } from "../basic-dsa/dsaBasicProblems";

/**
 * MaangDSAAdvanced — Part 2 of the MAANG sheet: Data Structures.
 * (57 problems).
 */
function MaangDSAAdvanced() {
  return (
    <DsaSheetPage
      sheetTitle="Advanced DSA"
      titleAccent="Part 2"
      problems={dsaProblems}
      introLink={googleSeriesIntro.videoLink}
    />
  );
}

export default MaangDSAAdvanced;