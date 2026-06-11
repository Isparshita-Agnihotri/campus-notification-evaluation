const notifications = [
    {
      ID: "1",
      Type: "Placement",
      Message: "AMD hiring",
      Timestamp: "2026-04-22 17:49:42"
    },
    {
      ID: "2",
      Type: "Result",
      Message: "mid-sem",
      Timestamp: "2026-04-22 17:50:42"
    },
    {
      ID: "3",
      Type: "Event",
      Message: "farewell",
      Timestamp: "2026-04-22 17:51:42"
    },
    {
      ID: "4",
      Type: "Placement",
      Message: "CSX hiring",
      Timestamp: "2026-04-22 17:52:42"
    }
  ];
  
  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
  };
  
  function calculateScore(notification) {
    const time =
      new Date(notification.Timestamp).getTime();
  
    return (
      weights[notification.Type] * 10000000000000 +
      time
    );
  }
  
  const topNotifications = notifications
    .map(n => ({
      ...n,
      score: calculateScore(n)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
  
  console.table(topNotifications);
