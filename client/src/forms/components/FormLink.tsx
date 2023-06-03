import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type BreakPointsKeysType = "xs" | "sm" | "md" | "lg" | "xl";
type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Props = {
  text: string;
  to: string;
  breakPoints?: Partial<Record<BreakPointsKeysType, BreakPointValueType>>;
};

const FormLink: React.FC<Props> = ({ text, to, breakPoints }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} {...breakPoints}>
      <Button variant="text" onClick={() => navigate(to)}>
        <Typography variant="body2">
          {text}
          <Typography component="span" variant="subtitle2">
            {" "}
            Click here...
          </Typography>
        </Typography>
      </Button>
    </Grid>
  );
};

export default FormLink;

// import React from "react";
// import { Button, Grid, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// type BreakPointsKeysType = "xs" | "sm" | "md" | "lg" | "xl";
// type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
// type Props = {
//   text: string;
//   to: string;
//   breakPoints?: Partial<Record<BreakPointsKeysType, BreakPointValueType>>;
// };

// // register-ובטופס ה login-קומפוננטה שאחראית על הליניק בטופס ה
// const FormLink: React.FC<Props> = ({ text, to, breakPoints }) => {
//   // זה מה שיהיה כתוב בלינק text
//   // זה הדף שאליו יקח אותי to
//   // שלו Value-וה Keys-זה הטייפ שקובע את סוג ה breakPoints

//   const navigate = useNavigate();

//   return (
//     <Grid item xs={12} {...breakPoints}>
//       <Button variant="text" onClick={() => navigate(to)}>
//         <Typography variant="body2">
//           {
//             text
//             // במקום ליצור לינק חדש על בכל קומפוננטה (login, register)
//             // זה מה שיהיה כתוב בלינק text
//           }
//           <Typography component="span" variant="subtitle2">
//             {
//               " " // Click here... פה יכנס הטקסט שנרצה ואחריו יופיע (text)
//             }
//             Click here...
//           </Typography>
//         </Typography>
//       </Button>
//     </Grid>
//   );
// };

// export default FormLink;
