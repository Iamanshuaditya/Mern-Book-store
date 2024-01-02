import { useState } from "react";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ControlledOpenSelect = (props) => {
  const { label, options, onSelect } = props;

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (onSelect) {
      onSelect(event.target.value);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="controlled-open-select-label"
          className="w-48"
          id="controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

ControlledOpenSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func,
};

export default ControlledOpenSelect;
