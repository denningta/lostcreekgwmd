import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FormGroq } from '../../lib/sanity-queries';
import Image from 'next/image';
import { imageBuilder } from '../../lib/sanity-client';

interface Props {
  data: FormGroq;
}

function RequestForm({ data }: Props) {
  const initial = {
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    permitNumber: '',
    comments: '',
  };
  const [values, setValues] = useState(initial);
  const [formState, setFormState] = useState('initial');

  const submitMessage = async (event: FormEvent) => {
    event.preventDefault();
    setFormState('submitting');

    const target = event.target as HTMLFormElement;
    if (target.validator.value !== '') return;
    const requestMessage = {
      _type: 'requestMessage',
      name: target.fullname.value,
      email: target.email.value,
      phoneNumber: target.phoneNumber.value,
      permitNumber: target.permitNumber.value,
      requestedDate: target.date.value,
      requestedTime: target.time.value,
      comments: target.comments.value,
      status: 'new',
      createdAt: new Date().toDateString()
    };

    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestMessage)
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
                  Full name
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
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  autoComplete="email"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="form-label">
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="(XXX) XXX-XXX"
                  autoComplete="phone"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="permitNumber" className="form-label">
                  Well Permit Number
                </label>
                <input
                  id="permitNumber"
                  name="permitNumber"
                  placeholder=""
                  className="form-input"
                />
                <a className="text-xs" href="https://dwr.state.co.us/Tools/WellPermits" target="_blank">I dont know my well permit number!</a>
              </div>
              <div>
                <label htmlFor="date" className="form-label">
                  Requested Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder=""
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="time" className="form-label">
                  Requested Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  placeholder=""
                  className="form-input"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="comments" className="form-label">
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  placeholder="Ex: meeting location, gate codes, etc."
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

export default RequestForm;
