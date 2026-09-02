import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ConfigBanner from "./components/ConfigBanner";
import RequireAuth from "./components/RequireAuth";
import ChangePasswordModal from "./components/ChangePasswordModal";
import ErrorBoundary from "./components/ErrorBoundary";
import YouTubeLinkHandler from "./components/YouTubeLinkHandler";
import { BASENAME } from "./utils/basePath";

// Route-level code splitting: each page is loaded on demand, so the main
// bundle stays small and large pages (interview/topic pages) are only
// downloaded when the user actually visits them.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const MaangPreparation = lazy(() => import("./pages/MaangPreparation"));
const MaangDSABasic = lazy(() => import("./maang/basic-dsa/MaangDSABasic"));
const MaangDSAAdvanced = lazy(
  () => import("./maang/advanced-dsa/MaangDSAAdvanced"),
);
const MaangDSAGraph = lazy(() => import("./maang/graph/MaangDSAGraph"));
const MaangDSADp = lazy(() => import("./maang/dp/MaangDSADp"));
const MaangWeeklyPreparation = lazy(
  () => import("./maang/weekly/MaangWeeklyPreparation"),
);
const SystemDesignBasics = lazy(
  () => import("./maang/system-design/SystemDesignBasics"),
);
const OopsPage = lazy(() => import("./maang/system-design/oops/OopsPage"));
const SolidPage = lazy(() => import("./maang/system-design/solid/SolidPage"));
const DesignPatternsPage = lazy(
  () => import("./maang/system-design/patterns/DesignPatternsPage"),
);
const UmlPage = lazy(() => import("./maang/system-design/uml/UmlPage"));
const Roadmap90Day = lazy(
  () => import("./topics/90-day-job-roadmap/Roadmap90Day"),
);
const JavaTopics = lazy(() => import("./topics/java/JavaTopics"));
const JavaCourse = lazy(() => import("./topics/java/JavaCourse"));
const JavaInterview = lazy(() => import("./topics/java/JavaInterview"));
const JavaScriptTopics = lazy(
  () => import("./topics/javascript/JavaScriptTopics"),
);
const JavaScriptInterview = lazy(
  () => import("./topics/javascript/JavaScriptInterview"),
);
const ReactJSTopics = lazy(() => import("./topics/reactjs/ReactJSTopics"));
const ReactJSInterview = lazy(
  () => import("./topics/reactjs/ReactJSInterview"),
);

