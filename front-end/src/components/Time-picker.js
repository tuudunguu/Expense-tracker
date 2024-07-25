/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j3HSKrsdw43
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";

export function TimePicker() {
  return (
    <div className="w-full h-fit flex flex-row gap-x-1 items-center border-2 border-[#D1D5DB] rounded-xl ">
      <div className="flex items-center gap-2">
        <Input
          id="hour"
          type="number"
          min="1"
          max="24"
          defaultValue="9"
          className="w-full rounded-md border border-muted px-3 py-2 text-center text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div className="flex items-center ">
        <Input
          id="minute"
          type="number"
          min="0"
          max="59"
          defaultValue="30"
          className="w-full rounded-md border border-muted px-3 py-2 text-center text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      {/* <Toggle
        aria-label="AM/PM"
        className="flex items-center gap-2 rounded-md border border-muted px-3 py-2 text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <span className="text-muted-foreground">AM</span>
        <SunIcon className="w-5 h-5 text-muted-foreground" />
        <span className="text-muted-foreground">PM</span>
      </Toggle> */}
    </div>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
