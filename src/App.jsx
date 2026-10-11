import React from 'react';
import { resumeData } from './resumeData';
import './App.css';

function App() {
  const { personalInfo, skills, projects, education, languages } = resumeData;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #eee', pb: '1rem', marginBottom: '2rem' }}>
        <h1>{personalInfo.name}</h1>
        <h3 style={{ color: '#666' }}>{personalInfo.title}</h3>
        <p>📍 {personalInfo.location} | ✉️ {personalInfo.email}</p>
        <p>🔗 <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a></p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2>О себе</h2>
        <p>{personalInfo.about}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Навыки</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {skills.map((skill, idx) => (
            <span key={idx} style={{ background: '#e0e0e0', padding: '0.4rem 0.8rem', borderRadius: '4px' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Проекты</h2>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Стек:</strong> {proj.techStack.join(', ')}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">Ссылка на GitHub</a>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Образование</h2>
        {education.map((edu, idx) => (
          <div key={idx}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree} ({edu.period})</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Языки</h2>
        <ul>
          {languages.map((lang, idx) => (
            <li key={idx}><strong>{lang.name}:</strong> {lang.level}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;