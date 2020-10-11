/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eygJxeRspPrtKABTYb2Jd2
// Component: -G_lGD-Bdf
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
import Astronaut from "../../Astronaut"; // plasmic-import: ZY2oovOnA1/component
import CurlyBracesEnd from "../../CurlyBracesEnd"; // plasmic-import: YHYSNfLior/component

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_brenorocha_dev.css"; // plasmic-import: eygJxeRspPrtKABTYb2Jd2/projectcss
import "./PlasmicSpaceWrapper.css"; // plasmic-import: -G_lGD-Bdf/css
import Vector11Icon from "./PlasmicIcon__Vector11"; // plasmic-import: KIGsJ9Uyq/icon

export type PlasmicSpaceWrapper__VariantMembers = {};
export type PlasmicSpaceWrapper__VariantsArgs = {};
export const PlasmicSpaceWrapper__VariantProps = new Array<
  keyof PlasmicSpaceWrapper__VariantsArgs
>();

export type PlasmicSpaceWrapper__ArgsType = {};
export const PlasmicSpaceWrapper__ArgProps = new Array<
  keyof PlasmicSpaceWrapper__ArgsType
>();

export type PlasmicSpaceWrapper__OverridesType = {
  root?: Flex<"div">;
  starArray?: Flex<"svg">;
  spaceGradient?: Flex<"div">;
  box?: Flex<"div">;
  astronaut?: Flex<typeof Astronaut>;
  atmosphere?: Flex<"div">;
  curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
};

export interface DefaultSpaceWrapperProps {
  className?: string;
}

