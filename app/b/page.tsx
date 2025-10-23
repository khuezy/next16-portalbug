'use client'
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PageB() {

  const [container, setContainer] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const el = document.getElementById('menu')
    setContainer(el)
  }, [])
  return <div>
    Page B
    {container && createPortal(<div>Portal B</div>, container)}
  </div>
}