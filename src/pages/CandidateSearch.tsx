import { useState} from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';

const dummyCandidate: Candidate = {
  id: 1,
  name: "Octocat",
  username: "octocat",
  location: "UK, London",
  email: "octocat@github.com",
  company: "Github",
  bio: "I'm the mascot for everyone's favorite version control system!",
  avatar_url: "https://github.com/octocat.png",
};

export const CandidateSearch = () => {
  const [candidate] = useState(dummyCandidate);

  return (
    <div style={{
      background: "linear-gradient(to bottom, #00004d, #000000)",
      minHeight: "100vh",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        margin: "1rem",
        fontWeight: "bold",
      }}>Candidate Search</h1>
      <div style={{
        backgroundColor: "#fff",
        borderRadius: "1rem",
        overflow: "hidden",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}>
        <img src={candidate.avatar_url} alt={candidate.name} style={{ width: "100%" }} />
        <div style={{ backgroundColor: "black", color: "white", padding: "1rem" }}>
          <h2 style={{ margin: "0.5rem 0" }}>
            {candidate.name} <em>({candidate.username})</em>
          </h2>
          <p style={{ margin: "0.5rem 0" }}>Location: {candidate.location}</p>
          <p style={{ margin: "0.5rem 0" }}>
            Email: <a href={`mailto:${candidate.email}`} style={{ color: "#1e90ff" }}>{candidate.email}</a>
          </p>
          <p style={{ margin: "0.5rem 0" }}>Company: {candidate.company}</p>
          <p style={{ margin: "0.5rem 0" }}>Bio: {candidate.bio}</p>
        </div>
      </div>
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button style={{
          background: "red",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          border: "none",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}>–</button>
        <button style={{
          background: "green",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          border: "none",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}>+</button>
      </div>
    </div>
  );
};