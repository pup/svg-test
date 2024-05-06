"use client"
import { useRef, useEffect } from "react";
import fakeData from './fake-data';
import renderTree from './render-tree';
import st from "./page.module.css";

export default function Home() {
  const treeRef = useRef(null);

  useEffect(() => {
    renderTree(fakeData);
  }, []);

  return (
    <main ref={treeRef} className={st.main}>
      
    </main>
  );
}
