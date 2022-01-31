import React from 'react';
import { BulletList } from 'react-content-loader';

const Outlinks = ({ data }) => {
  return (
    <div>
      <h2>קישורים לאתרים אחרים</h2>
      {data ? (
        <div className='list'>
          <ul>
            {data.outlinks.map((e, i) => (
              <li key={i}>
                <a href={e.href}>
                  {e.text && !e.text.trim()
                    ? 'קישור ללא טסקט'
                    : e.text === ''
                    ? 'קישור ללא טסקט'
                    : e.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <BulletList
            style={{ display: 'block', margin: 'auto', marginTop: '40px' }}
            width={'80%'}
          />
        </>
      )}
    </div>
  );
};

export default Outlinks;
