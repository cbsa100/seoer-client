import React from 'react';
import { BulletList } from 'react-content-loader';

const HeadingsList = ({ data }) => {
  console.log(data);
  return (
    <div className='card'>
      <h2>רשימת כותרות</h2>

      {data.headings ? (
        <>
          <div>
            {data.headings.h1 && data.headings.h1.length > 1 ? (
              <div className='warning'>יש יותר מכותרת ראשית אחת!</div>
            ) : data.headings.h1.length === 0 ? (
              <div className='warning'>אין כותרת ראשית בדף</div>
            ) : (
              <div>
                <b>{data.headings.h1[0]}</b>
              </div>
            )}
          </div>
          <div className='list'>
            <ul>
              {data.headings.h.map(e => (
                <li>{e}</li>
              ))}
            </ul>
          </div>
        </>
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

export default HeadingsList;
