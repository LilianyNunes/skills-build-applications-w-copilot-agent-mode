import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://[congenial-disco-9wr69jg44pvhprrv]-8000.app.github.dev/api/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">Workouts</h1>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration (minutes)</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout.id}>
                <td>{workout.name}</td>
                <td>{workout.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;