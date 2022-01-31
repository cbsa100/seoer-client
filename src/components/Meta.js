import React from 'react';
import { Code } from 'react-content-loader';

const Meta = ({ data }) => {
  return (
    <div className='card'>
      <h2>תגיות מטא</h2>
      {data.wordCount ? (
        <div className='center'>
          <div>
            <div className='big-text'>מטא טייטל</div>
            {data.meta.title ? (
              <div className={data.meta.title > 60 ? 'warning' : 'success'}>{data.meta.title}</div>
            ) : (
              <div className='warning'> אין מטא טייטל</div>
            )}
            <div className='big-text'>מטא דסקריפשן</div>
            {data.meta.desc ? (
              <div className={data.meta.desc > 155 ? 'warning' : 'success'}>{data.meta.desc}</div>
            ) : (
              <div className='warning'> אין תיאור מטא </div>
            )}{' '}
          </div>
        </div>
      ) : (
        <>
          <Code style={{ display: 'block', margin: 'auto', marginTop: '40px' }} width={'80%'} />
          <Code style={{ display: 'block', margin: 'auto' }} width={'80%'} />
        </>
      )}
    </div>
  );
};

export default Meta;
