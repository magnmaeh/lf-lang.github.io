import React, { useState, useEffect } from 'react';
import { targets, TargetsType, TargetToNameMap } from './index';
import { NoSelectorTargetCodeBlock } from './LangSpecific';

interface WebpackImportedRawModule {
  default: { readonly [key: string]: string };
  [key: string]: unknown;
}

export const DynamicMultiTargetCodeblock = ({
  file,
  doNotTransformInMDX,
  ...suppliedTargets
}: {
  file?: string;
  doNotTransformInMDX?: boolean;
} & Record<TargetsType, boolean>): JSX.Element => {
  const [targetToCodeState, setTargetToCodeState] = useState<
    Record<TargetsType, string | null>
  >({} as Record<TargetsType, string | null>);

  useEffect(() => {
    const getCode = async (targetLang: TargetsType) => {
      const content: WebpackImportedRawModule = await import(
        `@site/docs/lingua-franca/codes/${targetLang}/${file}.lf`
      );
      setTargetToCodeState((prevState) => ({
        ...prevState,
        [targetLang]: content.default.toString(),
      }));
    };

    if (file != null) {
      Object.entries(suppliedTargets).forEach(
        ([t, pred]: [TargetsType, boolean]) => {
          if (pred == true) {
            getCode(t).catch((e) => console.log(e));
          }
        }
      );
    }
  }, []);

  return <>
    { !doNotTransformInMDX && <b>Warning: DynamicMultiTargetCodeblock is present, but DynamicMultiTargetCodeblock is not set. This means corresponding MDX plugin that transforms it into code selector and import statements is not working correctly!</b> }
    <NoSelectorTargetCodeBlock {...targetToCodeState} />
  </>;
};
