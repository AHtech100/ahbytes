// "use client"
// import { useEffect } from 'react';

// const NorbyChatWidget = () => {
//   useEffect(() => {
//     (function (w, d, s, o, f, js, fjs) {
//       w[o] =
//         w[o] ||
//         function () {
//           (w[o].q = w[o].q || []).push(arguments);
//         };
//       js = d.createElement(s);
//       fjs = d.getElementsByTagName(s)[0];
//       js.id = o;
//       js.src = f;
//       js.async = 1;
//       fjs.parentNode.insertBefore(js, fjs);
//     })(
//       window,
//       document,
//       'script',
//       'nw',
//       'https://chat.norby.io/widget'
//     );

//     nw('init', {
//       apiKey: 'b20d3038-1172-4107-bd8a-fa696c49c3c7',
//       serviceBaseUrl: 'https://api.norby.io',
//       lang: 'en',
//       languageList: [
//         'AR',
//         'DA',
//         'DE',
//         'EE',
//         'EN',
//         'ES',
//         'FI',
//         'FR',
//         'IT',
//         'JA',
//         'NO',
//         'PL',
//         'PT',
//         'RU',
//         'SV',
//         'TR',
//         'UA',
//         'ZH',
//       ],
//       mainColor: '#3E247E',
//       popupBotAvatarColor: '#3E247E',
//       multichat: true,
//       botName: 'Bot',
//       imageTransferEnabled: true,
//       side: 'right',
//       marginSideDesktop: 80,
//       marginBottomDesktop: 48,
//       marginSideMobile: 16,
//       marginBottomMobile: 16,
//     });
//   }, []);

//   return null; // No visual output needed for this component
// };

// export default NorbyChatWidget;
