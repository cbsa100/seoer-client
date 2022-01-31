import React, { useState } from 'react';
import { BulletList } from 'react-content-loader';

const HeadingsList = ({ data }) => {
  const [headingToShow, setHeadingToShow] = useState('h');
  return (
    <div className='card'>
      <h2>רשימת כותרות</h2>

      {data.headings ? (
        <div>
          <div>
            {data.headings.h1 && data.headings.h1.length > 1 ? (
              <div className='warning'>יש יותר מכותרת ראשית אחת!</div>
            ) : data.headings.h1.length === 0 ? (
              <div className='warning'>אין כותרת ראשית בדף</div>
            ) : null}
          </div>
          <div className='buttons-list'>
            <button
              className={headingToShow === 'h' ? 'active-button' : null}
              disabled={!data.headings.h.length > 0}
              onClick={e => setHeadingToShow(e.target.dataset.value)}
              data-value='h'
            >
              All
            </button>

            <button
              className={headingToShow === 'h1' ? 'active-button' : null}
              disabled={!data.headings.h1.length > 0}
              onClick={e => setHeadingToShow(e.target.dataset.value)}
              data-value='h1'
            >
              H1
            </button>

            <button
              className={headingToShow === 'h2' ? 'active-button' : null}
              disabled={!data.headings.h2.length > 0}
              onClick={e => setHeadingToShow(e.target.dataset.value)}
              data-value='h2'
            >
              H2
            </button>

            <button
              className={headingToShow === 'h3' ? 'active-button' : null}
              disabled={!data.headings.h3.length > 0}
              onClick={e => setHeadingToShow(e.target.dataset.value)}
              data-value='h3'
            >
              H3
            </button>

            <button
              className={headingToShow === 'h4' ? 'active-button' : null}
              disabled={!data.headings.h4.length > 0}
              onClick={e => setHeadingToShow(e.target.dataset.value)}
              data-value='h4'
            >
              H4
            </button>

            <button
              className={headingToShow === 'h5' ? 'active-button' : null}
              disabled={!data.headings.h5.length > 0}
              onClick={e => setHeadingToShow(e.target.dataset.value)}
              data-value='h5'
            >
              H5
            </button>

            <button
              className={headingToShow === 'h6' ? 'active-button' : null}
              disabled={!data.headings.h6.length > 0}
              onClick={e => setHeadingToShow(e.target.dataset.value)}
              data-value='h6'
            >
              H6
            </button>
          </div>
          <div className='list'>
            <ul>
              {data.headings[headingToShow].map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
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

export default HeadingsList;
