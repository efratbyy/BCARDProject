import React, { ReactNode } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

// import React, { ReactNode } from "react";
// import Header from "./header/Header";
// import Main from "./main/Main";
// import Footer from "./footer/Footer";

// type Props = {
//   children: JSX.Element[] | JSX.Element;
// };

// // לכל דף שתעטוף Footer-ו Header קומפוננטה שאחראית על הוספת
// const Layout: React.FC<Props> = ({ children }) => {
//   // App.tsx-התקבל מ
//   return (
//     <>
//       <Header />
//       <Main
//       // לכן יועבר תוכן הדף שנרצה להציג
//       // :App.tsx-מ Main מועבר לקומפוננטת
//       >
//         {children}
//       </Main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;
