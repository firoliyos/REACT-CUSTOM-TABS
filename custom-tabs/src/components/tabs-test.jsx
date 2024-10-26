import Tabs from "./tabs"

export default function TabsTest() {

    function SomeRandomContent(){
        return <h1>SOME RANDOM CONTENT</h1>
    }
    const tabs = [
        {
            label: 'Tab 1',
            content : <h1>THIS IS CONTENT FOR TAB 1</h1>
        },
        {
            label: 'Tab 2',
            content : <h1>THIS IS CONTENT FOR TAB 2</h1>
        },
        {
            label: 'Tab 3',
            content: <SomeRandomContent />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />
}





















// import Tabs from "./tabs"

// function RandomComponent() {
//     return <h1>Some random content</h1>
// }
// export default function TabTest() {

//     const tabs = [
//         {
//             label: 'Tab 1',
//             content: <div>This is content for Tab 1</div>
//         },
//         {
//             label: 'Tab 2',
//             content: <div>This is content for Tab 2</div>
//         },
//         {
//             label: 'Tab 3',
//             content: <RandomComponent />
//         }
//     ]       
//     function handleChange(currentTabIndex) {
//        console.log(currentTabIndex)
//     }
//     return <Tabs tabsContent={tabs} onChange={handleChange}/>
    
// }