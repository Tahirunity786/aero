import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: ${(props) => props.padding || "8px 12px"};
  font-size: ${(props) => props.fontSize || "16px"};
  border: ${(props) => props.border || "1px solid #ccc"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  outline: none;
  transition: ${(props) => props.transition || "border-color 0.3s ease"};

  &:focus {
    border-color: ${(props) => props.focusBorderColor || "#007bff"};
  }

  &:disabled {
    background-color: ${(props) => props.disabledBackgroundColor || "#f5f5f5"};
    cursor: not-allowed;
  }
`;

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  disabled = false,
  className,
  autoFocus = false,
  styleProps = {},
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      className={className}
      autoFocus={autoFocus}
      {...styleProps}
      {...rest}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string, // Input type, e.g., "text", "password", "email"
  placeholder: PropTypes.string, // Placeholder text
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Input value
  onChange: PropTypes.func.isRequired, // Change handler function
  name: PropTypes.string, // Name attribute
  disabled: PropTypes.bool, // Whether the input is disabled
  className: PropTypes.string, // Additional class names for styling
  autoFocus: PropTypes.bool, // Auto-focus the input on render
  styleProps: PropTypes.object, // Custom style props for styling
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  disabled: false,
  autoFocus: false,
  styleProps: {
    padding: "8px 12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    color: "#000",
    backgroundColor: "#fff",
    focusBorderColor: "#007bff",
    transition: "border-color 0.3s ease",
    disabledBackgroundColor: "#f5f5f5",
  },
};

export default Input;
