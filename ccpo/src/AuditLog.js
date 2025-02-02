import React from 'react';

const AuditLog = ({ logs }) => {
  return (
    <div>
      <h2>Audit Log</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            {log.timestamp}: {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLog;
