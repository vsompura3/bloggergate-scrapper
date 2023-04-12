import githubIcon from "../assets/github-icon.svg";

export default function Developer({
  name,
  avatar,
  tag,
  github_url,
  linkedin_url,
}) {
  return (
    <div className="relative rounded-md border border-slate-400 bg-white/80 shadow-lg shadow-slate-200 after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-bl after:from-transparent after:to-black/70">
      <img
        width={50}
        height={50}
        className="w-full rounded-md"
        src={avatar}
        alt={`profile picture of ${name}`}
      />
      <div className="absolute bottom-3 left-3 z-10">
        <div className="mb-2 flex items-center gap-2">
          <a href={github_url} aria-label="github profile link">
            <img className="h-12 w-12" src={githubIcon} aria-hidden="true" />
          </a>
          <a href={linkedin_url} aria-label="linkedin profile link">
            <svg
              fill="#3276c3"
              height="28"
              width="28"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 310 310"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_801_">
                  {" "}
                  <path
                    id="XMLID_802_"
                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                  ></path>{" "}
                  <path
                    id="XMLID_803_"
                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                  ></path>{" "}
                  <path
                    id="XMLID_804_"
                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
      </div>
      <span className="absolute left-3 top-0 z-10 inline-block -translate-y-1/2 rounded-full bg-gray-700 px-3 py-0.5 text-sm text-white">
        {tag}
      </span>
    </div>
  );
}
