import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useCallback, useEffect, useState } from "react";
import { Box, CardActions, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import useCards from "../../hooks/useCards";
import { changeLikeStatus } from "../../services/cardApi";

type CardActionBarProps = {
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  cardId: string;
  cardUserId: string;
  cardLikes: string[];
  phoneNumber: string;
};

const CardActionBar: React.FC<CardActionBarProps> = ({
  onDelete,
  onLike,
  cardId,
  cardUserId,
  cardLikes,
  phoneNumber,
}) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { handleLikeCard } = useCards();

  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setLike] = useState(
    () => !!cardLikes.find((id) => user && id === user._id)
  );

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };

  // const handleLike = useCallback(async () => {
  //   try {
  //     setLike((prev) => !prev);
  //     await handleLikeCard(cardId);
  //   } catch (error) {
  //     Promise.reject(error);
  //   }
  // }, [isLiked]);

  // useEffect(() => {
  //   const handleLike = async () => {
  //     setLike((prev) => !prev);
  //     await handleLikeCard(cardId);
  //   };
  //   handleLike();
  // }, [isLiked]);

  // useEffect(() => {
  //   onLike(cardId);
  // }, [isLiked]);

  const handleLike = async () => {
    setLike((prev) => !prev);
    //await handleLikeCard(cardId);
    await onLike(cardId);
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user._id === cardUserId || user.isAdmin) && (
            <IconButton
              onClick={() => handleDialog("open")}
              aria-label="delete card"
            >
              <DeleteIcon />
            </IconButton>
          )}

          {user && user._id === cardUserId && (
            <IconButton
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}
              aria-label="edit card"
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton
            sx={{ cursor: "pointer" }}
            onClick={handlePhoneCall}
            aria-label="call business"
          >
            <CallIcon />
          </IconButton>

          {user && (
            <IconButton onClick={handleLike} aria-label="add to fav">
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
};

export default React.memo(CardActionBar);

// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import CallIcon from "@mui/icons-material/Call";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import React, { useState } from "react";
// import { Box, CardActions, IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ROUTES from "../../../routes/routesModel";
// import { useUser } from "../../../users/providers/UserProvider";
// import CardDeleteDialog from "./CardDeleteDialog";
// import useCards from "../../hooks/useCards";

// type CardActionBarProps = {
//   onDelete: (id: string) => void;
//   onLike: (id: string) => void;
//   cardId: string;
//   cardUserId: string;
//   cardLikes: string[];
// };

// const CardActionBar: React.FC<CardActionBarProps> = ({
//   onDelete,
//   onLike,
//   cardId,
//   cardUserId,
//   cardLikes,
// }) => {
//   const navigate = useNavigate();
//   const { user } = useUser();
//   const { handleLikeCard } = useCards();

//   const [isDialogOpen, setDialog] = useState(false);
//   const [isLiked, setLike] = useState(
//     () => !!cardLikes.find((id) => id === user!._id)
//   );

//   const handleDialog = (term?: string) => {
//     if (term === "open") return setDialog(true);
//     setDialog(false);
//   };

//   const handleDeleteCard = () => {
//     handleDialog();
//     onDelete(cardId);
//   };

//   const handleLike = () => {
//     setLike((prev) => {
//       const dontLike = !prev;
//       handleLikeCard(cardId);
//       onLike(cardId);
//       console.log(isLiked);
//       return dontLike;
//     });
//   };

//   return (
//     <>
//       <CardActions
//         disableSpacing
//         sx={{ pt: 0, justifyContent: "space-between" }}
//         // Spacing-וה margin-מבטל את ההגדרות הדיפולטיביות של ה - disableSpacing
//       >
//         <Box>
//           {user && (user._id === cardUserId || user.isAdmin) && (
//             <IconButton
//               onClick={() => handleDialog("open")}
//               aria-label="delete card"
//             >
//               <DeleteIcon />
//             </IconButton>
//           )}

//           {user && user._id === cardUserId && (
//             <IconButton
//               onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}
//               aria-label="edit card"
//             >
//               <EditIcon />
//             </IconButton>
//           )}
//         </Box>

//         <Box>
//           <IconButton aria-label="call business">
//             <CallIcon />
//           </IconButton>

//           {user && (
//             <IconButton onClick={handleLike} aria-label="add to fav">
//               <FavoriteIcon color={isLiked ? "error" : "inherit"} />
//             </IconButton>
//           )}
//         </Box>
//       </CardActions>
//       <CardDeleteDialog
//         isDialogOpen={isDialogOpen}
//         onChangeDialog={handleDialog}
//         onDelete={handleDeleteCard}
//       />
//     </>
//   );
// };

// export default React.memo(CardActionBar);
