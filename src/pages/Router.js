import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout.context';

// Routes/pages
import Home from './routes/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default Router;