function PlasmicSpaceWrapper__RenderFunc(props: {
  variants: PlasmicSpaceWrapper__VariantsArgs;
  args: PlasmicSpaceWrapper__ArgsType;
  overrides: PlasmicSpaceWrapper__OverridesType;
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
        SpaceWrapper__root__Oq9tQ: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true
      })}
    >
      <Vector11Icon
        data-plasmic-name={"starArray"}
        data-plasmic-override={overrides.starArray}
        className={
          classNames({
            SpaceWrapper__starArray__pLmSA: true,
            "plasmic-default__all": true,
            "plasmic-default__svg": true
          }) +
          " " +
          ("star-array" as const)
        }
        role={"img"}
        {...({} as any)}
      ></Vector11Icon>

      <div
        data-plasmic-name={"spaceGradient"}
        data-plasmic-override={overrides.spaceGradient}
        className={classNames({
          SpaceWrapper__spaceGradient__3g6dK: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      ></div>

      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames({
          SpaceWrapper__box__XVk6M: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <Astronaut
          data-plasmic-name={"astronaut"}
          data-plasmic-override={overrides.astronaut}
          className={classNames({
            "SpaceWrapper__astronaut__YebZ-": true,
            __wab_instance: true
          })}
          {...({} as any)}
        ></Astronaut>
      </div>

      <div
        data-plasmic-name={"atmosphere"}
        data-plasmic-override={overrides.atmosphere}
        className={
          classNames({
            SpaceWrapper__atmosphere__8rSZg: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          }) +
          " " +
          ("atmosphere" as const)
        }
      >
        <CurlyBracesEnd
          data-plasmic-name={"curlyBracesEnd"}
          data-plasmic-override={overrides.curlyBracesEnd}
          className={classNames({
            SpaceWrapper__curlyBracesEnd__rrX87: true,
            __wab_instance: true
          })}
          {...({} as any)}
        ></CurlyBracesEnd>
      </div>
    </div>
  ) as React.ReactElement | null;
}

class PlasmicSpaceWrapper__Renderer extends Renderer<
  PlasmicSpaceWrapper__VariantsArgs,
  PlasmicSpaceWrapper__ArgsType,
  PlasmicSpaceWrapper__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicSpaceWrapper__VariantsArgs,
    args: PlasmicSpaceWrapper__ArgsType
  ) {
    super(variants, args, PlasmicSpaceWrapper__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicSpaceWrapper__VariantsArgs,
    args: PlasmicSpaceWrapper__ArgsType
  ) {
    return new PlasmicSpaceWrapper__Renderer(variants, args);
  }

  getInternalVariantProps(): (keyof PlasmicSpaceWrapper__VariantsArgs)[] {
    return PlasmicSpaceWrapper__VariantProps;
  }

  getInternalArgProps(): (keyof PlasmicSpaceWrapper__ArgsType)[] {
    return PlasmicSpaceWrapper__ArgProps;
  }

  forNode(
    name: "curlyBracesEnd"
  ): NodeRenderer<
    PlasmicSpaceWrapper__VariantsArgs,
    PlasmicSpaceWrapper__ArgsType,
    {
      curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
    }
  >;

  forNode(
    name: "atmosphere"
  ): NodeRenderer<
    PlasmicSpaceWrapper__VariantsArgs,
    PlasmicSpaceWrapper__ArgsType,
    {
      atmosphere?: Flex<"div">;
      curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
    }
  >;

  forNode(
    name: "astronaut"
  ): NodeRenderer<
    PlasmicSpaceWrapper__VariantsArgs,
    PlasmicSpaceWrapper__ArgsType,
    {
      astronaut?: Flex<typeof Astronaut>;
    }
  >;

  forNode(
    name: "box"
  ): NodeRenderer<
    PlasmicSpaceWrapper__VariantsArgs,
    PlasmicSpaceWrapper__ArgsType,
    {
      box?: Flex<"div">;
      astronaut?: Flex<typeof Astronaut>;
    }
  >;

  forNode(
    name: "spaceGradient"
  ): NodeRenderer<
    PlasmicSpaceWrapper__VariantsArgs,
    PlasmicSpaceWrapper__ArgsType,
    {
      spaceGradient?: Flex<"div">;
    }
  >;

  forNode(
    name: "starArray"
  ): NodeRenderer<
    PlasmicSpaceWrapper__VariantsArgs,
    PlasmicSpaceWrapper__ArgsType,
    {
      starArray?: Flex<"svg">;
    }
  >;

  forNode(
    name: "root"
  ): NodeRenderer<
    PlasmicSpaceWrapper__VariantsArgs,
    PlasmicSpaceWrapper__ArgsType,
    {
      root?: Flex<"div">;
      starArray?: Flex<"svg">;
      spaceGradient?: Flex<"div">;
      box?: Flex<"div">;
      astronaut?: Flex<typeof Astronaut>;
      atmosphere?: Flex<"div">;
      curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
    }
  >;

  forNode(name: keyof PlasmicSpaceWrapper__OverridesType) {
    return super.forNode(name);
  }
}

type PlasmicSpaceWrapperRootProps = PlasmicSpaceWrapper__VariantsArgs &
  PlasmicSpaceWrapper__ArgsType & {
    variants?: PlasmicSpaceWrapper__VariantsArgs;
    args?: PlasmicSpaceWrapper__ArgsType;
    overrides?: {
      root?: Flex<"div">;
      starArray?: Flex<"svg">;
      spaceGradient?: Flex<"div">;
      box?: Flex<"div">;
      astronaut?: Flex<typeof Astronaut>;
      atmosphere?: Flex<"div">;
      curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
    };

    root?: Flex<"div">;
    starArray?: Flex<"svg">;
    spaceGradient?: Flex<"div">;
    box?: Flex<"div">;
    astronaut?: Flex<typeof Astronaut>;
    atmosphere?: Flex<"div">;
    curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicSpaceWrapper__VariantsArgs
    | keyof PlasmicSpaceWrapper__ArgsType
    | "variants"
    | "args"
    | "root"
    | "starArray"
    | "spaceGradient"
    | "box"
    | "astronaut"
    | "atmosphere"
    | "curlyBracesEnd"
  >;

export const PlasmicSpaceWrapper = function PlasmicSpaceWrapperRoot<
  T extends PlasmicSpaceWrapperRootProps
>(props: T & StrictProps<T, PlasmicSpaceWrapperRootProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: [
      "root",
      "starArray",
      "spaceGradient",
      "box",
      "astronaut",
      "atmosphere",
      "curlyBracesEnd"
    ],

    internalArgPropNames: PlasmicSpaceWrapper__ArgProps,
    internalVariantPropNames: PlasmicSpaceWrapper__VariantProps
  });

  return PlasmicSpaceWrapper__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root"
  });
};

