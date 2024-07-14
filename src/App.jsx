import React, { useState } from 'react';
import notificationsData from './notifications';
import './App.css';

const Notification = ({ notification, clearNotification }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{notification.name}</h5>
      <p className="card-text">{notification.message}</p>
      <button className="btn btn-danger" onClick={() => clearNotification(notification.id)}>Clear</button>
    </div>
  </div>
);

const NotificationList = ({ children }) => (
  <div className="notification-list">
    {children}
  </div>
);

const App = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="app container mt-5">
      <h1>Notifications ({notifications.length})</h1>
      <button className="btn btn-warning mb-3" onClick={clearAllNotifications}>Clear All</button>
      <NotificationList>
        {notifications.map(notification => (
          <Notification 
            key={notification.id} 
            notification={notification} 
            clearNotification={clearNotification} 
          />
        ))}
      </NotificationList>
    </div>
 );
};

export default App;