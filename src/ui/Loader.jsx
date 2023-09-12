import React from 'react';

export const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-500/20 backdrop-blur-sm">
      <span className="loader"></span>
    </div>
  );
};
