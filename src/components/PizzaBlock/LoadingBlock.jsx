import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            // width={280}
            // height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="142" cy="128" r="125" />
            <rect x="0" y="276" rx="4" ry="4" width="280" height="25" />
            <rect x="0" y="313" rx="4" ry="4" width="280" height="69" />
            <rect x="0" y="390" rx="0" ry="0" width="96" height="39" />
            <rect x="60" y="409" rx="0" ry="0" width="1" height="1" />
            <rect x="147" y="391" rx="26" ry="26" width="129" height="51" />
        </ContentLoader>
    )
};

export default LoadingBlock;