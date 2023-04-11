import React, { useState, useEffect, useRef } from "react";
import "./MainPageStyle.css"

export function Title() {
    return <div className="Title">
        REPORT GPT
        <Description/>
    </div>
}

export function Description() {
    return <div className="Description">
        Fine-tune this prompt as needed to achieve outstanding results for your report or any other document.
        With carefully crafted adjustments, you can ensure unparalleled accuracy. Entrust this task to your trusted ally, ChatGPT, and be amazed by the outcomes!
    </div>
}