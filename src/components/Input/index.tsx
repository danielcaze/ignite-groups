import { ComponentProps } from "react";
import { Container } from "./styles";

export function Input({ ...props }: ComponentProps<typeof Container>) {
  return (
    <Container
      {...props}
    />
  )
}