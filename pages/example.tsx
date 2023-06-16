// pages/example.tsx
import { UserButton } from "@clerk/nextjs";

export default function Example() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <div>Your pages content can go here.</div>
    </>
  );
}
