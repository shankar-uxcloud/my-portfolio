import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ExperiencePage from "../pages/ExperiencePage";
import CertificationsPage from "../pages/CertificationsPage";
import GitHubPage from "../pages/GitHubPage";
import ContactPage from "../pages/ContactPage";
import AchievementsPage from "../pages/AchievementsPage";
import ResumePage from "../pages/ResumePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/skills" element={<SkillsPage />} />

      <Route path="/projects" element={<ProjectsPage />} />

      <Route path="/experience" element={<ExperiencePage />} />

      <Route
        path="/certifications"
        element={<CertificationsPage />}
      />

      <Route path="/github" element={<GitHubPage />} />

      <Route
        path="/achievements"
        element={<AchievementsPage />}
      />

      <Route path="/resume" element={<ResumePage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;
