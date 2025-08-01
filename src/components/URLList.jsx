import React, { useEffect, useState } from 'react';
import { List, ListItem, Typography } from '@mui/material';

const URLList = () => {
  const [urls, setUrls] = useState([]);

  const fetchData = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.length <= 10 && key !== "logs") {
        items.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    setUrls(items);
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("storage", fetchData);
    return () => window.removeEventListener("storage", fetchData);
  }, []);

  return (
    <List>
      {urls.map((item, idx) => (
        <ListItem key={idx}>
          <Typography>{item.longURL} → <a href={`/${item.shortCode}`}>{item.shortCode}</a> (Expires: {item.expiresAt})</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default URLList;
