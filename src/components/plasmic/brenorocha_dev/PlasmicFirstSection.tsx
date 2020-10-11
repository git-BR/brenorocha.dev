/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eygJxeRspPrtKABTYb2Jd2
// Component: qdormx9dnp
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
import "./PlasmicFirstSection.css"; // plasmic-import: qdormx9dnp/css

export type PlasmicFirstSection__VariantMembers = {};
export type PlasmicFirstSection__VariantsArgs = {};
export const PlasmicFirstSection__VariantProps = new Array<
  keyof PlasmicFirstSection__VariantsArgs
>();

export type PlasmicFirstSection__ArgsType = {};
export const PlasmicFirstSection__ArgProps = new Array<
  keyof PlasmicFirstSection__ArgsType
>();

export type PlasmicFirstSection__OverridesType = {
  root?: Flex<"div">;
  projects?: Flex<"div">;
  link?: Flex<"a">;
  mobileApp?: Flex<"div">;
  screenshot202010060125451?: Flex<"div">;
  screenshot202010060125271?: Flex<"div">;
  screenshot202010060124191?: Flex<"div">;
};

export interface DefaultFirstSectionProps {
  className?: string;
}

function PlasmicFirstSection__RenderFunc(props: {
  variants: PlasmicFirstSection__VariantsArgs;
  args: PlasmicFirstSection__ArgsType;
  overrides: PlasmicFirstSection__OverridesType;
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
        FirstSection__root__kdil8: true,
        "plasmic-default__all": true,
        "plasmic-default__div": true
      })}
    >
      <div
        className={classNames({
          FirstSection__box__u9h9c: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        <div
          className={classNames({
            FirstSection__box__OOLIa: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          <div
            data-plasmic-name={"projects"}
            data-plasmic-override={overrides.projects}
            className={classNames({
              FirstSection__projects__ToXzD: true,
              "plasmic-default__all": true,
              "plasmic-default__div": true
            })}
          >
            <div
              className={classNames({
                FirstSection__box__pi3H4: true,
                "plasmic-default__all": true,
                "plasmic-default__div": true
              })}
            >
              <div
                className={
                  classNames({
                    FirstSection__box__vB00p: true,
                    "plasmic-default__all": true,
                    "plasmic-default__div": true
                  }) + " __wab_text"
                }
              >
                {"AWESOME\nPROJECTS"}
              </div>

              <div
                className={
                  classNames({
                    FirstSection__box__HWUui: true,
                    "plasmic-default__all": true,
                    "plasmic-default__div": true
                  }) + " __wab_text"
                }
              >
                {"industry original designs with high quality  standards"}
              </div>

              <div
                className={classNames({
                  "FirstSection__box__-PtsD": true,
                  "plasmic-default__all": true,
                  "plasmic-default__div": true
                })}
              >
                <a
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={
                    classNames({
                      FirstSection__link__JGJ0j: true,
                      "plasmic-default__a": true,
                      "plasmic-default__all": true
                    }) + " __wab_text"
                  }
                  href={"https://github.com/git-BR/marvel-api-library" as const}
                >
                  {"FOR MOBILE"}
                </a>

                <div
                  className={classNames({
                    FirstSection__box__8OMWV: true,
                    "plasmic-default__all": true,
                    "plasmic-default__div": true
                  })}
                >
                  <div
                    data-plasmic-name={"mobileApp"}
                    data-plasmic-override={overrides.mobileApp}
                    className={
                      classNames({
                        FirstSection__mobileApp__3DVbk: true,
                        "plasmic-default__all": true,
                        "plasmic-default__div": true
                      }) +
                      " " +
                      ("mobile-app" as const)
                    }
                  >
                    <div
                      data-plasmic-name={"screenshot202010060125451"}
                      data-plasmic-override={
                        overrides.screenshot202010060125451
                      }
                      className={
                        classNames({
                          FirstSection__screenshot202010060125451__NWaD1: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) +
                        " " +
                        ("app-img3" as const)
                      }
                    ></div>

                    <div
                      data-plasmic-name={"screenshot202010060125271"}
                      data-plasmic-override={
                        overrides.screenshot202010060125271
                      }
                      className={
                        classNames({
                          FirstSection__screenshot202010060125271__SxFWb: true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) +
                        " " +
                        ("app-img2" as const)
                      }
                    ></div>

                    <div
                      data-plasmic-name={"screenshot202010060124191"}
                      data-plasmic-override={
                        overrides.screenshot202010060124191
                      }
                      className={
                        classNames({
                          "FirstSection__screenshot202010060124191__PyC-s": true,
                          "plasmic-default__all": true,
                          "plasmic-default__div": true
                        }) +
                        " " +
                        ("app-img1" as const)
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

class PlasmicFirstSection__Renderer extends Renderer<
  PlasmicFirstSection__VariantsArgs,
  PlasmicFirstSection__ArgsType,
  PlasmicFirstSection__OverridesType,
  "root"
> {
  constructor(
    variants: PlasmicFirstSection__VariantsArgs,
    args: PlasmicFirstSection__ArgsType
  ) {
    super(variants, args, PlasmicFirstSection__RenderFunc, "root");
  }

  protected create(
    variants: PlasmicFirstSection__VariantsArgs,
    args: PlasmicFirstSection__ArgsType
  ) {
    return new PlasmicFirstSection__Renderer(variants, args);
  }

  getInternalVariantProps(): (keyof PlasmicFirstSection__VariantsArgs)[] {
    return PlasmicFirstSection__VariantProps;
  }

  getInternalArgProps(): (keyof PlasmicFirstSection__ArgsType)[] {
    return PlasmicFirstSection__ArgProps;
  }

  forNode(
    name: "screenshot202010060124191"
  ): NodeRenderer<
    PlasmicFirstSection__VariantsArgs,
    PlasmicFirstSection__ArgsType,
    {
      screenshot202010060124191?: Flex<"div">;
    }
  >;

  forNode(
    name: "screenshot202010060125271"
  ): NodeRenderer<
    PlasmicFirstSection__VariantsArgs,
    PlasmicFirstSection__ArgsType,
    {
      screenshot202010060125271?: Flex<"div">;
    }
  >;

  forNode(
    name: "screenshot202010060125451"
  ): NodeRenderer<
    PlasmicFirstSection__VariantsArgs,
    PlasmicFirstSection__ArgsType,
    {
      screenshot202010060125451?: Flex<"div">;
    }
  >;

  forNode(
    name: "mobileApp"
  ): NodeRenderer<
    PlasmicFirstSection__VariantsArgs,
    PlasmicFirstSection__ArgsType,
    {
      mobileApp?: Flex<"div">;
      screenshot202010060125451?: Flex<"div">;
      screenshot202010060125271?: Flex<"div">;
      screenshot202010060124191?: Flex<"div">;
    }
  >;

  forNode(
    name: "link"
  ): NodeRenderer<
    PlasmicFirstSection__VariantsArgs,
    PlasmicFirstSection__ArgsType,
    {
      link?: Flex<"a">;
    }
  >;

  forNode(
    name: "projects"
  ): NodeRenderer<
    PlasmicFirstSection__VariantsArgs,
    PlasmicFirstSection__ArgsType,
    {
      projects?: Flex<"div">;
      link?: Flex<"a">;
      mobileApp?: Flex<"div">;
      screenshot202010060125451?: Flex<"div">;
      screenshot202010060125271?: Flex<"div">;
      screenshot202010060124191?: Flex<"div">;
    }
  >;

  forNode(
    name: "root"
  ): NodeRenderer<
    PlasmicFirstSection__VariantsArgs,
    PlasmicFirstSection__ArgsType,
    {
      root?: Flex<"div">;
      projects?: Flex<"div">;
      link?: Flex<"a">;
      mobileApp?: Flex<"div">;
      screenshot202010060125451?: Flex<"div">;
      screenshot202010060125271?: Flex<"div">;
      screenshot202010060124191?: Flex<"div">;
    }
  >;

  forNode(name: keyof PlasmicFirstSection__OverridesType) {
    return super.forNode(name);
  }
}

type PlasmicFirstSectionRootProps = PlasmicFirstSection__VariantsArgs &
  PlasmicFirstSection__ArgsType & {
    variants?: PlasmicFirstSection__VariantsArgs;
    args?: PlasmicFirstSection__ArgsType;
    overrides?: {
      root?: Flex<"div">;
      projects?: Flex<"div">;
      link?: Flex<"a">;
      mobileApp?: Flex<"div">;
      screenshot202010060125451?: Flex<"div">;
      screenshot202010060125271?: Flex<"div">;
      screenshot202010060124191?: Flex<"div">;
    };

    root?: Flex<"div">;
    projects?: Flex<"div">;
    link?: Flex<"a">;
    mobileApp?: Flex<"div">;
    screenshot202010060125451?: Flex<"div">;
    screenshot202010060125271?: Flex<"div">;
    screenshot202010060124191?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicFirstSection__VariantsArgs
    | keyof PlasmicFirstSection__ArgsType
    | "variants"
    | "args"
    | "root"
    | "projects"
    | "link"
    | "mobileApp"
    | "screenshot202010060125451"
    | "screenshot202010060125271"
    | "screenshot202010060124191"
  >;

export const PlasmicFirstSection = function PlasmicFirstSectionRoot<
  T extends PlasmicFirstSectionRootProps
>(props: T & StrictProps<T, PlasmicFirstSectionRootProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "root",
    descendantNames: [
      "root",
      "projects",
      "link",
      "mobileApp",
      "screenshot202010060125451",
      "screenshot202010060125271",
      "screenshot202010060124191"
    ],

    internalArgPropNames: PlasmicFirstSection__ArgProps,
    internalVariantPropNames: PlasmicFirstSection__VariantProps
  });

  return PlasmicFirstSection__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "root"
  });
};

type PlasmicFirstSectionProjectsProps = PlasmicFirstSection__VariantsArgs &
  PlasmicFirstSection__ArgsType & {
    variants?: PlasmicFirstSection__VariantsArgs;
    args?: PlasmicFirstSection__ArgsType;
    overrides?: {
      projects?: Flex<"div">;
      link?: Flex<"a">;
      mobileApp?: Flex<"div">;
      screenshot202010060125451?: Flex<"div">;
      screenshot202010060125271?: Flex<"div">;
      screenshot202010060124191?: Flex<"div">;
    };

    projects?: Flex<"div">;
    link?: Flex<"a">;
    mobileApp?: Flex<"div">;
    screenshot202010060125451?: Flex<"div">;
    screenshot202010060125271?: Flex<"div">;
    screenshot202010060124191?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicFirstSection__VariantsArgs
    | keyof PlasmicFirstSection__ArgsType
    | "variants"
    | "args"
    | "projects"
    | "link"
    | "mobileApp"
    | "screenshot202010060125451"
    | "screenshot202010060125271"
    | "screenshot202010060124191"
  >;

PlasmicFirstSection.projects = function PlasmicFirstSectionProjects<
  T extends PlasmicFirstSectionProjectsProps
>(props: T & StrictProps<T, PlasmicFirstSectionProjectsProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "projects",
    descendantNames: [
      "projects",
      "link",
      "mobileApp",
      "screenshot202010060125451",
      "screenshot202010060125271",
      "screenshot202010060124191"
    ],

    internalArgPropNames: PlasmicFirstSection__ArgProps,
    internalVariantPropNames: PlasmicFirstSection__VariantProps
  });

  return PlasmicFirstSection__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "projects"
  });
};

type PlasmicFirstSectionLinkProps = PlasmicFirstSection__VariantsArgs &
  PlasmicFirstSection__ArgsType & {
    variants?: PlasmicFirstSection__VariantsArgs;
    args?: PlasmicFirstSection__ArgsType;
    overrides?: {
      link?: Flex<"a">;
    };

    link?: Flex<"a">;
  } & Omit<
    Partial<React.ComponentProps<"a">>,
    | keyof PlasmicFirstSection__VariantsArgs
    | keyof PlasmicFirstSection__ArgsType
    | "variants"
    | "args"
    | "link"
  >;

PlasmicFirstSection.link = function PlasmicFirstSectionLink<
  T extends PlasmicFirstSectionLinkProps
>(props: T & StrictProps<T, PlasmicFirstSectionLinkProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "link",
    descendantNames: ["link"],
    internalArgPropNames: PlasmicFirstSection__ArgProps,
    internalVariantPropNames: PlasmicFirstSection__VariantProps
  });

  return PlasmicFirstSection__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "link"
  });
};

