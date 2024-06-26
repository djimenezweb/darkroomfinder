'use client';

import { sizes, processes } from '@/constants/lab-options';
import SubmitButton from './SubmitButton';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';
import { useFormState } from 'react-dom';
import {
  FormCheckBox,
  FormFieldSet,
  FormInput,
  FormLabel,
  FormRow,
  FormError
} from './FormElements';
import { LOCATION } from '@/constants/location-form-fields';
import { addDarkroom } from '@/actions/addDarkroom';
import { FormEvent, useState, useTransition } from 'react';
import CancelButton from './CancelButton';
import Dropzone from './Dropzone';
import Previews from './Previews';

interface IErrorMessages {
  [key: string]: string[] | undefined;
}

export default function AddLabForm() {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);
  const [errors, formAction] = useFormState<
    IErrorMessages | undefined,
    FormData
  >(addDarkroom, {});
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    startTransition(() => {
      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      formData.delete('images');
      for (const file of files) {
        const blob = new Blob([file], { type: file.type });
        formData.append('images', blob, file.name);
      }
      formAction(formData);
    });
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="overflow-hidden rounded-md border border-gray-dark-400 shadow-sm"
    >
      <div className="flex items-center border-b border-gray-dark-400 bg-gray-dark-300 px-6 py-4">
        <h2 className="text-base">Add a new darkroom</h2>
      </div>
      <div className="flex items-center border-b border-gray-dark-400 bg-gray-dark-300 px-6 py-4">
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
            styles.input.text,
            styles.input.focus,
            errors?.name && styles.input.error
          )}
          defaultValue=""
        >
          {errors?.name && <FormError>{errors.name}</FormError>}
        </FormInput>
      </FormRow>

      <FormRow>
        <FormLabel htmlFor="link">Link</FormLabel>
        <FormInput
          id="link"
          name="link"
          placeholder="Website"
          type="text"
          className={twMerge(
            styles.input.text,
            styles.input.focus,
            errors?.link && styles.input.error
          )}
          defaultValue=""
        >
          {errors?.link && <FormError>{errors.link}</FormError>}
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
              styles.input.text,
              styles.input.focus,
              'h-28',
              errors?.description && styles.input.error
            )}
            defaultValue=""
          />
          {errors?.description && <FormError>{errors.description}</FormError>}
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
                  styles.input.text,
                  styles.input.focus,
                  errors?.[id as keyof IErrorMessages] && styles.input.error
                )}
              />
              {errors?.[id as keyof IErrorMessages] && (
                <FormError>{errors[id as keyof IErrorMessages]}</FormError>
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
          {errors?.sizes && <FormError>{errors.sizes}</FormError>}
        </div>
      </FormRow>
      <FormRow>
        <FormFieldSet name="processes">Processes</FormFieldSet>

        <div className="col-span-2">
          <ul className="flex flex-wrap gap-2">
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
          {errors?.processes && <FormError>{errors.processes}</FormError>}
        </div>
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="uploadedPictures">Images</FormLabel>
        <div className="col-span-2 space-y-4">
          <Dropzone files={files} setFiles={setFiles} />
          {files.length > 0 && <Previews files={files} setFiles={setFiles} />}

          {errors?.images && <FormError>{errors.images}</FormError>}
        </div>
      </FormRow>
      {errors && Object.keys(errors).length > 0 && (
        <FormRow>
          <div />
          <FormError>Check errors and try again</FormError>
        </FormRow>
      )}
      <div className="flex items-center justify-between border-b border-gray-dark-400 bg-gray-dark-300 px-6 py-4">
        <CancelButton />
        <SubmitButton isLoading={isLoading} text="Add new darkroom" />
      </div>
    </form>
  );
}
