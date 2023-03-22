import { ComponentProps } from "react";
import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";
import { Container } from "./styles";

export function Input({ ...props }: ComponentProps<typeof Container> & TextInputProps) {
  return (
    <Container
      {...props}
    />
  )
}