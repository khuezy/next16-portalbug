'use client'
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PageA() {

  const [container, setContainer] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const el = document.getElementById('menu')
    setContainer(el)
  }, [])
  return <div>
    Page A
    {container && createPortal(<div>Portal A</div>, container)}
  </div>
}