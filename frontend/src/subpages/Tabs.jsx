import React from 'react';

const tablist = ['Showcase', 
    'Register/Login', 
    'News',
    'Social Media', 
    'Sponsors', 
    'Other Events'];


const Tabs = (props) =>{
    return(
        tablist.join('\t          ')
    );
}

export default Tabs;