type PlasmicSpaceWrapperStarArrayProps = PlasmicSpaceWrapper__VariantsArgs &
  PlasmicSpaceWrapper__ArgsType & {
    variants?: PlasmicSpaceWrapper__VariantsArgs;
    args?: PlasmicSpaceWrapper__ArgsType;
    overrides?: {
      starArray?: Flex<"svg">;
    };

    starArray?: Flex<"svg">;
  } & Omit<
    Partial<React.ComponentProps<"svg">>,
    | keyof PlasmicSpaceWrapper__VariantsArgs
    | keyof PlasmicSpaceWrapper__ArgsType
    | "variants"
    | "args"
    | "starArray"
  >;

PlasmicSpaceWrapper.starArray = function PlasmicSpaceWrapperStarArray<
  T extends PlasmicSpaceWrapperStarArrayProps
>(props: T & StrictProps<T, PlasmicSpaceWrapperStarArrayProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "starArray",
    descendantNames: ["starArray"],
    internalArgPropNames: PlasmicSpaceWrapper__ArgProps,
    internalVariantPropNames: PlasmicSpaceWrapper__VariantProps
  });

  return PlasmicSpaceWrapper__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "starArray"
  });
};

type PlasmicSpaceWrapperSpaceGradientProps = PlasmicSpaceWrapper__VariantsArgs &
  PlasmicSpaceWrapper__ArgsType & {
    variants?: PlasmicSpaceWrapper__VariantsArgs;
    args?: PlasmicSpaceWrapper__ArgsType;
    overrides?: {
      spaceGradient?: Flex<"div">;
    };

    spaceGradient?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicSpaceWrapper__VariantsArgs
    | keyof PlasmicSpaceWrapper__ArgsType
    | "variants"
    | "args"
    | "spaceGradient"
  >;

PlasmicSpaceWrapper.spaceGradient = function PlasmicSpaceWrapperSpaceGradient<
  T extends PlasmicSpaceWrapperSpaceGradientProps
>(props: T & StrictProps<T, PlasmicSpaceWrapperSpaceGradientProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "spaceGradient",
    descendantNames: ["spaceGradient"],
    internalArgPropNames: PlasmicSpaceWrapper__ArgProps,
    internalVariantPropNames: PlasmicSpaceWrapper__VariantProps
  });

  return PlasmicSpaceWrapper__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "spaceGradient"
  });
};

type PlasmicSpaceWrapperBoxProps = PlasmicSpaceWrapper__VariantsArgs &
  PlasmicSpaceWrapper__ArgsType & {
    variants?: PlasmicSpaceWrapper__VariantsArgs;
    args?: PlasmicSpaceWrapper__ArgsType;
    overrides?: {
      box?: Flex<"div">;
      astronaut?: Flex<typeof Astronaut>;
    };

    box?: Flex<"div">;
    astronaut?: Flex<typeof Astronaut>;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicSpaceWrapper__VariantsArgs
    | keyof PlasmicSpaceWrapper__ArgsType
    | "variants"
    | "args"
    | "box"
    | "astronaut"
  >;

PlasmicSpaceWrapper.box = function PlasmicSpaceWrapperBox<
  T extends PlasmicSpaceWrapperBoxProps
>(props: T & StrictProps<T, PlasmicSpaceWrapperBoxProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "box",
    descendantNames: ["box", "astronaut"],
    internalArgPropNames: PlasmicSpaceWrapper__ArgProps,
    internalVariantPropNames: PlasmicSpaceWrapper__VariantProps
  });

  return PlasmicSpaceWrapper__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "box"
  });
};

