import {
  ReactNode,
  LabelHTMLAttributes,
  FieldsetHTMLAttributes,
  InputHTMLAttributes
} from 'react';

export function FormRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center border-b border-gray-dark-400 bg-gray-dark-300 px-6 py-4">
      <div className="grid w-full gap-2 text-sm md:grid md:grid-cols-3">
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
    <div className="col-span-1 flex flex-col space-y-2">
      <label {...props} className="block text-sm text-gray-dark-1100">
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
    <fieldset {...props} className="col-span-1 flex flex-col space-y-2">
      <legend className="block text-sm text-gray-dark-1100">{children}</legend>
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
        //tabIndex={0}
        htmlFor={id}
        className="cursor-pointer rounded border border-gray-dark-700 bg-transparent px-2.5 py-1 text-center text-xs text-gray-dark-1000 shadow-sm outline-none outline-0 hover:border-gray-dark-900 hover:bg-gray-dark-600 hover:text-gray-dark-1200 peer-checked:bg-gray-dark-500 peer-checked:text-gray-dark-1200 peer-checked:hover:border-gray-dark-800 peer-checked:hover:bg-gray-dark-600"
      >
        {fullName}
      </label>
    </li>
  );
}

export function FormError({ children }: { children: ReactNode }) {
  return <p className="mt-1 text-sm text-error-900">{children}</p>;
}
