import TestDropzone from '../addlab/BasicDropzone';

export default function page() {
  return (
    <section className="pt-32 h-screen w-96 mx-auto">
      <form action={receiveFile} className="flex flex-col gap-4">
        <input
          type="text"
          name="test"
          id="test"
          placeholder="text input test"
        />
        <TestDropzone />
        <button type="submit" className="border border-white px-4">
          Submit
        </button>
      </form>
    </section>
  );
}

async function receiveFile(formData: FormData) {
  'use server';
  console.log(formData);
  const file = formData.get('images');
  console.log(file);
}
