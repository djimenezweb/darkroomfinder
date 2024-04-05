import {
  ReactNode,
  LabelHTMLAttributes,
  FieldsetHTMLAttributes,
  InputHTMLAttributes
} from 'react';

export function FormRow({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center px-6 py-4">
      <div className="w-full text-sm grid gap-2 md:grid md:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export function FormLabel({ children, ...props }: FormLabelProps) {
  return (
    <div className="flex flex-col space-y-2 col-span-1">
      <label {...props} className="block text-gray-dark-1100 text-sm">
        {children}
      </label>
    </div>
  );
}

type FormFieldSetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  children: ReactNode;
};

export function FormFieldSet({ children, ...props }: FormFieldSetProps) {
  return (
    <fieldset {...props} className="flex flex-col space-y-2 col-span-1">
      <legend className="block text-gray-dark-1100 text-sm">{children}</legend>
    </fieldset>
  );
}

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
};

export function FormInput({ children, ...props }: FormInputProps) {
  return (
    <div className="col-span-2">
      <input {...props} />
      {children}
    </div>
  );
}

type FormCheckBoxProps = {
  group: 'sizes' | 'processes';
  id: string;
  fullName: string;
  checked: boolean;
};

export function FormCheckBox({
  group,
  id,
  fullName,
  checked
}: FormCheckBoxProps) {
  return (
    <li>
      <input
        type="checkbox"
        name={group}
        id={id}
        defaultValue={id}
        className="peer hidden"
        defaultChecked={checked}
      />
      <label
        tabIndex={0}
        htmlFor={id}
        className="cursor-pointer text-center rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1000 hover:text-gray-dark-1200 bg-transparent hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-900 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1 peer-checked:text-gray-dark-1200 peer-checked:bg-gray-dark-500 peer-checked:hover:bg-gray-dark-600 peer-checked:hover:border-gray-dark-800">
        {fullName}
      </label>
    </li>
  );
}

export function FormErrorParagraph({ children }: { children: ReactNode }) {
  return <p className="mt-1 text-error-900 text-sm">{children}</p>;
}
