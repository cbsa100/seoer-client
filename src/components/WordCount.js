import React from 'react';
import { Code } from 'react-content-loader';

const WordCount = ({ data }) => {
  return (
    <div className='card'>
      <h2>ספירת מילים</h2>
      {data.wordCount ? (
        <div className='center'>
          <div className='big-text'>{data.wordCount.toLocaleString()} מילים</div>
          <div>כמות המילים שיש בדף</div>
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

export default WordCount;
