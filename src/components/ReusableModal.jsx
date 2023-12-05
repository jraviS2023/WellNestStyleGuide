import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DialogContent } from "@mui/material";

export default function ReusableModal({
  modalText,
  showCancelButton,
  buttonText,
  mt,
  link,
  ...props
}) {
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
    <div className="">
      <Button
        variant="contained"
        className="justify-center w-36"
        onClick={handleOpen}
      >
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="redeem-status-modal-text"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-32 bg-white rounded-[10px] shadow flex-col justify-start items-start flex">
            <div className="self-stretch px-4 pt-5 pb-2 justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 text-black text-opacity-90 text-base font-normal font-['Cabin'] leading-normal">
                {modalText}
              </div>
            </div>
            <div className="self-stretch p-2 justify-between items-center gap-2 inline-flex">
              {showCancelButton && (
                <div
                  className="w-9 px-2 py-1.5 rounded justify-center items-center gap-2 flex cursor-pointer"
                  onClick={handleClose}
                >
                  <div className="text-center text-red-500 text-sm font-medium uppercase leading-normal tracking-tight">
                    Cancel
                  </div>
                </div>
              )}

              <div
                className="w-9 px-2 py-1.5 rounded justify-center items-center gap-2 flex cursor-pointer ml-auto"
                onClick={handleClose}
              >
                <div className="text-center text-sky-600 text-sm font-medium uppercase leading-normal tracking-tight">
                  OK
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
