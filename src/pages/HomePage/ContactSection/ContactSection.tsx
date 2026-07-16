import { FormControlLabel, Input, Select } from "@kalortech/shared-components";

import { useQuote } from "~providers";

import { PACKAGE_SELECT_OPTIONS, SectionId } from "../HomePage.constants";
import { ContactInfo } from "./ContactInfo";
import { useContactForm } from "./ContactSection.hooks";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  const { selectedPackage } = useQuote();
  const { formik, submitStatus } = useContactForm(selectedPackage);
  const { values, errors, onChange, handleSubmit } = formik;

  const {
    fullName,
    phone,
    email,
    island,
    package: selectedPkg,
    message: messageText,
    company,
  } = values;

  const {
    fullName: fullNameError,
    phone: phoneError,
    email: emailError,
    island: islandError,
  } = errors;

  const isLoading = submitStatus === "loading";

  return (
    <section id={SectionId.Contact} className={styles.root}>
      <div className={styles.grid}>
        <ContactInfo />

        {/* Quote form */}
        <div className={styles.formCard}>
          <h3>Free system consultation</h3>
          <div className={styles.formHint}>Typical reply within one business day.</div>

          {submitStatus === "success" && (
            <div className={styles.successMsg} role="status" aria-live="polite">
              Quote request received! We&rsquo;ll be in touch within one business day.
            </div>
          )}

          {submitStatus === "error" && (
            <div className={styles.errorMsg} role="alert">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Honeypot - hidden from real users; bots that fill it are silently discarded server-side */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                value={company}
                onChange={onChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className={styles.formRow}>
              <FormControlLabel label="Full name" name="fullName" layout="vertical">
                <Input
                  name="fullName"
                  value={fullName}
                  onChange={onChange}
                  error={fullNameError}
                  placeholder="Your name"
                />
              </FormControlLabel>
              <FormControlLabel label="Phone" name="phone" layout="vertical">
                <Input
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={onChange}
                  error={phoneError}
                  placeholder="(242) 000-0000"
                />
              </FormControlLabel>
            </div>

            <div className={styles.formRow}>
              <FormControlLabel label="Email" name="email" layout="vertical">
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={onChange}
                  error={emailError}
                  placeholder="you@example.com"
                />
              </FormControlLabel>
              <FormControlLabel label="Island / area" name="island" layout="vertical">
                <Input
                  name="island"
                  value={island}
                  onChange={onChange}
                  error={islandError}
                  placeholder="e.g. Grand Bahama, New Providence…"
                />
              </FormControlLabel>
            </div>

            <div className={`${styles.formRow} ${styles.full}`}>
              <FormControlLabel label="Package of interest" name="package" layout="vertical">
                <Select
                  name="package"
                  value={selectedPkg || undefined}
                  onChange={onChange}
                  options={PACKAGE_SELECT_OPTIONS}
                  placeholder="Not sure yet, recommend one"
                />
              </FormControlLabel>
            </div>

            <div className={`${styles.formRow} ${styles.full}`}>
              <FormControlLabel
                label="Tell us about your property"
                name="message"
                layout="vertical"
              >
                <Input.TextArea
                  name="message"
                  value={messageText}
                  onChange={onChange}
                  placeholder="Home or business, roof or ground mount, key appliances to keep running…"
                  rows={3}
                  className={styles.textarea}
                />
              </FormControlLabel>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isLoading}>
              {isLoading ? "Sending…" : "Request Quote & Inspection"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
