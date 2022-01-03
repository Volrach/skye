import styled, { css } from 'styled-components';

import {
  interRegular,
  centerVertical,
  interMedium,
  centerIcon,
  coloredCursor,
} from '~/renderer/mixins';
import { transparency } from '~/renderer/constants';

interface StyledTextfieldProps {
  width?: number;
  dark: boolean;
}
export const StyledTextfield = styled.div<StyledTextfieldProps>`
  ${({ width, dark }) => css`
    width: ${width === undefined ? 280 : width}px;
    background-color: ${dark ? 'rgba(255, 255, 255, 0.06)' : '#f5f5f5'};
  `}
  position: relative;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  overflow: hidden;
  cursor: text;
  user-select: none;
`;

interface InputProps {
  color: string;
  hasLabel: boolean;
  hasIcon: boolean;
  dark: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 55px;
  font-size: 16px;
  padding-left: 12px;
  border: none;
  outline: none;
  background-color: transparent;
  user-select: auto;
  ${interRegular()};

  ${({ color, hasLabel, hasIcon, dark }) => css`
    padding-top: ${hasLabel ? 12 : 0}px;
    padding-right: ${hasIcon ? 48 : 12}px;
    ${coloredCursor(color, dark ? 255 : 0)};
    border-bottom: 1px solid
      ${dark ? `rgba(255, 255, 255, 0.12)` : `rgba(0, 0, 0, 0.42)`};

    &::placeholder {
      text-shadow: 0 0 0
        ${dark
          ? `rgba(255, 255, 255, ${transparency.text.medium})`
          : `rgba(0, 0, 0, ${transparency.text.medium})`};
    }
  `}

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

interface LabelProps {
  activated: boolean;
  focused: boolean;
  color: string;
  dark: boolean;
}

export const Label = styled.div<LabelProps>`
  left: 12px;
  position: absolute;
  transition: 0.2s font-size, 0.2s color, 0.2s margin-top;

  -webkit-font-smoothing: antialiased;
  ${centerVertical()};

  ${({ activated, focused, color, dark, theme }) => css`
    font-size: ${activated ? 12 : 16}px;
    margin-top: ${activated ? -12 : 0}px;
    color: ${focused
      ? color
      : dark
      ? `rgba(255, 255, 255, ${transparency.text.medium})`
      : `rgba(0, 0, 0, ${transparency.text.medium})`};
    ${activated ? interMedium() : interRegular()};
    transition-timing-function: ${theme.easingFunction};
  `}
`;

interface IndicatorProps {
  focused: boolean;
  color: string;
}
export const Indicator = styled.div<IndicatorProps>`
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
 

  ${({ focused, color, theme }) => css`
    width: ${focused ? 100 : 0}%;
    background-color: ${color};
    transition: 0.2s width ${theme.easingFunction};
  `}
`;

interface IconProps {
  src?: string;
  dark: boolean;
}

export const Icon = styled.div<IconProps>`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 8px;
  opacity: ${transparency.icons.inactive};
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s background-image;
  ${centerVertical()};
  ${centerIcon(24)};

  ${({ src, dark }) => css`
    background-image: url(${src});
    filter: ${dark ? 'invert(100%)' : 'none'};
  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;
