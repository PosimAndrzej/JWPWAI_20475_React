"use client"
import { StrictMode } from "react";
import Zad1_good from "./zad1_good";
import Zad1_bad from "./zad1_bad";

export default function Home() {
  return (
    <div>
      <h1>Zad1</h1>
      <h2>Poprawna wersja</h2>
      <StrictMode>
        <Zad1_good/>
      </StrictMode>
      <h2>Niepoprawna wersja</h2>
      <StrictMode>
        <Zad1_bad/>
      </StrictMode>
    </div>
  );
}
