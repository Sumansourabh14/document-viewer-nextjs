"use client";
import { DocumentViewer } from "react-documents";

export default function Home() {
  return (
    <main style={{ height: "100vh", width: "50%", margin: "0 auto" }}>
      <section
        style={{ textAlign: "center", margin: "2rem 0", fontSize: "2rem" }}
      >
        <h1>Document Viewer</h1>
      </section>
      <DocumentViewer
        queryParams="hl=Nl"
        url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      ></DocumentViewer>
    </main>
  );
}
