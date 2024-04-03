import { TETabs, TETabsContent, TETabsItem, TETabsPane } from "tw-elements-react";
import { ButtonPropsType } from "../../components/Button";
import { themeClass } from "../../constants/constants";
import { useState } from "react";
import Card, { CardPropsType } from "../../components/Card";

export interface TabItemPropsType {
    key: string,
    title: string,
    content: CardPropsType[],
    disabled: boolean
}

export default function FeedbackIndex() {

    const actionButtons: ButtonPropsType[] = [
        {
            customClasses: `${themeClass.themeBgGradientPrimary} text-white`,
            childCustomClasses: 'py-1 px-3', label: "View", handleClick: () => { },
        }
    ];

    const tabList: TabItemPropsType[] = [
        {
            key: 'feature',
            title: 'Feature',
            content: [
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                // { title: 'Great Feature', content: 'I Experienced this Amazing Feature, I Experienced this Amazing Feature, I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                // { title: 'Great Feature', content: 'I Experienced this Amazing Feature, I Experienced this Amazing Feature, I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                // { title: 'Great Feature', content: 'I Experienced this Amazing Feature, I Experienced this Amazing Feature, I Experienced this Amazing Feature', actionButtons: actionButtons },
                { title: 'Great Feature', content: 'I Experienced this Amazing Feature', actionButtons: actionButtons },
                // { title: 'Great Feature', content: 'I Experienced this Amazing Feature, I Experienced this Amazing Feature, I Experienced this Amazing Feature', actionButtons: actionButtons }
            ],
            disabled: false
        },
        {
            key: 'bug_report',
            title: 'Bug Report',
            content: [
                { title: 'This is the major issue', content: 'We should fix this issue', actionButtons: actionButtons }
            ],
            disabled: false
        },
        {
            key: 'improvement',
            title: 'Improvement',
            content: [
                { title: 'UI & UX Design Improvements', content: 'Here i improve UI & UX for Modal Box', actionButtons: actionButtons }
            ],
            disabled: false
        },
        {
            key: 'request',
            title: 'Request',
            content: [
                { title: 'Merge my pull request', content: 'Please merge my PR, that i recently created', actionButtons: actionButtons }
            ],
            disabled: false
        },
        {
            key: 'bug_fix',
            title: 'Bug Fix',
            content: [
                { title: 'All bugs are fixed now', content: 'Bugs Resolved & New Version is Released now', actionButtons: actionButtons }
            ],
            disabled: false
        }
    ];

    const [activeTab, setActiveTab] = useState([...tabList].shift());

    const handleTabButtonClick = (tabItem: any) => {
        if (tabItem.key === activeTab) {
            return;
        }
        setActiveTab(tabItem);
    };

    return (
        <div className="tabComponent main">
            <TETabs>
                {tabList.map((tabItem, key) => (
                    <TETabsItem key={key} active={tabItem.key === activeTab?.key}
                        onClick={() => handleTabButtonClick(tabItem)}
                        disabled={tabItem.disabled}
                    >
                        {tabItem.title}
                    </TETabsItem>
                ))}
            </TETabs>

            <TETabsContent className="tabContent">
                <TETabsPane show={true} className="tabPane flex">
                    {activeTab?.content?.map((paneItem: CardPropsType, paneKey: number) => (
                        <Card key={paneKey} title={paneItem.title} content={paneItem.content}
                            actionButtons={paneItem.actionButtons} badge={activeTab.title}
                            customClasses={'card'}
                        />
                    ))}
                </TETabsPane>
            </TETabsContent>
        </div>
    )
}
