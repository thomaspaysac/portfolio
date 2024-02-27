import Projet from "./projet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Thomas Paysac",
};

export default function Page () {
  return <Projet />
}