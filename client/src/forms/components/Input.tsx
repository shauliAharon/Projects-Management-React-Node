import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { makeFirstLetterCapital } from "../utils/algoMethods";
import Grid from "@mui/material/Grid";

type VariantType = "filled" | "outlined" | "standard";
type BreakPointsKeysType = "xs" | "sm" | "md" | "lg" | "xl";
type BreakPointValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  variant?: VariantType;
  type?: string;
  name: string;
  data: Record<string, unknown>;
  label: string;
  required?: boolean;
  error?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  breakPoints?: Partial<Record<BreakPointsKeysType, BreakPointValueType>>;
  isMultiline?: boolean;
  isPassword?: boolean;
  multiline?: boolean;
  ShowPassword?: boolean;
  styles?: object;
};
const Input: FC<Props> = ({
  variant = "outlined",
  type = "text",
  name,
  data,
  label,
  required = true,
  error,
  onInputChange,
  breakPoints,
  isPassword,
  multiline = true,
}) => {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <Grid item xs={12} {...breakPoints} style={{ position: "relative" }}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={isPassword && isSecure ? type : "text"}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        error={Boolean(error)}
        helperText={error}
        onChange={onInputChange}
        fullWidth
        autoComplete="off"
        multiline={multiline}
      />
      {isPassword && (
        <div
          onClick={() => setIsSecure((prev) => !prev)}
          style={{
            position: "absolute",
            right: 10,
            width: 30,
            height: 30,
            top: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/assets/images/eye.png" width={25} height={25} alt="eye" />
        </div>
      )}
    </Grid>
  );
};

export default React.memo(Input);
