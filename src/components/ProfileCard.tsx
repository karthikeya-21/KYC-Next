"use client";

import { useState } from "react";
import Image from "next/image";

const defaultProfile = {
  username: "User Name",
  bio: "Premium car enthusiast exploring specifications, design, and smarter buying decisions.",
  email: "user@example.com",
  phoneNumber: "+91 98765 43210",
};

export default function ProfileCard() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [profile, setProfile] = useState(defaultProfile);
  const [draftProfile, setDraftProfile] = useState(defaultProfile);

  function openEditModal() {
    setDraftProfile(profile);
    setIsEditOpen(true);
  }

  function closeEditModal() {
    setDraftProfile(profile);
    setIsEditOpen(false);
  }

  function saveProfileDetails() {
    setProfile(draftProfile);
    setIsEditOpen(false);
  }

  return (
    <>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 shadow-inner shadow-black/20 sm:p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={openEditModal}
              className="group relative w-fit rounded-full border border-amber-300/25 bg-black/30 p-2 transition hover:border-amber-300/60"
            >
              <Image
                alt="Profile Picture"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAMFBMVEXk5ueutLfn6eqrsbSzuLvh4+Tq7O3Y29zU19m7wMLGyszd4OHAxcfR1NaorrG4vcBRphcjAAAF1ElEQVR4nO2d27ajIAxAJYAXEPj/vx3QtmOttl5Igme5n2bOzIP7cElAiFV1c3Nzc3Nzc3Nzc3Nzc3Nzc/OOto1zxhjnGqs199McBKJGazrlp4hgXBOVgPvp9gCVbUwnvZTiHRl/Fkxr9WV0QLcmyA+RiVD0uYYOaNerVZOnkOicLV4HKteJHyYPnWAK14F2m8pDx0G5OgDdRpGXjq25H3qFut2lMmLqMhun39rB3lonFDivgVVHXFJfa7mf/YP2oEuKO4774We4zZPYko0pKmkzJ1ySTl/OwAFzSiXi+1Jk6tMuqW24LUZqd94l2ZTQNnAkVC5h+JOBGF8yyQjH3jY65OhkCakaZhs4lMOs2HSW18VlU0k2hlWmydbJRjjTNJ2xkyVYO1quWfm/DV/Oqbu8DZNga5osof8dvkQgW7ic2jCtBpxHkBGBJauB/J0s4TmaBnAaRoieoWlqHJUIfdNAg9QwMakhb5o6c/CfEKhdqgpLRQjVEseavOnyDOopoN63Rb4LGainAIzo/4R4yQkNoosQhlbGYLoQZ5uAkPxPZGjXaPn2ZBYhnZyhwRz/gnYLDTXKiJTRUMqgjv/hFQehDF5iNsqQzgDYMoHwvINFnZkFbQ5gcWdmUhnIvSv7CV2giWEGWUb+KRm6qHnL3DK3zF4Z7Kn5T8kQxhmCdOYPyZAmmgRLAEKZDOeYvsqQLs6wV5qUpxugxd3QoN0D+Eu7M+j7ZqSbzdg7mqSvAXA3zkiHTAR30BCfCQTc9zOkLqiRRnbU52cw3zYRD5mqqvH6mSI/poWYnpH3sgiaDMP55horbipylXTUHOfwDOHyf2qD0zSS51wjyrkmz3W/AaNpPNeBU4Sm8XwHm7PHGslw1uwB2JBbhvMyQOZlDe81jbw3G2RgvUCT+X0A88XgrOtn3rtAiWwdjXgbY5lcMxr9MmaJPC6S+y7gSJ0jESjEpapsBpeW//7sg7O3aKVwxbicveIoFf9N4Cn2xAl0GagP///CHo43sitl7L8AfTAXkH2RVY6asH+OjkO/gLi/iNlr4ylfK+8ErNqj431Zs9gccJvXBNKTb5DvBSqzMYL2uqBAuUaq16a+FtWRUilTbDGwGQBNH9RKVcBoEnqnC60EtgTEsGNGoZfT+MfQGWcLLji3THxg20ajLgQ1ELrepDKalzN5EJ9ba2ubAWt1/MFFTZ7AE+4HOQFAPfKSef2d+9G2Mzwz6MaZNF4mMUeKcdy41urh/3A/6Q/ir1+3plcyVc1dqXI6/JuXcXpuSh5CjeuHIsDb8pkkJTvTlpU0DzNWKp27VWNKNFKxjWxVQtnjR1lmsdapNrbRKMTa6VJZ5tS1Toi8hKRMham5fIax3v0sZrxLKM0KDDoxl8xr8vARijoJhVr/yvKP66SkmrB5amuQTB4+QnUOSJY7dYN9q2HE4OvU6PeAnqQtAtzO1h7YGjuM94gFdnXbEaoMOsKgvE6Dqumzz8QbdBRCyf0YVjAnsHWk7Fze+segDdW4X9LJGXcA2o6hh010lMnVOKzN8rBJ76Ny6ECb++jSEaTI0TjYN7I2c/6GIGjq0PKFs+dqG575eAV/qhA6VkHGo3h1NL+Js1hhLmkeOHa1BtAvMB/jyPFaIFq27Gd/Kk1wS/4we23Qb5WeYufxx6JdhNg1RWc4QIbKnoucutjh8sRvrxtaXHj5ZPOBCO6EfxMbT6qUGl9mbDmhil1RIh/q55IAuw5jTrofy7Wyg+Wc78ETML7BgMj3SeAyA2YkfJkEsn1+iYpvN6Fyf4EFH7++VittlbyB1XV0vu9i0eHXOtrFRv+IX37ngXSLHBm5mD/j1sXBwy9lNddsmLRt+9k0aIUX0FlIn8tfXa7SzZummM3+I8wnNOB+oDPMltBXWsZ8MC8isPO73qXxfmftUmuyT96+vXHpXjavI4Bd5BObt+qu6NXksZnMZ9hlMdGZfvX50hEzMX2tfp2NvzUmhTcLfXu5g/GIwD8AkGHdgrUWBAAAAABJRU5ErkJggg=="
                width={120}
                height={120}
                className="rounded-full"
              />
              <span className="absolute inset-x-2 bottom-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-amber-200 opacity-100 backdrop-blur sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                Edit photo
              </span>
            </button>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                Account Overview
              </p>
              <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                {profile.username}
              </h1>
              <p className="mt-2 text-sm text-zinc-400">
                Tap the profile image to update your picture.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
            <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                My Account
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Bio
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {profile.bio}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Email
                  </p>
                  <p className="mt-2 text-sm text-white">{profile.email}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Phone Number
                  </p>
                  <p className="mt-2 text-sm text-white">{profile.phoneNumber}</p>
                </div>

                <button
                  type="button"
                  onClick={openEditModal}
                  className="rounded-full border border-amber-300/30 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-300/10"
                >
                  Change Account Details
                </button>
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                Settings
              </p>

              <div className="mt-5 flex flex-col gap-3 md:flex-row md:flex-wrap lg:flex-col">
                <button
                  type="button"
                  className="w-full rounded-[1rem] border border-white/10 bg-zinc-950/70 px-4 py-3 text-center text-sm text-zinc-200 transition hover:border-amber-300/30 hover:bg-white/5 md:w-auto md:px-5 lg:w-full lg:px-4"
                >
                  Report Error
                </button>
                <button
                  type="button"
                  className="w-full rounded-[1rem] border border-white/10 bg-zinc-950/70 px-4 py-3 text-center text-sm text-zinc-200 transition hover:border-amber-300/30 hover:bg-white/5 md:w-auto md:px-5 lg:w-full lg:px-4"
                >
                  Change Password
                </button>
                <button
                  type="button"
                  onClick={() => setIsDeleteOpen(true)}
                  className="w-full rounded-[1rem] border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-200 transition hover:bg-red-500/15 md:w-auto md:px-5 lg:w-full lg:px-4"
                >
                  Delete Account
                </button>
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 xl:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                About Us
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300">
                This section can carry your context, story, or project note about
                why Know Your Car exists, what you are building, and what kind of
                experience you want users to have while exploring the platform.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 xl:col-span-2">
              <button
                type="button"
                className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
              >
                Logout
              </button>
            </section>
          </div>
        </div>
      </div>
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[1.75rem] border border-white/10 bg-zinc-950 p-6 text-white shadow-2xl shadow-black/40">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                  Edit Details
                </p>
                <h2 className="mt-3 text-2xl font-bold">Update Account</h2>
              </div>
              <button
                type="button"
                onClick={closeEditModal}
                className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300 transition hover:bg-white/5"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Username
                </label>
                <input
                  type="text"
                  value={draftProfile.username}
                  onChange={(event) =>
                    setDraftProfile((currentProfile) => ({
                      ...currentProfile,
                      username: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-[1rem] border border-zinc-800 bg-white/5 px-4 py-3 text-sm outline-none focus:border-amber-300/40"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Bio
                </label>
                <textarea
                  value={draftProfile.bio}
                  onChange={(event) =>
                    setDraftProfile((currentProfile) => ({
                      ...currentProfile,
                      bio: event.target.value,
                    }))
                  }
                  className="mt-2 min-h-28 w-full rounded-[1rem] border border-zinc-800 bg-white/5 px-4 py-3 text-sm outline-none focus:border-amber-300/40"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={draftProfile.phoneNumber}
                  onChange={(event) =>
                    setDraftProfile((currentProfile) => ({
                      ...currentProfile,
                      phoneNumber: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-[1rem] border border-zinc-800 bg-white/5 px-4 py-3 text-sm outline-none focus:border-amber-300/40"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeEditModal}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveProfileDetails}
                className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[1.75rem] border border-red-500/20 bg-zinc-950 p-6 text-white shadow-2xl shadow-black/40">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
              Confirm Delete
            </p>
            <h2 className="mt-3 text-2xl font-bold">Delete Account?</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-300">
              This action is sensitive and should only continue after the user
              confirms they really want to remove the account.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setIsDeleteOpen(false)}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setIsDeleteOpen(false)}
                className="rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
