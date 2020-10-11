/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 600 600"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"300"} cy={"300"} r={"297.5"}></circle>

      <path
        d={
          "M300 123.5c-47.9 0-54 .2-72.8 1.1-18.8.9-31.6 3.8-42.8 8.2-11.6 4.5-21.5 10.5-31.3 20.4-9.8 9.8-15.8 19.7-20.4 31.3-4.4 11.2-7.4 24.1-8.2 42.8-.8 18.8-1.1 24.8-1.1 72.8 0 47.9.2 53.9 1.1 72.8.9 18.8 3.8 31.6 8.2 42.8 4.5 11.6 10.5 21.5 20.4 31.3 9.8 9.8 19.7 15.9 31.3 20.4 11.2 4.4 24.1 7.3 42.8 8.2 18.8.9 24.8 1.1 72.8 1.1 47.9 0 53.9-.2 72.8-1.1 18.8-.9 31.6-3.8 42.9-8.2 11.6-4.5 21.4-10.6 31.2-20.4 9.8-9.8 15.8-19.7 20.4-31.3 4.3-11.2 7.3-24 8.2-42.8.8-18.8 1.1-24.8 1.1-72.8 0-47.9-.2-53.9-1.1-72.8-.9-18.8-3.9-31.6-8.2-42.8-4.5-11.6-10.6-21.5-20.4-31.3-9.8-9.8-19.6-15.8-31.3-20.4-11.3-4.4-24.1-7.3-42.9-8.2-18.8-.9-24.8-1.1-72.7-1.1zm-15.8 31.8H300c47.1 0 52.7.2 71.3 1 17.2.8 26.5 3.7 32.8 6.1 8.2 3.2 14.1 7 20.3 13.2 6.2 6.2 10 12.1 13.2 20.3 2.4 6.2 5.3 15.6 6.1 32.8.8 18.6 1 24.2 1 71.3 0 47.1-.2 52.7-1 71.3-.8 17.2-3.7 26.5-6.1 32.8-3.2 8.2-7 14.1-13.2 20.3-6.2 6.2-12 10-20.3 13.2-6.2 2.4-15.6 5.3-32.8 6.1-18.6.8-24.2 1-71.3 1-47.1 0-52.7-.2-71.3-1-17.2-.8-26.5-3.7-32.8-6.1-8.2-3.2-14.1-7-20.3-13.2-6.2-6.2-10-12.1-13.2-20.3-2.4-6.2-5.3-15.6-6.1-32.8-.8-18.6-1-24.2-1-71.3 0-47.1.2-52.7 1-71.3.8-17.2 3.7-26.5 6.1-32.8 3.2-8.2 7-14.1 13.2-20.3 6.2-6.2 12.1-10 20.3-13.2 6.2-2.4 15.6-5.3 32.8-6.1 16.3-.8 22.6-1 55.5-1zm110 29.3c-11.7 0-21.2 9.5-21.2 21.2s9.5 21.2 21.2 21.2 21.2-9.5 21.2-21.2-9.5-21.2-21.2-21.2zM300 209.4c-50.1 0-90.6 40.6-90.6 90.6 0 50.1 40.6 90.6 90.6 90.6 50.1 0 90.6-40.6 90.6-90.6 0-50.1-40.5-90.6-90.6-90.6zm0 31.8c32.5 0 58.8 26.3 58.8 58.8s-26.3 58.8-58.8 58.8-58.8-26.3-58.8-58.8 26.3-58.8 58.8-58.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */