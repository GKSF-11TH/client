import React from 'react';
import { useParams } from 'react-router-dom';

const BoothDetail = () => {
  const { boothId } = useParams();
  return (
    <div>
      <h1>Booth Detail Page {boothId}</h1>
    </div>
  );
};

export default BoothDetail;
