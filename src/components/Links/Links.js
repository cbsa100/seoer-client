import React from 'react';
import Inlinks from './Inlinks';
import Outlinks from './Outlinks';

const Links = ({ data }) => {
  return (
    <>
      <div className='card'>
        <Inlinks data={data.links} />
      </div>
      <div className='card'>
        <Outlinks data={data.links} />
      </div>
    </>
  );
};

export default Links;
