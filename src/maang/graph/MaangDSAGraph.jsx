import { DsaSheetPage } from "../basic-dsa/MaangDSABasic";
import { dsaProblems } from "./dsaGraphProblems";
import { googleSeriesIntro } from "../basic-dsa/dsaBasicProblems";

/**
 * MaangDSAGraph — Graphs sheet of the MAANG track.
  * Graph traversal (BFS, DFS) + graph components (2 topics · 4 problems).
 */
function MaangDSAGraph() {
  return (
    <DsaSheetPage
      sheetTitle="Graph Mastery"
      titleAccent="Graphs"
      problems={dsaProblems}
      introLink={googleSeriesIntro.videoLink}
    />
  );
}

export default MaangDSAGraph;