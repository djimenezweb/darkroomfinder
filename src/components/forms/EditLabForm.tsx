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
import { FormEvent, Fragment, useState, useTransition } from 'react';
import CancelButton from './CancelButton';
import { ILabWithOwner, ILocation } from '@/types/types';
import { editDarkroom } from '@/actions/editDarkroom';
import Dropzone from './Dropzone';
import Previews from './Previews';

interface IErrorMessages {
  [key: string]: string[] | undefined;
}

export default function EditLabForm({ lab }: { lab: ILabWithOwner }) {
  // Document id as string
  const documentId = lab._id.toString();
  // Pass id to server action as parameter
  const editDarkroomWithId = editDarkroom.bind(null, documentId);

  // Already saved images
  const [savedImages, setSavedImages] = useState<string[]>(lab.images);
  // Files and previews state
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);
  // Images to delete
  const [toBeDeletedImages, setToBeDeletedImages] = useState<string[]>([]);

  const totalImages = savedImages.length + files.length;

  // Validation
  const [errors, formAction] = useFormState<
    IErrorMessages | undefined,
    FormData
  >(editDarkroomWithId, {});

  // Pending state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (totalImages <= 0) return;
    setIsLoading(true);
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    formData.delete('images');
    startTransition(() => {
      for (const file of files) {
        const blob = new Blob([file], { type: file.type });
        formData.append('images', blob, file.name);
      }
      for (const url of savedImages) {
        formData.append('savedImages', url);
      }
      for (const url of toBeDeletedImages) {
        formData.append('toBeDeletedImages', url);
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
        <input
          type="text"
          name="name"
          id="name"
          className={twMerge(
            styles.input.text,
            styles.input.focus,
            'w-full text-2xl sm:text-3xl',
            errors?.name &&
              'border-error-500 bg-error-200 placeholder-error-500'
          )}
          defaultValue={lab.name}
        />
        {errors?.name && <FormError>{errors.name}</FormError>}
      </div>

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
            errors?.link &&
              'border-error-500 bg-error-200 placeholder-error-500'
          )}
          defaultValue={lab.link}
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
              'min-h-28',
              errors?.description &&
                'border-error-500 bg-error-200 placeholder-error-500'
            )}
            defaultValue={lab.description}
          />
          {errors?.description && <FormError>{errors.description}</FormError>}
        </div>
      </FormRow>

      <FormRow>
        {LOCATION.map(({ id }) => (
          <Fragment key={id}>
            <FormLabel>
              <span className="capitalize">{id}</span>
            </FormLabel>
            <div className="col-span-2 space-y-2">
              <input
                id={id}
                name={id}
                type="text"
                defaultValue={lab.location[id as keyof ILocation]}
                className={twMerge(
                  'bg-gray-dark-400',
                  styles.input.text,
                  styles.input.focus,
                  errors?.[id as keyof IErrorMessages] &&
                    'border-error-500 bg-error-200 placeholder-error-500'
                )}
              />
              {errors?.[id as keyof IErrorMessages] && (
                <FormError>{errors[id as keyof IErrorMessages]}</FormError>
              )}
            </div>
          </Fragment>
        ))}
        <FormLabel htmlFor="latitude">Latitude</FormLabel>
        <div className="col-span-2 space-y-2">
          <input
            type="text"
            id="latitude"
            name="latitude"
            defaultValue={lab.location.latitude}
            className={twMerge(
              'bg-gray-dark-400',
              styles.input.text,
              styles.input.focus,
              errors?.latitude &&
                'border-error-500 bg-error-200 placeholder-error-500'
            )}
          />
        </div>
        <FormLabel htmlFor="longitude">Longitude</FormLabel>
        <div className="col-span-2 space-y-2">
          <input
            type="text"
            id="longitude"
            name="longitude"
            defaultValue={lab.location.longitude}
            className={twMerge(
              'bg-gray-dark-400',
              styles.input.text,
              styles.input.focus,
              errors?.longitude &&
                'border-error-500 bg-error-200 placeholder-error-500'
            )}
          />
        </div>
      </FormRow>
      <FormRow>
        <FormFieldSet name="sizes">Sizes</FormFieldSet>
        <div className="col-span-2">
          <ul className="flex gap-2">
            {sizes.map(({ id, fullName }) => (
              <FormCheckBox
                key={id}
                group="sizes"
                id={id}
                fullName={fullName}
                checked={lab.sizes.includes(id)}
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
            {processes.map(({ id, fullName }) => (
              <FormCheckBox
                key={id}
                group="processes"
                id={id}
                fullName={fullName}
                checked={lab.processes.includes(id)}
              />
            ))}
          </ul>
          {errors?.processes && <FormError>{errors.processes}</FormError>}
        </div>
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="images">Images</FormLabel>
        <div className="col-span-2 space-y-4">
          <Dropzone
            files={files}
            setFiles={setFiles}
            savedImages={savedImages.length}
          />
          {totalImages > 0 && (
            <Previews
              savedImages={savedImages}
              setSavedImages={setSavedImages}
              files={files}
              setFiles={setFiles}
              setToBeDeletedImages={setToBeDeletedImages}
            />
          )}
          {totalImages <= 0 && <FormError>Upload at least one image</FormError>}
        </div>
      </FormRow>
      <div className="flex items-center justify-between border-b border-gray-dark-400 bg-gray-dark-300 px-6 py-4">
        <CancelButton />
        <SubmitButton isLoading={isLoading} text="Save changes" />
      </div>
    </form>
  );
}
