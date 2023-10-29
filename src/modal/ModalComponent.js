import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const inputstyle = {
  // border: 'none',
  outline: "none",
};

const btnstyle = {
  bottom: "10%",
  left: "90%",
  bgcolor: "blue",
  color: "white",
};

const closeStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px'
}

export default function ModalComponent({ open, setOpen,setStatus,status, sendStatus}) {
  console.log("open prop in ModalComponent:", open);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          
          <Box sx={closeStyle} onClick={handleClose}>
            <CloseIcon />
            </Box>

            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create a post
            </Typography>
           
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <TextField
                autoFocus
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(event) => setStatus(event.target.value)}
                fullWidth
                sx={inputstyle}
                className=""
                type="text"
                placeholder="What do you want to talk about?"
                value={status}
              />
            </Typography>
            <Button sx={btnstyle} onClick={sendStatus} >
              Post
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
