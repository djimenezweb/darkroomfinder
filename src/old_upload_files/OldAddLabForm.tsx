'use client';

import { sizes, processes } from '@/constants/lab-options';
import SubmitButton from '../components/forms/SubmitButton';
import { addDarkroom } from '@/old_upload_files/old_addDarkroom';
import { twMerge } from 'tailwind-merge';
import styles from '@/styles/styles';
import { useFormState } from 'react-dom';
import {
  FormCheckBox,
  FormFieldSet,
  FormInput,
  FormLabel,
  FormRow,
  FormErrorParagraph
} from '../components/forms/FormElements';
import { LOCATION } from '@/constants/location-form-fields';
import MyDropzone from './OldDropzone';
import CancelButton from '../components/forms/CancelButton';

interface IErrorMessages {
  name: string[] | undefined;
  description: string[] | undefined;
  address: string[] | undefined;
  city: string[] | undefined;
  state: string[] | undefined;
  zipcode: string[] | undefined;
  country: string[] | undefined;
  sizes: string[] | undefined;
  processes: string[] | undefined;
  images: string[] | undefined;
}

const initialState: IErrorMessages = {
  name: undefined,
  description: undefined,
  address: undefined,
  city: undefined,
  state: undefined,
  zipcode: undefined,
  country: undefined,
  sizes: undefined,
  processes: undefined,
  images: undefined
};

export default function OldAddLabForm() {
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
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          id="name"
          name="name"
          placeholder="Darkroom name"
          type="text"
          className={twMerge(
            styles.inputTextStyles,
            errors?.name &&
              'bg-error-200 border-error-500 placeholder-error-500'
          )}
          defaultValue="">
          {errors?.name && (
            <FormErrorParagraph>{errors.name}</FormErrorParagraph>
          )}
        </FormInput>
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="description">Description</FormLabel>

        <div className="col-span-2">
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className={twMerge(
              styles.inputTextStyles,
              errors?.description &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue=""
          />
          {errors?.description && (
            <FormErrorParagraph>{errors.description}</FormErrorParagraph>
          )}
        </div>
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="address">Location</FormLabel>
        <div className="col-span-2 space-y-2">
          {LOCATION.map(({ id, placeholder }) => (
            <div key={id}>
              <input
                id={id}
                name={id}
                placeholder={placeholder}
                type="text"
                defaultValue=""
                className={twMerge(
                  'bg-gray-dark-400',
                  styles.inputTextStyles,
                  errors?.[id as keyof IErrorMessages] &&
                    'bg-error-200 border-error-500 placeholder-error-500'
                )}
              />
              {errors?.[id as keyof IErrorMessages] && (
                <FormErrorParagraph>
                  {errors[id as keyof IErrorMessages]}
                </FormErrorParagraph>
              )}
            </div>
          ))}
        </div>
      </FormRow>
      <FormRow>
        <FormFieldSet name="sizes">Sizes</FormFieldSet>
        <div className="col-span-2">
          <ul className="flex gap-2">
            {sizes.map(({ id, fullName, checked }) => (
              <FormCheckBox
                key={id}
                group="sizes"
                id={id}
                fullName={fullName}
                checked={checked}
              />
            ))}
          </ul>
          {errors?.sizes && (
            <FormErrorParagraph>{errors.sizes}</FormErrorParagraph>
          )}
        </div>
      </FormRow>
      <FormRow>
        <FormFieldSet name="processes">Processes</FormFieldSet>

        <div className="col-span-2">
          <ul className="flex gap-2 flex-wrap">
            {processes.map(({ id, fullName, checked }) => (
              <FormCheckBox
                key={id}
                group="processes"
                id={id}
                fullName={fullName}
                checked={checked}
              />
            ))}
          </ul>
          {errors?.processes && (
            <FormErrorParagraph>{errors.processes}</FormErrorParagraph>
          )}
        </div>
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="uploadedPictures">Images</FormLabel>
        <div className="col-span-2">
          <MyDropzone />
          {errors?.images && (
            <FormErrorParagraph>{errors.images}</FormErrorParagraph>
          )}
        </div>
      </FormRow>
      <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center justify-between px-6 py-4">
        <CancelButton />
        <SubmitButton text="Add new darkroom" />
      </div>
    </form>
  );
}