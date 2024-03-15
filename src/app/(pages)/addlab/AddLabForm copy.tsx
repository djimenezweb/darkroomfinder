'use client';

import { sizes, processes } from '@/constants/lab-options';
import SubmitButton from './SubmitButton';
import { addDarkroom } from '@/actions/actions';
import clsx from 'clsx';
import styles from '@/styles/styles';
import { useFormState } from 'react-dom';
import { FormRow } from './FormElements';

const initialState = {
  name: undefined,
  description: undefined,
  address: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  country: undefined,
  sizes: undefined,
  processes: undefined
};

export default function AddLabForm() {
  const [errors, formAction] = useFormState(addDarkroom, initialState);

  return (
    <form
      action={formAction}
      className="rounded-md border border-gray-dark-400 shadow-sm mb-8 overflow-hidden">
      <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center px-6 py-4">
        <h2 className="text-base">Add a new darkroom</h2>
      </div>
      <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center px-6 py-4">
        <p className="text-sm text-gray-dark-1000">
          Fill in the form to add your lab to the database.
          <br />
          Once published you will be able to edit or delete the information.
        </p>
      </div>

      <FormRow>
        <div className="flex flex-col space-y-2 col-span-1">
          <label htmlFor="name" className="block text-gray-dark-1100 text-sm">
            Name
          </label>
        </div>
        <div className="col-span-2">
          <input
            id="name"
            name="name"
            placeholder="Darkroom name"
            type="text"
            className={clsx(
              styles.inputTextStyles,
              errors?.name &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.name && (
            <p className="mt-1 text-error-900 text-sm">{errors.name}</p>
          )}
        </div>
      </FormRow>
      <FormRow>
        <div className="flex flex-col space-y-2 col-span-1">
          <label
            htmlFor="description"
            className="block text-gray-dark-1100 text-sm">
            Description
          </label>
        </div>
        <div className="col-span-2">
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className={clsx(
              styles.inputTextStyles,
              errors?.description &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.description && (
            <p className="mt-1 text-error-900 text-sm">{errors.description}</p>
          )}
        </div>
      </FormRow>
      <FormRow>
        <div className="flex flex-col space-y-2 col-span-1">
          <label
            htmlFor="address"
            className="block text-gray-dark-1100 text-sm">
            Location
          </label>
        </div>
        <div className="col-span-2 space-y-2">
          <input
            id="address"
            name="address"
            placeholder="Address"
            type="text"
            className={clsx(
              'bg-gray-dark-400',
              styles.inputTextStyles,
              errors?.address &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.address && (
            <p className="mt-1 text-error-900 text-sm">{errors.address}</p>
          )}
          <input
            id="city"
            name="city"
            placeholder="City"
            type="text"
            className={clsx(
              styles.inputTextStyles,
              errors?.city &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.city && (
            <p className="mt-1 text-error-900 text-sm">{errors.city}</p>
          )}
          <input
            id="state"
            name="state"
            placeholder="State / Province"
            type="text"
            className={clsx(
              styles.inputTextStyles,
              errors?.state &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.state && (
            <p className="mt-1 text-error-900 text-sm">{errors.state}</p>
          )}
          <input
            id="zip"
            name="zip"
            placeholder="ZIP Code / Postal Code"
            type="text"
            className={clsx(
              styles.inputTextStyles,
              errors?.zip &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.zip && (
            <p className="mt-1 text-error-900 text-sm">{errors.zip}</p>
          )}
          <input
            id="country"
            name="country"
            placeholder="Country"
            type="text"
            className={clsx(
              styles.inputTextStyles,
              errors?.country &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.country && (
            <p className="mt-1 text-error-900 text-sm">{errors.country}</p>
          )}
        </div>
      </FormRow>
      <FormRow>
        <fieldset name="sizes" className="flex flex-col space-y-2 col-span-1">
          <legend className="block text-gray-dark-1100 text-sm">Sizes</legend>
        </fieldset>
        <div className="col-span-2">
          <div className="flex gap-2">
            {sizes.map(({ id, fullName, checked }) => (
              <div key={id}>
                <input
                  type="checkbox"
                  name="sizes"
                  id={id}
                  defaultValue={id}
                  className="peer hidden"
                  defaultChecked={checked}
                />
                <label
                  tabIndex={0}
                  htmlFor={id}
                  className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1000 hover:text-gray-dark-1200 bg-transparent hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-900 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1 peer-checked:text-gray-dark-1200 peer-checked:bg-gray-dark-500 peer-checked:hover:bg-gray-dark-600 peer-checked:hover:border-gray-dark-800">
                  {fullName}
                </label>
              </div>
            ))}
          </div>
          {errors?.sizes && (
            <p className="mt-1 text-error-900 text-sm">{errors.sizes}</p>
          )}
        </div>
      </FormRow>
      <FormRow>
        <fieldset
          name="processes"
          className="flex flex-col space-y-2 col-span-1">
          <legend className="block text-gray-dark-1100 text-sm">
            Processes
          </legend>
        </fieldset>
        <div className="col-span-2">
          <div className="flex gap-2 flex-wrap">
            {processes.map(({ id, fullName, checked }) => (
              <div key={id}>
                <input
                  type="checkbox"
                  name="processes"
                  id={id}
                  defaultValue={id}
                  className="peer hidden"
                  defaultChecked={checked}
                />
                <label
                  tabIndex={0}
                  htmlFor={id}
                  className={clsx(
                    styles.uncheckedCheckBoxStyles,
                    styles.checkedCheckBoxStyles
                  )}>
                  {fullName}
                </label>
              </div>
            ))}
          </div>
          {errors?.processes && (
            <p className="mt-1 text-error-900 text-sm">{errors.processes}</p>
          )}
        </div>
      </FormRow>
      <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center justify-between px-6 py-4">
        <button
          type="button"
          className="bg-gray-dark-500 hover:bg-gray-dark-600 text-xs p-2.5 lg:px-2.5 lg:py-1 rounded-md font-normal border border-gray-dark-700 hover:border-gray-dark-800">
          Cancel
        </button>
        <SubmitButton />
      </div>
    </form>
  );
}
