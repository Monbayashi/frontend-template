type FormInputWrapperProps = {
  /** labelのhtmlFor */
  htmlFor: string;
  /** labelテキスト */
  labelText: string;
  /** inputタグ */
  children: React.ReactElement<HTMLInputElement>;
  /** inputのvalidation errorメッセージ */
  errorMsg?: string;
};

/**
 * [Ui-Parts] formタグ内のInputのラッパー
 * @param {FormInputWrapperProps} props
 * @returns
 */
export const FormInputWrapper = (props: FormInputWrapperProps) => {
  return (
    <div>
      <label htmlFor={props.htmlFor} className="block text-sm font-medium leading-6 text-gray-900">
        {props.labelText}
      </label>
      <div className="mt-2">{props.children}</div>
      <div className="h-4 text-sm text-red-800">{props.errorMsg}</div>
    </div>
  );
};
