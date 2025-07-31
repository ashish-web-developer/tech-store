// src/types/styled.d.ts
import "styled-components";
import { ITheme } from "@/theme/light.theme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
