import React from "react";
import Button from "./components/resource/Button";

function Contact() {
  return (
    <div className="">
      <h1 className="text-center text-5xl font-bold my-20">GET IN TOUCH</h1>
      <div className="bg-primary pt-48 pb-10 rounded-tr-[720px] rounded-tl-[720px]">
        <form
          action=""
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div className="">
            <input
              type="text"
              placeholder="Name"
              className="border px-4 py-3 w-[50vw] rounded"
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-3 w-[50vw] rounded"
            />
          </div>
          <div className="">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border px-4 py-3 w-[50vw] rounded"
            />
          </div>

          <div className="">
            <textarea
              name="Message"
              id=""
              className="border px-4 py-3 w-[50vw] rounded"
              rows={4}
            >
              Message
            </textarea>
          </div>
        </form>
        <div className="text-center mt-10 ">
          <Button className="bg-red-600 text-slate-100 border-0 rounded active:scale-95 transition-all">
            SEND
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
