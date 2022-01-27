import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Links from './components/Links/Links';
import HeadingsList from './components/HeadingsList';
import GeneralData from './components/GeneralData';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [validUrl, setValidUrl] = useState(true);
  const [apiData, setApiData] = useState({
    wordCount: null,
    links: null,
    headings: null,
    canonical: null,
  });
  const serverUrl = 'https://seoer-server.herokuapp.com';
  //const serverUrl = 'http://localhost:8080';

  function isUrl(s) {
    var regexp =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }

  useEffect(() => {
    isUrl(url)
      ? axios
          .all([
            axios.get(`${serverUrl}/api/seo/wordcount?targeturl=${encodeURIComponent(url)}`),
            axios.get(`${serverUrl}/api/seo/links?targeturl=${encodeURIComponent(url)}`),
            axios.get(`${serverUrl}/api/seo/headings?targeturl=${encodeURIComponent(url)}`),
            axios.get(`${serverUrl}/api/seo/canonical?targeturl=${encodeURIComponent(url)}`),
          ])
          .then(data => {
            setApiData({
              wordCount: data[0].data,
              links: data[1].data,
              headings: data[2].data,
              canonical: data[3].data,
            });
          })
      : setValidUrl(false);
    setLoading(false);
  }, [loading]);

  function handleButtonClick(textFieldValue) {
    setLoading(true);
    setUrl(textFieldValue);
  }

  return (
    <div className='container'>
      <Search setValidUrl={setValidUrl} handleClick={handleButtonClick} loading={loading} />
      <div className='cards-container'>
        <Links data={apiData} />
        <HeadingsList data={apiData} />
        <GeneralData data={apiData} />
      </div>
    </div>
  );
};

export default App;
