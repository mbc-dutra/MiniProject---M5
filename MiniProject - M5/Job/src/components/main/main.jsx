import axios from "axios";
import { useEffect, useState } from "react";

const Job = () => {
  const [jobs, setJobs] = useState([]);

  const allJobs = async () => {
    try {
      const res = await axios.get("http://localhost:4000/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error("Erro ao buscar as vagas", error);
    }
  };

  useEffect(() => {
    allJobs();
  }, []);

  return (
    <div>
      <h1>Vagas Disponíveis</h1>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      ) : (
        <p>Carregando vagas...</p>
      )}
    </div>
  );
};

export default Job;
