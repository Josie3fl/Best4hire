// const SavedCandidates = () => {
//   return (
//     <>
//       <h1>Potential Candidates</h1>
//     </>
//   );
// };
import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";
import { fetchCandidates } from "../api/API";
import "./CandidateTable.css"; // styling

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchCandidates();
      setCandidates(data);
    };
    load();
  }, []);

  const rejectCandidate = (id: number) => {
    setCandidates(candidates.filter((c) => c.id !== id));
  };

  return (
    <div className="container">
      <h1>Potential Candidates</h1>
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td><img src={c.avatar_url} alt={c.username} className="avatar" /></td>
              <td><strong>{c.name}</strong><br /><em>({c.username})</em></td>
              <td>{c.location}</td>
              <td><a href={`mailto:${c.email}`}>{c.email}</a></td>
              <td>{c.company}</td>
              <td>{c.bio}</td>
              <td>
                <button className="reject-btn" onClick={() => rejectCandidate(c.id)}>➖</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;
