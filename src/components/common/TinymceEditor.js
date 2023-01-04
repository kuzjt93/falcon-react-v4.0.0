import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import AppContext from 'context/Context';
import { getColor } from 'helpers/utils';

const TinymceEditor = ({ value, handleChange, height = '50vh' }) => {
  const {
    config: { isDark, isRTL }
  } = useContext(AppContext);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.dom.addStyle(
        `body{color: ${getColor('white')} !important;}`
      );
    }
  }, [isDark]);

  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      onEditorChange={handleChange}
      apiKey={process.env.REACT_APP_TINYMCE_APIKEY}
      init={{
        height,
        menubar: false,
        content_style: `body { color: ${getColor('black')} }`,
        mobile: {
          theme: 'mobile',
          toolbar: ['undo', 'bold']
        },
        statusbar: false,
        plugins: 'link image lists table media directionality',
        toolbar:
          'styleselect | bold italic link bullist numlist image blockquote table media undo redo',

        directionality: isRTL ? 'rtl' : 'ltr',
        theme_advanced_toolbar_align: 'center'
      }}
    />
  );
};

TinymceEditor.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  height: PropTypes.string
};

export default TinymceEditor;
