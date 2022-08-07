import {useEffect , useState} from 'react';
export const ConvertTitleToSlug = (title) => {
    return title.replace(/ /g, '-');
};
