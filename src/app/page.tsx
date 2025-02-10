import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import { title } from "process";

export const metadata = {
  title: "Home - M Ilham Hatta",
  description: "Welcome to my portfolio website",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="site-main">
        <div id="main-content" className="single-page-content">
          <div id="primary" className="content-area">
            <div
              id="content"
              className="page-content site-content single-post"
              role="main"
            >
              <article
                id="post-8"
                className="post-8 page type-page status-publish hentry"
              >
                <div className="entry-content">
                  {/* Menampilkan HomeSection */}
                  <HomeSection />
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
