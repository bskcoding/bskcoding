import { DsaSheetPage } from "../basic-dsa/MaangDSABasic";
import { dsaProblems } from "./dsaDpProblems";
import { googleSeriesIntro } from "../basic-dsa/dsaBasicProblems";

/**
 * MaangDSADp — Dynamic Programming sheet of the MAANG track.
 * DP patterns (1D, Grid, String, Knapsack, Partition, DP-on-Trees)
  * (21 problems).
 */
function MaangDSADp() {
  return (
    <DsaSheetPage
      sheetTitle="Dynamic Programming"
      titleAccent="DP Patterns"
      problems={dsaProblems}
      introLink={googleSeriesIntro.videoLink}
      pageTheme="dp"
    />
  );
}

export default MaangDSADp;