import React from 'react';
import { BulletList } from 'react-content-loader';

const inlinks = ({ data }) => {
  return (
    <>
      <h2>קישורים לדפים באתר</h2>
      {data ? (
        <div className='list'>
          <ul>
            {data.inlinks.map(e => (
              <li>
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
    </>
  );
};

export default inlinks;
