import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import { AppShell } from "./components/AppShell";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { posts } from "./data/siteData";
import { StreamResponse } from "./components/StreamResponse";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="container page">
      <StreamResponse
        content={
          '<h2>Page missing</h2><p className="muted">The page you were looking for does not exist.</p>'
        }
      />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = `${pageTitle} | Rohan Verma`;
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <AppShell>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            {/* Will publish after first blog!
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </AppShell>
    </>
  );
}

function getPageTitle(pathname) {
  if (pathname === "/" || pathname === "/about") return "About";
  if (pathname.startsWith("/experience")) return "Experience";
  if (pathname.startsWith("/projects")) return "Projects";
  if (pathname === "/blog") return "Blog";
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.split("/")[2] ?? "";
    const post = posts.find((item) => item.slug === slug);
    return post?.title ?? "Blog";
  }
  return "Page";
}
