import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { imageBuilder } from '../../lib/sanity-client';
import { FormGroq } from '../../lib/sanity-queries';

interface Props {
  data: FormGroq;
}

function ContactForm({ data }: Props) {
  const initial = {
    fullname: '',
    email: '',
    message: '',
  };
  const [values, setValues] = useState(initial);
  const [formState, setFormState] = useState('initial');

  const submitMessage = async (event: FormEvent) => {
    event.preventDefault();
    setFormState('submitting');

    const target = event.target as HTMLFormElement;
    if (target.validator.value !== '') return;
    const contactMessage = {
      _type: 'contactMessage',
      name: target.fullname.value,
      email: target.email.value,
      message: target.message.value,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactMessage),
    });

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
    }
    const data = await response
      .json()
      .then(() => {
        setValues(initial);
        setFormState('submitted');
      })
      .catch(() => {
        setFormState('failed');
      });
    console.log('POST: ', data);
  };

  return (
    <div className="flex justify-center w-full max-w-primary-col mx-auto mb-16">
      <div className="w-full max-w-[800px] mx-auto">
        <div className='portable-text mb-10 px-4'>
          {data.info && <PortableText value={data.info} />}
        </div>
        <div>
          {formState === 'initial' && (
            <form
              onSubmit={submitMessage}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4"
            >
              <div className="hidden">
                <input type="text" id="validator" name="validator" />
              </div>
              <div>
                <label htmlFor="fullname" className="form-label">
                  Your name
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  placeholder="ex: John Smith"
                  autoComplete="name"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  autoComplete="email"
                  className="form-input"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description" className="form-label">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  autoComplete="none"
                  className="form-input"
                />
              </div>
              <div className="sm:col-span-2 justify-self-center mt-4">
                <button className="btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
          {formState === 'submitting' && (
            <div className="w-full flex justify-center animate-bounce">
              {data.siteSettings.secondaryIcon &&
                <Image
                  className="rounded-lg overflow-clip shadow-lg"
                  layout='intrinsic'
                  width={40}
                  height={40}
                  alt={`LC`}
                  src={imageBuilder(data.siteSettings.secondaryIcon).width(40).height(40).url()}
                />
              }
            </div>
          )}
          {formState === 'submitted' && (
            <div className="w-full flex flex-col items-center justify-center">
              Thank you for your message! We will respond promptly.
              <Link href={'/'}>
                <button className="btn-primary mt-6">Keep Reading</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
