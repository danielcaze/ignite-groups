import { Text, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
`

export const Heading = styled(Text)`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 32px;
`