type PlasmicFirstSectionMobileAppProps = PlasmicFirstSection__VariantsArgs &
  PlasmicFirstSection__ArgsType & {
    variants?: PlasmicFirstSection__VariantsArgs;
    args?: PlasmicFirstSection__ArgsType;
    overrides?: {
      mobileApp?: Flex<"div">;
      screenshot202010060125451?: Flex<"div">;
      screenshot202010060125271?: Flex<"div">;
      screenshot202010060124191?: Flex<"div">;
    };

    mobileApp?: Flex<"div">;
    screenshot202010060125451?: Flex<"div">;
    screenshot202010060125271?: Flex<"div">;
    screenshot202010060124191?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicFirstSection__VariantsArgs
    | keyof PlasmicFirstSection__ArgsType
    | "variants"
    | "args"
    | "mobileApp"
    | "screenshot202010060125451"
    | "screenshot202010060125271"
    | "screenshot202010060124191"
  >;

PlasmicFirstSection.mobileApp = function PlasmicFirstSectionMobileApp<
  T extends PlasmicFirstSectionMobileAppProps
>(props: T & StrictProps<T, PlasmicFirstSectionMobileAppProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "mobileApp",
    descendantNames: [
      "mobileApp",
      "screenshot202010060125451",
      "screenshot202010060125271",
      "screenshot202010060124191"
    ],

    internalArgPropNames: PlasmicFirstSection__ArgProps,
    internalVariantPropNames: PlasmicFirstSection__VariantProps
  });

  return PlasmicFirstSection__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "mobileApp"
  });
};

