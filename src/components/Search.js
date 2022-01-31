import React, { useState } from 'react';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const Search = ({ loading, setValid, handleClick }) => {
  const [textFieldValue, setTextFieldValue] = useState('');
  return (
    <div className='search-container'>
      <TextField
        id='domain'
        type='url'
        value={textFieldValue}
        onChange={e => {
          setTextFieldValue(e.target.value);
          setValid(true);
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
