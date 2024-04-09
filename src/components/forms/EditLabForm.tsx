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
import { FormEvent, Fragment, useState } from 'react';
import CancelButton from './CancelButton';
import { ILabWithOwner, ILocation } from '@/types/types';
import { editDarkroom } from '@/actions/editDarkroom';
import Image from 'next/image';
import Dropzone from './Dropzone';
import Previews from './Previews';
import PreviewsEditForm from './PreviewsEditForm';

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
  const [isPending, setIsPending] = useState<boolean>(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (totalImages <= 0) return;
    setIsPending(true);
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    formData.delete('images');
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
  }

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      className="rounded-md border border-gray-dark-400 shadow-sm mb-8 overflow-hidden">
      <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center px-6 py-4">
        <input
          type="text"
          name="name"
          id="name"
          className={twMerge(
            styles.inputTextStyles,
            'w-full text-2xl sm:text-3xl',
            errors?.name &&
              'bg-error-200 border-error-500 placeholder-error-500'
          )}
          defaultValue={lab.name}
        />
        {errors?.name && <FormError>{errors.name}</FormError>}
      </div>

      <FormRow>
        <FormLabel htmlFor="description">Description</FormLabel>
        <div className="col-span-2">
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className={twMerge(
              styles.inputTextStyles,
              'min-h-28',
              errors?.description &&
                'bg-error-200 border-error-500 placeholder-error-500'
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
                  styles.inputTextStyles,
                  errors?.[id as keyof IErrorMessages] &&
                    'bg-error-200 border-error-500 placeholder-error-500'
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
              styles.inputTextStyles,
              errors?.latitude &&
                'bg-error-200 border-error-500 placeholder-error-500'
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
              styles.inputTextStyles,
              errors?.longitude &&
                'bg-error-200 border-error-500 placeholder-error-500'
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
          <ul className="flex gap-2 flex-wrap">
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
            <PreviewsEditForm
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
      <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center justify-between px-6 py-4">
        <CancelButton />
        <SubmitButton isPending={isPending} text="Save changes" />
      </div>
    </form>
  );
}
