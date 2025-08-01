export const logEvent = (eventType, details) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    event: eventType,
    ...details
  };
  // Store logs in localStorage (simulate external logging)
  let logs = JSON.parse(localStorage.getItem('logs')) || [];
  logs.push(logEntry);
  localStorage.setItem('logs', JSON.stringify(logs));
};
