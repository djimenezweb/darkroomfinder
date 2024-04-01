'use client';

import { sizes, processes } from '@/constants/lab-options';
import SubmitButton from '@/components/forms/SubmitButton';
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
} from '@/components/forms/FormElements';
import { LOCATION } from '@/constants/location-form-fields';
import MyDropzone from '@/components/forms/Dropzone';
import { ILab } from '@/models/Lab';
import { editDarkroom } from '@/actions/editDarkroom';
import { useRouter } from 'next/navigation';
import { ILabWithOwner } from '@/utils/getLabById';

interface IErrorMessages {
  name: string[] | undefined;
  description: string[] | undefined;
  address: string[] | undefined;
  city: string[] | undefined;
  state: string[] | undefined;
  zipcode: string[] | undefined;
  country: string[] | undefined;
  latitude: string[] | undefined;
  longitude: string[] | undefined;
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
  latitude: undefined,
  longitude: undefined,
  sizes: undefined,
  processes: undefined,
  images: undefined
};

// type TLocation = ILab['location'];

export default function EditLabForm({ lab }: { lab: ILabWithOwner }) {
  const router = useRouter();
  const documentId = lab._id;
  const editDarkroomWithId = editDarkroom.bind(null, documentId);
  const [errors, formAction] = useFormState(editDarkroomWithId, initialState);

  return (
    <form
      action={formAction}
      className="rounded-md border border-gray-dark-400 shadow-sm mb-8 overflow-hidden">
      <div className="bg-gray-dark-300 border-b border-gray-dark-400 flex items-center px-6 py-4">
        <input
          id="name"
          name="name"
          type="text"
          className={twMerge(
            styles.inputTextStyles,
            'w-full text-2xl sm:text-3xl',
            errors?.name &&
              'bg-error-200 border-error-500 placeholder-error-500'
          )}
          defaultValue={lab.name}>
          {errors?.name && (
            <FormErrorParagraph>{errors.name}</FormErrorParagraph>
          )}
        </input>
      </div>

      <FormRow>
        <FormLabel htmlFor="description">Description</FormLabel>

        <div className="col-span-2">
          <textarea
            id="description"
            name="description"
            className={twMerge(
              styles.inputTextStyles,
              errors?.description &&
                'bg-error-200 border-error-500 placeholder-error-500'
            )}
            defaultValue={lab.description}
          />
          {errors?.description && (
            <FormErrorParagraph>{errors.description}</FormErrorParagraph>
          )}
        </div>
      </FormRow>

      <FormRow>
        {LOCATION.map(({ id }) => (
          <>
            <FormLabel htmlFor={id} key={id + 'label'}>
              <span className="capitalize">{id}</span>
            </FormLabel>
            <div className="col-span-2 space-y-2" key={id + 'input'}>
              <input
                id={id}
                name={id}
                type="text"
                defaultValue={lab.location[id as keyof ILab['location']]}
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
          </>
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
            {sizes.map(({ id, fullName, checked }) => (
              <FormCheckBox
                key={id}
                group="sizes"
                id={id}
                fullName={fullName}
                checked={lab.sizes.includes(id)}
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
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-dark-500 hover:bg-gray-dark-600 text-xs p-2.5 lg:px-2.5 lg:py-1 rounded-md font-normal border border-gray-dark-700 hover:border-gray-dark-800">
          Cancel
        </button>
        <SubmitButton text="Save changes" />
      </div>
    </form>
  );
}
