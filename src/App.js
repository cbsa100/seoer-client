import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Links from './components/Links/Links';
import HeadingsList from './components/HeadingsList';
import WordCount from './components/WordCount';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [apiData, setApiData] = useState({ wordCount: null, links: null, headings: null });

  function isUrl(s) {
    var regexp =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }

  useEffect(() => {
    isUrl(url) &&
      axios
        .all([
          axios.get(`http://localhost:8080/api/seo/wordcount?targeturl=${encodeURIComponent(url)}`),
          axios.get(`http://localhost:8080/api/seo/links?targeturl=${encodeURIComponent(url)}`),
          axios.get(`http://localhost:8080/api/seo/headings?targeturl=${encodeURIComponent(url)}`),
        ])
        .then(data => {
          setApiData({ wordCount: data[0].data, links: data[1].data, headings: data[2].data });

          setLoading(false);
        });
  }, [url]);

  function handleButtonClick(textFieldValue) {
    setLoading(true);
    setUrl(textFieldValue);
  }

  return (
    <div className='container'>
      <Search handleClick={handleButtonClick} loading={loading} />
      <div className='cards-container'>
        <Links data={apiData} />
        <HeadingsList data={apiData} />
        <WordCount data={apiData} />
      </div>
    </div>
  );
};

export default App;
