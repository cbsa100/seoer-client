import React from 'react';
import { Code } from 'react-content-loader';

const WordCount = ({ data }) => {
  return (
    <div className='card'>
      <h2>נתונים על העמוד</h2>
      {data.wordCount ? (
        <div className='center'>
          <div>
            <div className='big-text'>{data.wordCount.toLocaleString()} מילים</div>
            <div>כמות המילים שיש בדף</div>
          </div>
          <div>
            {data.canonical[1] === data.canonical[0] ? (
              <>
                <div className='big-text'>כתובת הקנוניקל תקינה</div>
                <div className='url success'>{decodeURI(data.canonical[0])}</div>
              </>
            ) : (
              <>
                <div className='big-text'>כתובת הקנוניקל לא תקינה</div>
                <div className='url warning'>{decodeURI(data.canonical[0])}</div>
              </>
            )}
          </div>
          <div>
            <div className='big-text'>Robots.txt</div>
            <div>{data.robots}</div>
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

export default WordCount;
