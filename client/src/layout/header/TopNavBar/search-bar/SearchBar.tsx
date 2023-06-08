import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "../../../../provider/ThemeProvider";
import { useSearchParams } from "react-router-dom";
import useCards from "../../../../cards/hooks/useCards";
import CardInterface from "../../../../cards/models/Interfaces/CardInterface";

const SearchBar = () => {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const { handleGetCards } = useCards();

  const handleChange = ({ target }: CardInterface[] | any | null) =>
    setSearch({ q: target.value });

  // const handleChange: React.ChangeEventHandler<
  //   HTMLInputElement | HTMLTextAreaElement
  // > = (event) => {
  //   const target = event.target as HTMLInputElement;
  //   const value = target.value;

  //   setSearch({ q: value }); // Update the search parameter
  //   setSearchValue(value); // Update the search value
  // };

  // const handleClearSearch = () => {
  //   setSearchValue("");
  //   setSearch((params) => {
  //     const updateParams = new URLSearchParams(params);
  //     updateParams.delete("q");
  //     return updateParams;
  //   }); // Clear the search parameter
  //   setSearch({ q: "" });
  //   handleGetCards(); // Fetch all cards again
  // };

  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
          placeholder="Search"
          size="small"
          // value={searchValue}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleChange}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;

// const SearchBar = () => {
//   const { isDark } = useTheme();
//   const [searchParams, setSearch] = useSearchParams();
//   const handleChange: React.ChangeEventHandler<
//     HTMLInputElement | HTMLTextAreaElement
//   > = (event) => {
//     const target = event.target as HTMLInputElement;
//     setSearch({ q: target.value });
//   };

//   return (
//     <Box display="inline-flex">
//       <FormControl variant="standard">
//         <OutlinedInput
//           sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
//           placeholder="Search"
//           size="small"
//           value={searchParams.get("q") ?? ""
//// למה שהמשתמש הכניס בשדה החיפוש. במידה ואין כלום בשדה החיפוש אז ה-״״ הם הערך הדיפולטיבי  q הופך את הפרמטר
// אחרת יחזיר את מה שמימינו undefined או null יחזיר את מה שכתוב משמאלו אם לא יהיה ??
//          }
//           onChange={handleChange}
//           endAdornment={
//             <InputAdornment position="end">
//               <IconButton edge="end">
//                 <SearchIcon />
//               </IconButton>
//             </InputAdornment>
//           }
//         />
//       </FormControl>
//     </Box>
//   );
// };

// export default SearchBar;
