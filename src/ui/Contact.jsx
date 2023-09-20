export const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="w-full border-b border-stone-600 pb-4 text-5xl font-semibold sm:text-6xl md:text-7xl">
        Contact
      </h1>
      <div className="mx-4 mt-10 grid h-fit grid-cols-autoFit gap-4 md:mx-3">
        <div>
          <span className="material-symbols-rounded mb-4 text-9xl text-green-300">
            support_agent
          </span>
          <h2 className="mb-5 text-2xl font-semibold tracking-[11px]">
            BY PHONE
          </h2>
          <p className="mb-2 text-xs text-slate-300">
            (Monday to Friday: 15:00 - 23:00. Saturday & Sunday: 13:00 - 00:00)
          </p>
          <p className="text-xl font-semibold">North America Toll-Free:</p>
          <p>1-877-930-7483</p>
          <p className="mt-4 text-xl font-semibold">International:</p>
          <p>1-604-637-07-80</p>
        </div>

        <div>
          <span className="material-symbols-rounded mb-4 text-9xl text-green-300">
            mail
          </span>
          <h2 className="mb-5 text-2xl font-semibold tracking-[11px]">
            BY EMAIL
          </h2>
          <p className="font-semibold text-md">
            Just send us an email, we will be happy to read you and get to know
            you in a much more direct way.
          </p>
          <p className="mt-3">contact@pizzarush.com</p>
        </div>

        <div>
          <span className="material-symbols-rounded mb-4 text-9xl text-green-300">
            pin_drop
          </span>
          <h2 className="mb-5 text-2xl font-semibold tracking-[11px]">
            LOCATION
          </h2>
          <p className="font-semibold text-md">150 East 14th Street</p>
          <p className="font-semibold text-md">New York, NY 10003</p>
        </div>
      </div>
    </div>
  );
};
