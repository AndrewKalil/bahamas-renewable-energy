import { useCallback, useRef, useState } from "react";
import { useFormik } from "@kalortech/shared-logic";

import { sendContactMessage } from "~services";

import { CONTACT_INITIAL_VALUES, CONTACT_SCHEMA } from "./ContactSection.constants";
import type { ContactFormValues, SubmitStatus } from "./ContactSection.types";

export const useContactForm = (selectedPackage: string) => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  // Capture when the form was first rendered - used for bot-timing detection
  const renderedAtRef = useRef(Date.now());

  const onSubmitHandler = useCallback(
    async (values: ContactFormValues, helpers: { resetForm: () => void }) => {
      const { resetForm } = helpers;
      setSubmitStatus("loading");
      try {
        await sendContactMessage({
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          island: values.island,
          package: values.package,
          message: values.message,
          company: values.company,
          elapsedMs: Date.now() - renderedAtRef.current,
        });
        setSubmitStatus("success");
        resetForm();
      } catch {
        setSubmitStatus("error");
      }
    },
    [],
  );

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      ...CONTACT_INITIAL_VALUES,
      package: selectedPackage,
    },
    validationSchema: CONTACT_SCHEMA,
    enableReinitialize: true,
    onSubmit: onSubmitHandler,
  });

  return { formik, submitStatus };
};
