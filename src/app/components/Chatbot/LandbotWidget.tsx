// // components/Chatbot/LandbotWidget.tsx
// import React, { useEffect } from "react";

// const LandbotWidget = () => {
//   useEffect(() => {
//     // Check if window is defined (client-side only)
//     if (typeof window !== "undefined") {
//       const script = document.createElement("script");
//       script.src = "https://cdn.landbot.io/landbot-widget/landbot-widget-1.0.0.js";
//       script.async = true;
//       script.defer = true;
//       script.setAttribute("SameSite", "None; Secure");

//       // Append script to the body
//       document.body.appendChild(script);

//       script.onload = () => {
//         try {
//           // Attempt to initialize Landbot
//           new window.LandbotFrameWidget({
//             container: "#myLandbot",
//             index: "https://landbot.online/v3/H-2594162-2VTBTYSJ3VUHV3BC/index.html",
//           });
//         } catch (error) {
//           console.error("Error initializing Landbot:", error);
//         }
//       };

//       // Cleanup script on component unmount
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, []);

//   return <div id="myLandbot" style={{ width: "100%", height: "500px" }}></div>;
// };

// export default LandbotWidget;
