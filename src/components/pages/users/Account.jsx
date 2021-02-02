import React, { useState } from 'react';

const Account = (props) => {
    const [currentTab, setCurrentTab] = useState({name: "profile"})
    const [tabs] = useState([
        { tabKey: 'profile', tabTitle: 'Mon profile'},
        { tabKey: 'posts', tabTitle: 'Mes articles'},
    ])
    return (
        <>
        <div className="tabs">
            <ul>
                {tabs.map((tab, index) => 
                <li className={`tabs-pane ${currentTab.name === tab.tabKey ? "active" : ""}`}>
                    <span onClick={() => }></span>
                </li>
                )}
            </ul>
        </div>
        </>
    );
};

export default Account;