type PlasmicSpaceWrapperAstronautProps = PlasmicSpaceWrapper__VariantsArgs &
  PlasmicSpaceWrapper__ArgsType & {
    variants?: PlasmicSpaceWrapper__VariantsArgs;
    args?: PlasmicSpaceWrapper__ArgsType;
    overrides?: {
      astronaut?: Flex<typeof Astronaut>;
    };

    astronaut?: Flex<typeof Astronaut>;
  } & Omit<
    Partial<React.ComponentProps<typeof Astronaut>>,
    | keyof PlasmicSpaceWrapper__VariantsArgs
    | keyof PlasmicSpaceWrapper__ArgsType
    | "variants"
    | "args"
    | "astronaut"
  >;

PlasmicSpaceWrapper.astronaut = function PlasmicSpaceWrapperAstronaut<
  T extends PlasmicSpaceWrapperAstronautProps
>(props: T & StrictProps<T, PlasmicSpaceWrapperAstronautProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "astronaut",
    descendantNames: ["astronaut"],
    internalArgPropNames: PlasmicSpaceWrapper__ArgProps,
    internalVariantPropNames: PlasmicSpaceWrapper__VariantProps
  });

  return PlasmicSpaceWrapper__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "astronaut"
  });
};

type PlasmicSpaceWrapperAtmosphereProps = PlasmicSpaceWrapper__VariantsArgs &
  PlasmicSpaceWrapper__ArgsType & {
    variants?: PlasmicSpaceWrapper__VariantsArgs;
    args?: PlasmicSpaceWrapper__ArgsType;
    overrides?: {
      atmosphere?: Flex<"div">;
      curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
    };

    atmosphere?: Flex<"div">;
    curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicSpaceWrapper__VariantsArgs
    | keyof PlasmicSpaceWrapper__ArgsType
    | "variants"
    | "args"
    | "atmosphere"
    | "curlyBracesEnd"
  >;

PlasmicSpaceWrapper.atmosphere = function PlasmicSpaceWrapperAtmosphere<
  T extends PlasmicSpaceWrapperAtmosphereProps
>(props: T & StrictProps<T, PlasmicSpaceWrapperAtmosphereProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "atmosphere",
    descendantNames: ["atmosphere", "curlyBracesEnd"],
    internalArgPropNames: PlasmicSpaceWrapper__ArgProps,
    internalVariantPropNames: PlasmicSpaceWrapper__VariantProps
  });

  return PlasmicSpaceWrapper__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "atmosphere"
  });
};

type PlasmicSpaceWrapperCurlyBracesEndProps = PlasmicSpaceWrapper__VariantsArgs &
  PlasmicSpaceWrapper__ArgsType & {
    variants?: PlasmicSpaceWrapper__VariantsArgs;
    args?: PlasmicSpaceWrapper__ArgsType;
    overrides?: {
      curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
    };

    curlyBracesEnd?: Flex<typeof CurlyBracesEnd>;
  } & Omit<
    Partial<React.ComponentProps<typeof CurlyBracesEnd>>,
    | keyof PlasmicSpaceWrapper__VariantsArgs
    | keyof PlasmicSpaceWrapper__ArgsType
    | "variants"
    | "args"
    | "curlyBracesEnd"
  >;

PlasmicSpaceWrapper.curlyBracesEnd = function PlasmicSpaceWrapperCurlyBracesEnd<
  T extends PlasmicSpaceWrapperCurlyBracesEndProps
>(props: T & StrictProps<T, PlasmicSpaceWrapperCurlyBracesEndProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "curlyBracesEnd",
    descendantNames: ["curlyBracesEnd"],
    internalArgPropNames: PlasmicSpaceWrapper__ArgProps,
    internalVariantPropNames: PlasmicSpaceWrapper__VariantProps
  });

  return PlasmicSpaceWrapper__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "curlyBracesEnd"
  });
};

PlasmicSpaceWrapper.createRenderer = () =>
  new PlasmicSpaceWrapper__Renderer({}, {});

export default PlasmicSpaceWrapper;
/* prettier-ignore-end */
