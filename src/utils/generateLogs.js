export const generateLog = (user) => {
  const actions = ["LOGIN_SUCCESS", "LOGIN_FAILED", "SERVICE_START", "DEPLOY"];
  const severity = ["INFO", "WARN", "ERROR", "SUCCESS"];

  return {
    id: Date.now(),
    time: new Date().toLocaleTimeString(),
    username: user.username,   
    user: user.email,
    action: actions[Math.floor(Math.random() * actions.length)],
    severity: severity[Math.floor(Math.random() * severity.length)],
    category: "AUTH"
  };
};