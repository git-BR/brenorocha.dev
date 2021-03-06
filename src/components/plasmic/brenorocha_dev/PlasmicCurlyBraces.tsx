/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eygJxeRspPrtKABTYb2Jd2
// Component: kF34L4sqRO
import * as React from "react";
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  Renderer,
  NodeRenderer,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_brenorocha_dev.css"; // plasmic-import: eygJxeRspPrtKABTYb2Jd2/projectcss
import "./PlasmicCurlyBraces.css"; // plasmic-import: kF34L4sqRO/css

export type PlasmicCurlyBraces__VariantMembers = {};
export type PlasmicCurlyBraces__VariantsArgs = {};
export const PlasmicCurlyBraces__VariantProps = new Array<
  keyof PlasmicCurlyBraces__VariantsArgs
>();

export type PlasmicCurlyBraces__ArgsType = {};
export const PlasmicCurlyBraces__ArgProps = new Array<
  keyof PlasmicCurlyBraces__ArgsType
>();

export type PlasmicCurlyBraces__OverridesType = {
  root?: Flex<"div">;
  textBg?: Flex<"div">;
};

export interface DefaultCurlyBracesProps {
  className?: string;
}

function PlasmicCurlyBraces__RenderFunc(props: {
  variants: PlasmicCurlyBraces__VariantsArgs;
  args: PlasmicCurlyBraces__ArgsType;
  overrides: PlasmicCurlyBraces__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        CurlyBraces__root___Wtyw: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true
      })}
    >
      <div
        data-plasmic-name={"textBg"}
        data-plasmic-override={overrides.textBg}
        className={
          classNames({
            CurlyBraces__textBg__ZPaZk: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          }) + " __wab_text"
        }
      >
        {"{"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

class PlasmicCurlyBraces__Renderer extends Renderer<
  PlasmicCurlyBraces__VariantsArgs,
  PlasmicCurlyBraces__ArgsType,
  PlasmicCurlyBraces__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicCurlyBraces__VariantsArgs,
    args: PlasmicCurlyBraces__ArgsType
  ) {
    super(variants, args, PlasmicCurlyBraces__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicCurlyBraces__VariantsArgs,
    args: PlasmicCurlyBraces__ArgsType
  ) {
    return new PlasmicCurlyBraces__Renderer(variants, args);
  }

  getInternalVariantProps(): (keyof PlasmicCurlyBraces__VariantsArgs)[] {
    return PlasmicCurlyBraces__VariantProps;
  }

  getInternalArgProps(): (keyof PlasmicCurlyBraces__ArgsType)[] {
    return PlasmicCurlyBraces__ArgProps;
  }

  forNode(
    name: "textBg"
  ): NodeRenderer<
    PlasmicCurlyBraces__VariantsArgs,
    PlasmicCurlyBraces__ArgsType,
    {
      textBg?: Flex<"div">;
    }
  >;

  forNode(
    name: "root"
  ): NodeRenderer<
    PlasmicCurlyBraces__VariantsArgs,
    PlasmicCurlyBraces__ArgsType,
    {
      root?: Flex<"div">;
      textBg?: Flex<"div">;
    }
  >;

  forNode(name: keyof PlasmicCurlyBraces__OverridesType) {
    return super.forNode(name);
  }
}

type PlasmicCurlyBracesRootProps = PlasmicCurlyBraces__VariantsArgs &
  PlasmicCurlyBraces__ArgsType & {
    variants?: PlasmicCurlyBraces__VariantsArgs;
    args?: PlasmicCurlyBraces__ArgsType;
    overrides?: {
      root?: Flex<"div">;
      textBg?: Flex<"div">;
    };

    root?: Flex<"div">;
    textBg?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicCurlyBraces__VariantsArgs
    | keyof PlasmicCurlyBraces__ArgsType
    | "variants"
    | "args"
    | "root"
    | "textBg"
  >;

export const PlasmicCurlyBraces = function PlasmicCurlyBracesRoot<
  T extends PlasmicCurlyBracesRootProps
>(props: T & StrictProps<T, PlasmicCurlyBracesRootProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: ["root", "textBg"],
    internalArgPropNames: PlasmicCurlyBraces__ArgProps,
    internalVariantPropNames: PlasmicCurlyBraces__VariantProps
  });

  return PlasmicCurlyBraces__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root"
  });
};

type PlasmicCurlyBracesTextBgProps = PlasmicCurlyBraces__VariantsArgs &
  PlasmicCurlyBraces__ArgsType & {
    variants?: PlasmicCurlyBraces__VariantsArgs;
    args?: PlasmicCurlyBraces__ArgsType;
    overrides?: {
      textBg?: Flex<"div">;
    };

    textBg?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicCurlyBraces__VariantsArgs
    | keyof PlasmicCurlyBraces__ArgsType
    | "variants"
    | "args"
    | "textBg"
  >;

PlasmicCurlyBraces.textBg = function PlasmicCurlyBracesTextBg<
  T extends PlasmicCurlyBracesTextBgProps
>(props: T & StrictProps<T, PlasmicCurlyBracesTextBgProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "textBg",
    descendantNames: ["textBg"],
    internalArgPropNames: PlasmicCurlyBraces__ArgProps,
    internalVariantPropNames: PlasmicCurlyBraces__VariantProps
  });

  return PlasmicCurlyBraces__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "textBg"
  });
};

PlasmicCurlyBraces.createRenderer = () =>
  new PlasmicCurlyBraces__Renderer({}, {});

export default PlasmicCurlyBraces;
/* prettier-ignore-end */