type PlasmicFirstSectionScreenshot202010060125451Props = PlasmicFirstSection__VariantsArgs &
  PlasmicFirstSection__ArgsType & {
    variants?: PlasmicFirstSection__VariantsArgs;
    args?: PlasmicFirstSection__ArgsType;
    overrides?: {
      screenshot202010060125451?: Flex<"div">;
    };

    screenshot202010060125451?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicFirstSection__VariantsArgs
    | keyof PlasmicFirstSection__ArgsType
    | "variants"
    | "args"
    | "screenshot202010060125451"
  >;

PlasmicFirstSection.screenshot202010060125451 = function PlasmicFirstSectionScreenshot202010060125451<
  T extends PlasmicFirstSectionScreenshot202010060125451Props
>(
  props: T & StrictProps<T, PlasmicFirstSectionScreenshot202010060125451Props>
) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "screenshot202010060125451",
    descendantNames: ["screenshot202010060125451"],
    internalArgPropNames: PlasmicFirstSection__ArgProps,
    internalVariantPropNames: PlasmicFirstSection__VariantProps
  });

  return PlasmicFirstSection__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "screenshot202010060125451"
  });
};

type PlasmicFirstSectionScreenshot202010060125271Props = PlasmicFirstSection__VariantsArgs &
  PlasmicFirstSection__ArgsType & {
    variants?: PlasmicFirstSection__VariantsArgs;
    args?: PlasmicFirstSection__ArgsType;
    overrides?: {
      screenshot202010060125271?: Flex<"div">;
    };

    screenshot202010060125271?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicFirstSection__VariantsArgs
    | keyof PlasmicFirstSection__ArgsType
    | "variants"
    | "args"
    | "screenshot202010060125271"
  >;

PlasmicFirstSection.screenshot202010060125271 = function PlasmicFirstSectionScreenshot202010060125271<
  T extends PlasmicFirstSectionScreenshot202010060125271Props
>(
  props: T & StrictProps<T, PlasmicFirstSectionScreenshot202010060125271Props>
) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "screenshot202010060125271",
    descendantNames: ["screenshot202010060125271"],
    internalArgPropNames: PlasmicFirstSection__ArgProps,
    internalVariantPropNames: PlasmicFirstSection__VariantProps
  });

  return PlasmicFirstSection__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "screenshot202010060125271"
  });
};

