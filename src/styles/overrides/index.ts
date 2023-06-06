import { Theme } from "@mui/material";
import Card from "./Card";
import Input from "./TextField";
import Button from "./Button";

function OverridesComponents(theme: Theme) {
  return Object.assign(Card(theme), Input(theme), Button(theme));
}

export default OverridesComponents;
