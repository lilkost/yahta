import { useDynamicAdapt } from '../js/dynamicAdapt.js';
import { handleClick } from './components/buttonsFn.js';
import { createCookieModal } from './components/modal.js';
import { accordion } from './components/accordion.js';

useDynamicAdapt();
handleClick();
createCookieModal();
accordion();