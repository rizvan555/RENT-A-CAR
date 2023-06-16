import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center p-10 text-center bg-slate-100">
      <SignIn />
    </div>
  );
}
