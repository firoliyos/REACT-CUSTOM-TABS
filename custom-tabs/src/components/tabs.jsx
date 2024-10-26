import { useState } from "react"


export default function Tabs({tabsContent, onChange}) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

    return( 
      <div className="wrapper">
        <div className="heading">
           {
            tabsContent.map((tabItem) => {<div key={tabItem.label}>
              <span className="label">{tabItem.label}</span>
            </div>})
           }
        </div>
        <div className="content">
          {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
          }
        </div>
      </div>
    )
}















// import { useState } from "react"
// import "./tabs.css"

// export default function Tabs({tabsContent, onChange}) {

//     const [currentTabIndex, setCurrentTabIndex] = useState(0)

//     function handleOnClick(getCurrentIndex) {
//       setCurrentTabIndex(getCurrentIndex)
//       onChange(getCurrentIndex)
//     }
//     return(
//       <div className="wrapper">
//         <div className="heading">
//           {
//             tabsContent.map((tabItem, index) => (
//                 <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
//                 onClick={() => handleOnClick(index)} 
//                 key={tabItem.label}>
//                  <span className="label">{tabItem.label}</span>   
//                 </div>
//             ))
//            } 
//         </div>
//         <div className="content" style={{color: 'red'}}>
//         {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
//         </div>
//       </div>  
//     )
// }