import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 3,
    bgcolor: "white",
    paddingTop: 2,
    paddingBottom: 1,
    paddingLeft: 2,
    paddingRight: 2
  };

  return (
    <div>
      <Button
        variant="contained"
        className="justify-center w-36"
        onClick={handleOpen}
      >
        REDEEM
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="redeem-status-modal-text"
      >
        <Box sx={boxStyle} className="flex flex-col w-60">
          <Typography id="redeem-status-modal-text">
            Oops! Coins not enough for 30-minutes session. Try to earn more
            coins!
          </Typography>
          <div className="grid justify-items-end">
            <Button onClick={handleClose}>OK</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
