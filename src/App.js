import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Links from './components/Links/Links';
import HeadingsList from './components/HeadingsList';
import GeneralData from './components/GeneralData';
import Meta from './components/Meta';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [valid, setValid] = useState(true);
  const [mount, setMount] = useState(true);
  const [apiData, setApiData] = useState({
    wordCount: null,
    links: null,
    headings: null,
    canonical: null,
    meta: null,
    robots: null,
  });
  //const serverUrl = 'https://seoer-server.herokuapp.com';
  const serverUrl = 'http://localhost:8080';

  function isUrl(s) {
    var regexp =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }

  useEffect(() => {
    !mount
      ? isUrl(url)
        ? axios
            .all([
              axios.get(`${serverUrl}/api/seo/wordcount?targeturl=${encodeURIComponent(url)}`),
              axios.get(`${serverUrl}/api/seo/links?targeturl=${encodeURIComponent(url)}`),
              axios.get(`${serverUrl}/api/seo/headings?targeturl=${encodeURIComponent(url)}`),
              axios.get(`${serverUrl}/api/seo/canonical?targeturl=${encodeURIComponent(url)}`),
              axios.get(`${serverUrl}/api/seo/meta?targeturl=${encodeURIComponent(url)}`),
              axios.get(`${serverUrl}/api/seo/robots?targeturl=${encodeURIComponent(url)}`),
            ])
            .then(data => {
              if (data[0].data === 'fail') {
                setValid(false);
              } else {
                setApiData({
                  wordCount: data[0].data,
                  links: data[1].data,
                  headings: data[2].data,
                  canonical: data[3].data,
                  meta: data[4].data,
                  robots: data[5].data,
                });
              }
              setLoading(false);
            })
        : handleValid()
      : setMount(false);
  }, [loading]);

  function handleButtonClick(textFieldValue) {
    setLoading(true);
    setUrl(textFieldValue);
    setApiData({
      wordCount: null,
      links: null,
      headings: null,
      canonical: null,
      meta: null,
      robots: null,
    });
  }

  function handleValid() {
    setLoading(false);
    setValid(false);
  }

  return (
    <div className='container'>
      <Search handleClick={handleButtonClick} setValid={setValid} loading={loading} />
      {!valid ? <div className='warning'> כתובת לא תקינה </div> : null}
      <div className='cards-container'>
        <HeadingsList data={apiData} />
        <GeneralData data={apiData} />
        <Links data={apiData} />
        <Meta data={apiData} />
      </div>
    </div>
  );
};

export default App;