const SpringBootTopics = lazy(
  () => import("./topics/spring-boot/SpringBootTopics"),
);
const SpringBootCourse = lazy(
  () => import("./topics/spring-boot/SpringBootCourse"),
);
const SpringBootInterview = lazy(
  () => import("./topics/spring-boot/SpringBootInterview"),
);
const MicroservicesTopics = lazy(
  () => import("./topics/microservices/MicroservicesTopics"),
);
const MicroservicesCourse = lazy(
  () => import("./topics/microservices/MicroservicesCourse"),
);
const MicroservicesInterview = lazy(
  () => import("./topics/microservices/MicroservicesInterview"),
);
const SQLTopics = lazy(() => import("./topics/sql/SQLTopics"));
const SQLCourse = lazy(() => import("./topics/sql/SQLCourse"));
const SQLInterview = lazy(() => import("./topics/sql/SQLInterview"));
const KafkaTopics = lazy(() => import("./topics/kafka/KafkaTopics"));
const KafkaCourse = lazy(() => import("./topics/kafka/KafkaCourse"));
const KafkaInterview = lazy(() => import("./topics/kafka/KafkaInterview"));
const ReactiveProgrammingTopics = lazy(
  () => import("./topics/reactive-programming/ReactiveProgrammingTopics"),
);
const ReactiveProgrammingInterview = lazy(
  () => import("./topics/reactive-programming/ReactiveProgrammingInterview"),
);
const DSATopics = lazy(() => import("./topics/dsa/DSATopics"));
const DSACourse = lazy(() => import("./topics/dsa/DSACourse"));
const DSALeetcode = lazy(() => import("./pages/DSALeetcode"));
const CompanyInterview = lazy(() => import("./pages/CompanyInterview"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Contact = lazy(() => import("./pages/Contact"));
const Profile = lazy(() => import("./pages/Profile"));
const ResumeBuilderPage = lazy(() => import("./pages/ResumeBuilderPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Restores the original route after GitHub Pages 404 redirect.
// When a user refreshes /login, GitHub Pages serves 404.html which
// redirects to <base>/index.html?path=/login. This component reads that
// query param and navigates to the correct page, then cleans the URL.
// On GitHub Pages (<repo>), the clean URL must include the base prefix.
function RouteRestorer() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("path");

    if (path && path !== "/" && path !== "/index.html") {
      const cleanUrl = BASENAME === "/" ? path : BASENAME + path;
      // Replace the URL with the clean path and navigate to it
      window.history.replaceState({}, "", cleanUrl);
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-spinner" />
    </div>
  );
}

function App() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <BrowserRouter basename={BASENAME}>
      <ErrorBoundary>
        <YouTubeLinkHandler />
        <RouteRestorer />
        <div className="app-shell">
          <ConfigBanner />
          <div className="navbar-container">
            <NavBar onOpenChangePassword={() => setShowChangePassword(true)} />
          </div>
          <main className="page-container">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Free routes - open to everyone, no login required */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/roadmap" element={<Roadmap90Day />} />
                <Route path="/java" element={<JavaTopics />} />
                <Route path="/java/course" element={<JavaCourse />} />
                <Route path="/java/interview" element={<JavaInterview />} />
                <Route path="/javascript" element={<JavaScriptTopics />} />
                <Route
                  path="/javascript/interview"
                  element={<JavaScriptInterview />}
                />
                <Route path="/reactjs" element={<ReactJSTopics />} />
                <Route
                  path="/reactjs/interview"
                  element={<ReactJSInterview />}
                />
                <Route path="/spring-boot" element={<SpringBootTopics />} />
                <Route path="/spring-boot/course" element={<SpringBootCourse />} />
                <Route
                  path="/spring-boot/interview"
                  element={<SpringBootInterview />}
                />
                <Route path="/microservices" element={<MicroservicesTopics />} />
                <Route path="/microservices/course" element={<MicroservicesCourse />} />
                <Route
                  path="/microservices/interview"
                  element={<MicroservicesInterview />}
                />
                <Route path="/sql" element={<SQLTopics />} />
                <Route path="/sql/course" element={<SQLCourse />} />
                <Route path="/sql/interview" element={<SQLInterview />} />
                <Route path="/kafka" element={<KafkaTopics />} />
                <Route path="/kafka/course" element={<KafkaCourse />} />
                <Route path="/kafka/interview" element={<KafkaInterview />} />
                {/* MAANG Kit — grid page and all sub-topic pages require login */}
                <Route
                  path="/maang"
                  element={
                    <RequireAuth>
                      <MaangPreparation />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/basic-dsa"
                  element={
                    <RequireAuth>
                      <MaangDSABasic />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/advanced-dsa"
                  element={
                    <RequireAuth>
                      <MaangDSAAdvanced />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/graphs"
                  element={
                    <RequireAuth>
                      <MaangDSAGraph />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/dp"
                  element={
                    <RequireAuth>
                      <MaangDSADp />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/weekly-preparation"
                  element={
                    <RequireAuth>
                      <MaangWeeklyPreparation />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/system-design-basics"
                  element={
                    <RequireAuth>
                      <SystemDesignBasics />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/system-design/oops"
                  element={
                    <RequireAuth>
                      <OopsPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/system-design/solid"
                  element={
                    <RequireAuth>
                      <SolidPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/system-design/patterns"
                  element={
                    <RequireAuth>
                      <DesignPatternsPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/maang/system-design/uml"
                  element={
                    <RequireAuth>
                      <UmlPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/reactive-programming"
                  element={<ReactiveProgrammingTopics />}
                />
                <Route
                  path="/reactive-programming/interview"
                  element={<ReactiveProgrammingInterview />}
                />
                <Route path="/dsa" element={<DSATopics />} />
                <Route path="/dsa/course" element={<DSACourse />} />
                <Route path="/dsa/leetcode" element={<DSALeetcode />} />
                <Route
                  path="/company-interview"
                  element={<CompanyInterview />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                {/* Resume builder still requires login */}
                <Route
                  path="/resume-builder"
                  element={
                    <RequireAuth>
                      <ResumeBuilderPage />
                    </RequireAuth>
                  }
                />
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <ChangePasswordModal
            isOpen={showChangePassword}
            onClose={() => setShowChangePassword(false)}
          />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
