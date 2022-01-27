import React, { useState } from 'react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Search = ({ loading, handleClick, setValidUrl }) => {
  const [textFieldValue, setTextFieldValue] = useState('');
  return (
    <div className='search-container'>
      <TextField
        id='domain'
        type='url'
        value={textFieldValue}
        onChange={e => {
          setValidUrl(true);
          setTextFieldValue(e.target.value);
        }}
        sx={{
          maxWidth: 1,
          width: 500,
        }}
        label='כתובת האתר'
      />
      <LoadingButton
        loading={loading}
        variant='contained'
        onClick={() => handleClick(textFieldValue)}
      >
        בדיקה
      </LoadingButton>
    </div>
  );
};

export default Search;
