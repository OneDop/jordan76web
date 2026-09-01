import React, { useState, useMemo } from 'react';
import { TEAM_FOLDERS, TEAM_MEMBERS } from '../data/team';
import { Folder, FolderOpen, Terminal } from 'lucide-react';
import './TeamCredits.css';

export const TeamCredits: React.FC = () => {
  // Active folder ID (defaults to 'social_media')
  const [activeFolderId, setActiveFolderId] = useState<string>('social_media');

  const activeFolder = useMemo(() => {
    return TEAM_FOLDERS.find(f => f.id === activeFolderId) || TEAM_FOLDERS[0];
  }, [activeFolderId]);

  const folderMembers = useMemo(() => {
    return TEAM_MEMBERS.filter(m => m.teamId === activeFolderId);
  }, [activeFolderId]);

  return (
    <section id="crew" className="team-credits-section">
      <div className="section-container" style={{ paddingBottom: '1.5rem', paddingTop: '0' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="cyber-badge font-rajdhani" style={{ marginBottom: '0.8rem' }}>
            <Terminal size={14} /> CREW MANIFEST
          </div>
          <h2 className="section-title">WHO WORKED ON THIS EVENT</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Browse department folders to meet the organizers, engineers, and creators behind Jordan 2076.
          </p>
        </div>
      </div>

      <div className="team-credits-container">
        {/* Sleek Minimalist Explorer Window */}
        <div className="cyber-explorer-window">
          {/* Top Window Header Bar */}
          <div className="cyber-explorer-header">
            <div className="cyber-win-dots">
              <span className="cyber-dot red" />
              <span className="cyber-dot yellow" />
              <span className="cyber-dot green" />
            </div>
            <div className="cyber-win-title font-rajdhani">
              FILE EXPLORER // C:\CREW\{activeFolder.name}
            </div>
            <div className="cyber-win-status font-rajdhani">
              {folderMembers.length} FILES
            </div>
          </div>

          {/* Folder Navigation Bar (Minimal Tabs) */}
          <div className="cyber-folders-bar">
            {TEAM_FOLDERS.map((folder) => {
              const isActive = activeFolderId === folder.id;
              return (
                <button
                  key={folder.id}
                  className={`cyber-folder-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFolderId(folder.id)}
                >
                  {isActive ? <FolderOpen size={14} /> : <Folder size={14} />}
                  <span>{folder.title}</span>
                </button>
              );
            })}
          </div>

          {/* File Explorer Content Area */}
          <div className="cyber-explorer-body">
            <div className="cyber-files-grid">
              {folderMembers.map((member) => (
                <div key={member.id} className="cyber-file-card">
                  {/* Image Frame */}
                  <div className="cyber-file-photo-wrap">
                    <img src={member.avatar} alt={member.name} className="cyber-file-photo" />
                    <div className="cyber-photo-overlay" />
                  </div>

                  {/* Member Name and Role Centered Directly Underneath */}
                  <div className="cyber-file-details">
                    <div className="cyber-file-filename">{member.filename}</div>
                    <div className="cyber-file-name">{member.name}</div>
                    <div className="cyber-file-role">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minimal Status Footer */}
          <div className="cyber-explorer-footer font-rajdhani">
            <span>LOCATION: C:\CREW\{activeFolder.name}</span>
            <span>STATUS: READ-ONLY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