type PlasmicFirstSectionScreenshot202010060124191Props = PlasmicFirstSection__VariantsArgs &
  PlasmicFirstSection__ArgsType & {
    variants?: PlasmicFirstSection__VariantsArgs;
    args?: PlasmicFirstSection__ArgsType;
    overrides?: {
      screenshot202010060124191?: Flex<"div">;
    };

    screenshot202010060124191?: Flex<"div">;
  } & Omit<
    Partial<React.ComponentProps<"div">>,
    | keyof PlasmicFirstSection__VariantsArgs
    | keyof PlasmicFirstSection__ArgsType
    | "variants"
    | "args"
    | "screenshot202010060124191"
  >;

PlasmicFirstSection.screenshot202010060124191 = function PlasmicFirstSectionScreenshot202010060124191<
  T extends PlasmicFirstSectionScreenshot202010060124191Props
>(
  props: T & StrictProps<T, PlasmicFirstSectionScreenshot202010060124191Props>
) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: "screenshot202010060124191",
    descendantNames: ["screenshot202010060124191"],
    internalArgPropNames: PlasmicFirstSection__ArgProps,
    internalVariantPropNames: PlasmicFirstSection__VariantProps
  });

  return PlasmicFirstSection__RenderFunc({
    variants,
    args,
    overrides,
    forNode: "screenshot202010060124191"
  });
};

PlasmicFirstSection.createRenderer = () =>
  new PlasmicFirstSection__Renderer({}, {});

export default PlasmicFirstSection;
/* prettier-ignore-end */