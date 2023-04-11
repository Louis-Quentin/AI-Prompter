import React, { useState, useEffect, useRef } from "react";
import "./TemplateStyles/ReportTemplate.css";

export function ReportTemplate() {
    const default_report = `As a {Who ?},\n`+
        `I was asked to write {type of the document} on {subject}.`;

    const [report, setReport] = useState(default_report);
    const textareaRef = useRef(null);
    const [copyText, setCopyText] = useState("Copy");
    const [showBadge, setShowBadge] = useState(false);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [report]);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(report)
            .then(() => {
                setShowBadge(true);
                setCopyText("Copied !")
                setTimeout(() => {
                    setShowBadge(false);
                    setCopyText("Copy")
                }, 1000);
            })
            .catch((err) => {
                console.error("Failed to copy to clipboard: ", err);
            });
    };

    return (
        <div className="Report-template">
            <textarea
                className="Text-box"
                ref={textareaRef}
                value={report}
                onChange={(event) => setReport(event.target.value)}
                style={{ resize: "none", fontSize: "15px" }} // Set the resize property to none
            ></textarea>
            <button className="Copy-button" onClick={handleCopyClick}>{copyText}</button>
        </div>
    );
}
