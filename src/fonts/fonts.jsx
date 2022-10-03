import { createGlobalStyle } from "styled-components";

import RighteousWoff from './Righteous.woff';
import RighteousWoff2 from './Righteous.woff2';
import RecursiveWoff from './Recursive Regular.woff';
import RecursiveWoff2 from './Recursive Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Righteous';
        src: local('Righteous'), local('Righteous'),
        url(${RighteousWoff2}) format('woff2'),
        url(${RighteousWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Recursive';
        src: local('Recursive'), local('Recursive'),
        url(${RecursiveWoff2}) format('woff2'),
        url(${RecursiveWoff}) format('woff');
        font-weight: 400;
        font-style:normal;
    }
`