import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

import GifExpertApp from './GifExpertApp';

import './index.css';

const divRoot = document.querySelector('#root');

const root = createRoot(divRoot);

root.render(<GifExpertApp />);
