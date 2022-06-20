import React from 'react';
import Content from './Content/Content';
import "./Main.css"
import Pagination from './pagination/Pagination';
import Tabs from './Tabs/Tabs';


const Main = () => {
    return (
        <div className='container__main'>
            <div className="name__content">Blog</div>
            <Tabs/>
            <Content/>
            <Pagination/>
        </div>
    );
};

export default Main;