import React from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';

function OnlineStatus() {
  const isOnline = useOnlineStatus();

  return (
    <span className="status">
      {isOnline ? 'En ligne ✅' : 'Hors ligne ❌'}
    </span>
  );
}

export default OnlineStatus;