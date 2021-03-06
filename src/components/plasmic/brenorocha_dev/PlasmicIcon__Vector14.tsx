/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1828 1551"}
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

      <path
        opacity={".75"}
        d={
          "M288 1530c0 6.08-4.925 11-11 11v10c11.598 0 21-9.4 21-21h-10zm-11 11c-6.075 0-11-4.92-11-11h-10c0 11.6 9.402 21 21 21v-10zm-11-11c0-6.08 4.925-11 11-11v-10c-11.598 0-21 9.4-21 21h10zm11-11c6.075 0 11 4.92 11 11h10c0-11.6-9.402-21-21-21v10zM32 1011c0 6.08-4.925 11-11 11v10c11.598 0 21-9.4 21-21H32zm-11 11c-6.075 0-11-4.92-11-11H0c0 11.6 9.402 21 21 21v-10zm-11-11c0-6.08 4.925-11 11-11v-10c-11.598 0-21 9.402-21 21h10zm11-11c6.075 0 11 4.92 11 11h10c0-11.598-9.402-21-21-21v10zm1435-184c0 6.075-4.92 11-11 11v10c11.6 0 21-9.402 21-21h-10zm-11 11c-6.08 0-11-4.925-11-11h-10c0 11.598 9.4 21 21 21v-10zm-11-11c0-6.075 4.92-11 11-11v-10c-11.6 0-21 9.402-21 21h10zm11-11c6.08 0 11 4.925 11 11h10c0-11.598-9.4-21-21-21v10zM1296 21c0 6.075-4.92 11-11 11v10c11.6 0 21-9.402 21-21h-10zm-11 11c-6.08 0-11-4.925-11-11h-10c0 11.598 9.4 21 21 21V32zm-11-11c0-6.075 4.92-11 11-11V0c-11.6 0-21 9.402-21 21h10zm11-11c6.08 0 11 4.925 11 11h10c0-11.598-9.4-21-21-21v10zm533 1220c0 6.08-4.92 11-11 11v10c11.6 0 21-9.4 21-21h-10zm-11 11c-6.08 0-11-4.92-11-11h-10c0 11.6 9.4 21 21 21v-10zm-11-11c0-6.08 4.92-11 11-11v-10c-11.6 0-21 9.4-21 21h10zm11-11c6.08 0 11 4.92 11 11h10c0-11.6-9.4-21-21-21v10zm-16 6h-65v10h65v-10zm-240-175V201h-10v849h10zM1366 16h-65v10h65V16zm185 185c0-102.173-82.83-185-185-185v10c96.65 0 175 78.35 175 175h10zm175 1024c-96.65 0-175-78.35-175-175h-10c0 102.17 82.83 185 185 185v-10zm-297-414H830.5v10H1429v-10zm-793.5 195H37v10h598.5v-10zm92.5-92.5c0 51.086-41.414 92.5-92.5 92.5v10c56.609 0 102.5-45.891 102.5-102.5h-10zM830.5 811C773.891 811 728 856.891 728 913.5h10c0-51.086 41.414-92.5 92.5-92.5v-10zm800.5 254v-84h-10v84h10zm0-84c0-93.888-76.11-170-170-170v10c88.37 0 160 71.634 160 160h10zm160 244c-88.37 0-160-71.63-160-160h-10c0 93.89 76.11 170 170 170v-10zM144 1123v295h10v-295h-10zm0 295c0 64.62 52.383 117 117 117v-10c-59.094 0-107-47.91-107-107h-10zM37 1016c59.094 0 107 47.91 107 107h10c0-64.62-52.383-117-117-117v10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
