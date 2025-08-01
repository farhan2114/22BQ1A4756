import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { isValidURL, isValidShortcode, isValidMinutes } from '../utils/validation';
import { logEvent } from '../middleware/loggerMiddleware';

const URLForm = () => {
  const [urls, setUrls] = useState([{ url: '', validity: '', code: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleAddField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { url: '', validity: '', code: '' }]);
    }
  };

  const handleSubmit = () => {
    const results = urls.map(({ url, validity, code }) => {
      if (!isValidURL(url)) return { error: 'Invalid URL' };

      const shortCode = code && isValidShortcode(code) ? code : Math.random().toString(36).slice(2, 8);
      const validMinutes = isValidMinutes(validity) ? +validity : 30;
      const expiresAt = new Date(Date.now() + validMinutes * 60000).toISOString();

      const shortURL = `http://localhost:3000/${shortCode}`;
      const data = { shortCode, longURL: url, expiresAt, clicks: [] };

      localStorage.setItem(shortCode, JSON.stringify(data));
      logEvent("Shortened URL created", { shortCode, longURL: url });

      return data;
    });

    alert("Shortened URLs created. Check below.");
    window.dispatchEvent(new Event("storage")); // trigger update
  };

  return (
    <div>
      {urls.map((item, index) => (
        <Grid container spacing={2} key={index} sx={{ my: 1 }}>
          <Grid item xs={4}>
            <TextField
              fullWidth label="Long URL" value={item.url}
              onChange={(e) => handleChange(index, 'url', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth label="Validity (minutes)" value={item.validity}
              onChange={(e) => handleChange(index, 'validity', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth label="Preferred Shortcode" value={item.code}
              onChange={(e) => handleChange(index, 'code', e.target.value)}
            />
          </Grid>
        </Grid>
      ))}
      <Button onClick={handleAddField}>Add URL</Button>
      <Button variant="contained" sx={{ ml: 2 }} onClick={handleSubmit}>Shorten</Button>
    </div>
  );
};

export default URLForm;
