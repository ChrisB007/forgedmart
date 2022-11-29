import { Fragment, useEffect, useState, CSSProperties } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStatus } from '../slices/userSlice/userStatus';
import PulseLoader from 'react-spinners/PulseLoader';

export default function FirstPageModal() {
  const [open, setOpen] = useState(true);
  const { data: session } = useSession();
  const [color, setColor] = useState('#16a34a');
  const { isLoading, user } = useSelector((store) => store.userStatus);
  const [loading, setLoading] = useState(isLoading);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setOpen(false);

    //Assigning User Info:
    let buttonValue = e.target.value;
    const { name, email: sessionEmail, image: sessionImage } = session.user;
    const { userName, email, role, image } = user;

    //Re-Assigning User info:
    userName = name;
    email = sessionEmail;
    role = buttonValue;
    image = sessionImage;

    const notify = () => toast(`You are signed in as ${role}`);
    notify();

    if (role === 'Brand') {
      dispatch(createUserStatus({ userName, email, role, image }));
    } else if (role === 'Agency') {
      dispatch(createUserStatus({ userName, email, role, image }));
    } else if (role === 'Ambassador') {
      dispatch(createUserStatus({ userName, email, role, image }));
    }
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null} static>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 backdrop-blur-xl bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                      <Image
                        src="/images/Marttwainxyz.png"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        How do you want to use ForgedMart?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Please select how you would like to use our platform.
                          Select Agency if you are managing multiple client
                          accounts or choose Brand to set up an account for a
                          single brand. Subsequently, choose Ambassador to use
                          the platform to grow your channels.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-3 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={handleClick}
                      value="Agency"
                    >
                      As an Agency
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-green-600 px-4 py-2 text-base font-medium text-white hover:text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={handleClick}
                      value="Brand"
                    >
                      As a Brand
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:col-start-3 sm:mt-0 sm:text-sm"
                      onClick={handleClick}
                      value="Ambassador"
                    >
                      As Ambassador
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
