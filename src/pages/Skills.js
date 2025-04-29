import React from "react";

const skillSet = [
    { lang: "Java", progress: 85 },
    { lang: "Spring", progress: 55 },
    { lang: "JavaScript", progress: 33 },
    { lang: "React", progress: 45 },
    { lang: "HTML", progress: 70 },
    { lang: "CSS", progress: 55 },
    { lang: "XML", progress: 55 },
    { lang: "JSON", progress: 90 },
    { lang: "Docker", progress: 50 },
    { lang: "PostgreSql", progress: 70 },
    { lang: "MongoDB", progress: 20 },
    { lang: "Maven", progress: 70 },
    { lang: "IntelliJ IDEA", progress: 80 },
    { lang: "VS Code", progress: 60 },
];

function Skills() {
    return (
        <div className="container skills-page">
            <h1 className="section-title">Skill Set</h1>
            <p className="section-description">
                Technologies and tools I work with:
            </p>

            <div className="skills-wrapper">
                {skillSet.map(({ lang, progress }) => (
                    <div key={lang} className="skill-item">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            >
                                <span className="progress-text">{lang}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
