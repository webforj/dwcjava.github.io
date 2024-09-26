/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/react';
import { Tooltip, Chip } from '@mui/material'; 
import StyleIcon from '@mui/icons-material/Style';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GithubCache from './GithubCache';

export default function JavadocLink( { type, location, top, children, code, suffix } ) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        let latestTag = await GithubCache.getLatestTag();
        if(!latestTag){
          latestTag = "23.05"
        }
        setUrl("https://javadoc.io/doc/com.webforj/webforj-" + type + "/" + latestTag + "/" + location + ".html" + suffix)
      } catch (error) {
        console.error('Error fetching latest release:', error);
      }
    };
    
    // fetchLatestRelease();
    if(!suffix){
      suffix = ""
    }
    setUrl("https://javadoc.io/doc/com.webforj/webforj-" + type + "/latest/" + location + ".html" + suffix)
  }, []);

  const mainStyles = css`

    ${ top && css`
    margin-bottom: 1em;
    margin-left: 0.5em;
    float: right;
    `}
  `;

  const apiStyles = css`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;

  return (
    <>
    {
    top === 'true' && (
      <Tooltip title="JavaDoc" arrow css={mainStyles}>
        <Chip css={apiStyles} label='Java API' component="a" href={url} icon={<AutoStoriesIcon />} clickable={true} color='primary' target="_blank" />
      </Tooltip>
    )
    }
  {
    top !== 'true' && !code && (
      <div css={mainStyles}>
        <a href={url} target="_blank">{children}</a>
      </div>
    )
  }
  {
    top !== 'true' && code && (
      <div css={mainStyles}>
        <code>
          <a href={url} target="_blank">{children}</a>
        </code>
      </div>
    )
  }
    </>
  );
}
