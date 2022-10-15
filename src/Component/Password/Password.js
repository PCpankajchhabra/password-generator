import React, { useState } from "react";
import "../Password/Password.css";
import { number, lowercase, uppercase, specialnumber } from "../Data/Data.js";
import UilClipboardalt from "@iconscout/react-unicons/icons/uil-clipboard-alt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  COPY_SUCCESS,
  NOT_SELECTED,
  NOTHING_TO_COPY,
} from "../Message/Message";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputAdornment,
  Button,
  TextField,
} from "@mui/material";

const Password = () => {
  const [main, setState] = useState({
    lenght: 0,
    symbol: false,
    number: false,
    lowercase: false,
    uppercase: false,
    Password: "",
  });

  const copyPassword = () => {
    var copyText = document.getElementById("outlined-adornment-amount");
    navigator.clipboard.writeText(copyText.value);

    if (main.lenght >= 1 && main.Password) {
      toast.success(COPY_SUCCESS, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (main.lenght === 0 || !main.Password) {
      toast.error(NOTHING_TO_COPY, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const generate = (e) => {
    let list = "";

    if (!main.symbol && !main.number && !main.uppercase && !main.lowercase) {
      toast.error(NOT_SELECTED, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (main.symbol) {
      list = list + specialnumber;
      console.log(list);
    }
    if (main.number) {
      list = list + number;
      console.log(list);
    }
    if (main.uppercase) {
      list = list + uppercase;
      console.log(list);
    }
    if (main.lowercase) {
      list = list + lowercase;
      console.log(list);
    }
    setState({ ...main, Password: createPassword(list) });
  };

  function createPassword(list) {
    let Password = "";
    let characterlistindex = list.length;
    for (let i = 0; i < main.lenght; i++) {
      let characterlist = Math.round(Math.random() * characterlistindex);
      Password = Password + list.charAt(characterlist);
    }
    console.log(Password);
    return Password;
  }

  return (
    <>
      <div className="Main-container">
        <TextField
          id="outlined-adornment-amount"
          aria-describedby="outlined-weight-helper-text"
          value={main.Password}
          color="warning"
          placeholder="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <UilClipboardalt
                  onClick={copyPassword}
                  className="copyClipboard"
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="number"
          id="outlined-adornment-amount"
          aria-describedby="outlined-weight-helper-text"
          value={main.lenght}
          color="success"
          onChange={(e) => {
            setState({ ...main, lenght: e.target.value });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Length</InputAdornment>
            ),
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Symbol"
            checked={main.symbol}
            onChange={(e) => {
              setState({ ...main, symbol: e.target.checked });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Numbers"
            checked={main.number}
            onChange={(e) => {
              setState({ ...main, number: e.target.checked });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Lowercase"
            checked={main.lowercase}
            onChange={(e) => {
              setState({ ...main, lowercase: e.target.checked });
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Uppercase"
            checked={main.uppercase}
            onChange={(e) => {
              setState({ ...main, uppercase: e.target.checked });
            }}
          />
        </FormGroup>
        <Button variant="contained" color="success" onClick={generate}>
          Generate
        </Button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};
export default Password;
