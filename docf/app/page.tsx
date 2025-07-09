'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import axios  from 'axios'
export default function Home() {
  const [msg,setMsg] =useState("");
  const handelClick = async ()=>{
    const res = await axios.get('http://localhost:3001/app')
  }
  return (
    <>
    <h1>{msg}</h1>
    <button>click</button>
    </>
  );
}
