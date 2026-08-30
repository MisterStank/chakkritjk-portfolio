"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary h-12 w-32 justify-center disabled:opacity-60"
    >
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-current" />
      ) : (
        <>
          Send <FaPaperPlane className="text-xs opacity-80" />
        </>
      )}
    </button>
  );
}
