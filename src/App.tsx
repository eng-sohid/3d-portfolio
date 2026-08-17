import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Float,
  Stars,
  Sparkles,
  MeshDistortMaterial,
} from "@react-three/drei";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "about" | "skills" | "experience" | "projects" | "services" | "contact"
  >("about");

  return (
    <div className="app-container">
      {/* Multi-Color 3D Scene Background */}
      <Canvas camera={{ position: [0, 2, 8], fov: 55 }}>
        <ambientLight intensity={0.8} />
        {/* Multi-Color Lights (Cyan, Purple, Emerald) - NO RED */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={2.5}
          color="#00f3ff"
        />
        <pointLight position={[-10, -10, -5]} color="#7c3aed" intensity={3} />
        <pointLight position={[0, 10, -5]} color="#10b981" intensity={2} />

        <Sparkles count={220} scale={15} size={3} speed={0.4} color="#00f3ff" />
        <Stars
          radius={90}
          depth={50}
          count={3500}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />

        {/* Central 3D Object (Glowing Cyan & Violet Metallic Sphere) */}
        <Float speed={2.5} rotationIntensity={1.2} floatIntensity={0.8}>
          <mesh position={[0, 0.2, -1]}>
            <sphereGeometry args={[1.2, 64, 64]} />
            <MeshDistortMaterial
              color="#00f3ff"
              emissive="#1e1b4b"
              emissiveIntensity={0.8}
              attach="material"
              distort={0.45}
              speed={2.5}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>

        {/* Orbiting Sci-Fi Ring (Glowing Golden Yellow) */}
        <Float speed={1.8} rotationIntensity={1.5}>
          <mesh position={[0, 0.2, -1]} rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.1, 0.025, 16, 100]} />
            <meshStandardMaterial
              color="#facc15"
              emissive="#facc15"
              emissiveIntensity={2.5}
            />
          </mesh>
        </Float>

        {/* Floating Title */}
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.4}>
          <Text
            position={[0, 2.3, 0]}
            fontSize={0.7}
            color="#ffffff"
            letterSpacing={0.05}
          >
            MD SOHID MONDOL
          </Text>
          <Text
            position={[0, 1.7, 0]}
            fontSize={0.24}
            color="#00f3ff"
            letterSpacing={0.08}
          >
            SOFTWARE ENGINEER & GRAPHIC DESIGNER
          </Text>
        </Float>

        <gridHelper
          args={[60, 60, "#7c3aed", "#0284c7"]}
          position={[0, -1.8, 0]}
        />
        <OrbitControls
          makeDefault
          enableZoom={true}
          maxPolarAngle={Math.PI / 2 - 0.02}
        />
      </Canvas>

      {/* Navigation Bar */}
      <div className="nav-bar">
        {[
          { id: "about", label: "👤", title: "About" },
          { id: "skills", label: "⚡", title: "Skills" },
          { id: "experience", label: "🎓", title: "Education" },
          { id: "projects", label: "💼", title: "Projects" },
          { id: "services", label: "🎨", title: "Services" },
          { id: "contact", label: "✉️", title: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            title={item.title}
            className={`nav-btn ${activeTab === item.id ? "active" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Bottom Multi-Color Stats Bar */}
      <div className="stats-bar">
        <div>
          <span
            style={{ fontSize: "18px", fontWeight: "bold", color: "#00f3ff" }}
          >
            10+
          </span>
          <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
            Projects Built
          </p>
        </div>
        <div className="stat-divider" />
        <div>
          <span
            style={{ fontSize: "18px", fontWeight: "bold", color: "#a855f7" }}
          >
            CST
          </span>
          <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
            3rd Semester
          </p>
        </div>
        <div className="stat-divider" />
        <div>
          <span
            style={{ fontSize: "18px", fontWeight: "bold", color: "#10b981" }}
          >
            100%
          </span>
          <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8" }}>
            Dedication
          </p>
        </div>
      </div>

      {/* Right Content Panel */}
      <div className="content-panel">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="avatar-box">
            <img
              src="./profile.jpg"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
              alt="Profile"
              className="avatar-img"
            />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "18px", color: "#f8fafc" }}>
              MD Sohid Mondol
            </h3>
            <span
              style={{ fontSize: "12px", color: "#00f3ff", fontWeight: 500 }}
            >
              ● Open to Opportunities
            </span>
          </div>
        </div>

        {activeTab === "about" && (
          <div>
            <h2 className="gradient-title-cyan">About Me</h2>
            <p
              style={{ color: "#cbd5e1", fontSize: "14px", lineHeight: "1.7" }}
            >
              I am a passionate <strong>Software Engineer</strong>,{" "}
              <strong>Web Developer</strong>, and{" "}
              <strong>Graphic Designer</strong>. Currently studying Computer
              Science & Technology, I focus on constructing cutting-edge web
              applications and creative interactive UI/UX experiences.
            </p>
            <div
              style={{
                marginTop: "16px",
                background: "rgba(0, 243, 255, 0.08)",
                border: "1px solid rgba(0, 243, 255, 0.3)",
                padding: "14px",
                borderRadius: "14px",
              }}
            >
              <small style={{ color: "#00f3ff", fontWeight: "bold" }}>
                SPECIALTIES
              </small>
              <p
                style={{
                  margin: "6px 0 0 0",
                  fontSize: "13px",
                  color: "#e2e8f0",
                }}
              >
                Full-Stack Web Engineering, Interactive 3D Web Systems, Python
                Automation & Brand Visuals.
              </p>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <h2 className="gradient-title-purple">Tech & Skills</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div>
                <small
                  style={{
                    color: "#00f3ff",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  DEVELOPMENT
                </small>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "6px",
                  }}
                >
                  {[
                    "JavaScript",
                    "Python",
                    "React.js",
                    "Three.js",
                    "HTML5 & CSS3",
                    "Git/GitHub",
                  ].map((s) => (
                    <span key={s} className="badge-cyan">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <small
                  style={{
                    color: "#10b981",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  DESIGN & VISUALS
                </small>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "6px",
                  }}
                >
                  {[
                    "Graphic Design",
                    "UI/UX Design",
                    "Image Editing",
                    "Video Editing",
                  ].map((s) => (
                    <span key={s} className="badge-green">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            <h2 className="gradient-title-cyan">Education & Work</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div
                style={{ borderLeft: "2px solid #00f3ff", paddingLeft: "12px" }}
              >
                <h4 style={{ margin: 0, fontSize: "15px", color: "#f1f5f9" }}>
                  Diploma in Computer Science & Tech
                </h4>
                <p
                  style={{
                    margin: "2px 0 0 0",
                    color: "#00f3ff",
                    fontSize: "12px",
                  }}
                >
                  Currently in 3rd Semester
                </p>
                <p
                  style={{
                    margin: "6px 0 0 0",
                    color: "#94a3b8",
                    fontSize: "12px",
                  }}
                >
                  Focusing on Data Structures, Web Development, and
                  Object-Oriented Programming.
                </p>
              </div>
              <div
                style={{ borderLeft: "2px solid #a855f7", paddingLeft: "12px" }}
              >
                <h4 style={{ margin: 0, fontSize: "15px", color: "#f1f5f9" }}>
                  Software & Graphic Designer
                </h4>
                <p
                  style={{
                    margin: "2px 0 0 0",
                    color: "#a855f7",
                    fontSize: "12px",
                  }}
                >
                  Freelance & Personal Projects
                </p>
                <p
                  style={{
                    margin: "6px 0 0 0",
                    color: "#94a3b8",
                    fontSize: "12px",
                  }}
                >
                  Building custom web applications, visual designs, and brand
                  profiles.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h2 className="gradient-title-gold">Projects</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {[
                {
                  title: "3D Interactive Portfolio",
                  tech: "React • Three.js • Vite",
                  desc: "Futuristic 3D portfolio with dynamic UI panels and ambient lighting.",
                },
                {
                  title: "Python Voice Assistant",
                  tech: "Python • Speech Recognition",
                  desc: "Smart automated assistant executing speech commands seamlessly.",
                },
                {
                  title: "Modern One-Page Portfolio",
                  tech: "HTML5 • CSS3 • JS",
                  desc: "Sleek, responsive web app featuring custom animations and layouts.",
                },
              ].map((proj, i) => (
                <div key={i} className="card-box">
                  <h4 style={{ margin: 0, fontSize: "14px", color: "#00f3ff" }}>
                    {proj.title}
                  </h4>
                  <small
                    style={{
                      color: "#facc15",
                      fontSize: "11px",
                      display: "block",
                      margin: "2px 0 4px 0",
                    }}
                  >
                    {proj.tech}
                  </small>
                  <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div>
            <h2 className="gradient-title-purple">My Services</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {[
                {
                  icon: "🌐",
                  title: "Web Development",
                  desc: "Responsive, fast, and modern web applications built using React & modern tools.",
                },
                {
                  icon: "🎨",
                  title: "Graphic & Banner Design",
                  desc: "Professional social banners, visual branding, photo editing, and assets.",
                },
                {
                  icon: "🤖",
                  title: "Python Scripting & Automation",
                  desc: "Custom desktop scripts, voice interfaces, and automated tasks.",
                },
              ].map((srv, i) => (
                <div
                  key={i}
                  className="card-box"
                  style={{ display: "flex", gap: "12px" }}
                >
                  <span style={{ fontSize: "22px" }}>{srv.icon}</span>
                  <div>
                    <h4
                      style={{ margin: 0, fontSize: "14px", color: "#f1f5f9" }}
                    >
                      {srv.title}
                    </h4>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        color: "#94a3b8",
                        fontSize: "12px",
                      }}
                    >
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h2 className="gradient-title-cyan">Get In Touch</h2>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: "13px",
                marginBottom: "16px",
              }}
            >
              Let's collaborate on your next big project!
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "13px",
              }}
            >
              <a
                href="https://github.com/eng-sohid"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  background: "rgba(0, 243, 255, 0.05)",
                  border: "1px solid rgba(0, 243, 255, 0.2)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  color: "#e2e8f0",
                  display: "block",
                }}
              >
                🌐 <strong>GitHub:</strong> github.com/sohid
              </a>
              <a
                href="https://www.linkedin.com/in/md-sohid-mondol"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  background: "rgba(168, 85, 247, 0.05)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  color: "#e2e8f0",
                  display: "block",
                }}
              >
                💼 <strong>LinkedIn:</strong> linkedin.com/in/sohid
              </a>

              <button
                onClick={() => alert("Resume Download clicked!")}
                className="btn-primary"
              >
                📄 Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
