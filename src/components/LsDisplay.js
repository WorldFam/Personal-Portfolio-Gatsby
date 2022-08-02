import React from "react"
import ItemsList from "../components/ItemsList"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"
import DarkModeToggle from "./DarkModeToggle"

const LsDisplay = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <div className="LsDisplayWindow">
      <div className="LsDisplayTaskbar">
        <span>CMD</span>
        <div style={{ position: "absolute", right: "10px", bottom: "-2px" }}>
          <DarkModeToggle />
        </div>
      </div>
      {isBrowser ? <ItemsList></ItemsList> : ""}
    </div>
  )
}

export default LsDisplay
