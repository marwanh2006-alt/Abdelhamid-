'use client';

/* Migrated from the legacy src/content/quote.html fragment. */

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { SiteLink } from '@/components/SiteLink';

const MAX_QUOTE_FILES = 5;

export function QuoteContent() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState('');

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const incomingFiles = Array.from(event.currentTarget.files ?? []);
    event.currentTarget.value = '';

    if (incomingFiles.length === 0) {
      return;
    }

    const availableSlots = Math.max(0, MAX_QUOTE_FILES - selectedFiles.length);
    const acceptedFiles = incomingFiles.slice(0, availableSlots);
    const rejectedCount = incomingFiles.length - acceptedFiles.length;

    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    setFileError(
      rejectedCount > 0
        ? `You can upload a maximum of ${MAX_QUOTE_FILES} files. ${rejectedCount} extra ${rejectedCount === 1 ? 'file was' : 'files were'} not added.`
        : '',
    );
  }

  function removeSelectedFile(indexToRemove: number) {
    setSelectedFiles((files) =>
      files.filter((_, index) => index !== indexToRemove),
    );
    setFileError('');
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.delete('files[]');
    selectedFiles.forEach((file) => {
      formData.append('files[]', file, file.name);
    });

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        body: formData, // multipart — supports file uploads
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus('error');
        setErrorMsg(json.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      form.reset();
      setSelectedFiles([]);
      setFileError('');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  return (
    <>
      <main id="main-content" tabIndex={-1} className="quote-page relative isolate overflow-x-clip">



          <section className="quote-hero">

              <div className="quote-hero-image">
                  <img
                      src="/assets/images/optimized/quote/quote-hero-desktop.webp"
                      srcSet="/assets/images/optimized/quote/quote-hero-mobile.webp 700w, /assets/images/optimized/quote/quote-hero-desktop.webp 1600w"
                      sizes="100vw"
                      alt=""
                      width="1536"
                      height="1024"
                      decoding="async"
                      fetchPriority="high"
                  />
              </div>

              <div className="quote-hero-overlay"></div>

              <div className="quote-hero-content">

                  <div className="quote-container">

                      <div className="quote-label">
                          <span></span>
                          REQUEST A QUOTE
                      </div>

                      <h1>
                          Tell us what<br />
                          you need.
                          <span>
                              We&apos;ll engineer<br />
                              the right solution.
                          </span>
                      </h1>

                      <p>
                          Share your project requirements with our engineering
                          team and we&apos;ll review your request and prepare
                          a quotation tailored to your needs.
                      </p>

                  </div>

              </div>

          </section>




          <section className="quote-section">

              <div className="quote-container">

                  <div className="quote-card">

                      {/* FORM HEADER */}


                      <div className="quote-card-header">

                          <div>
                              <span className="quote-card-label">
                                  REQUEST A QUOTE
                              </span>

                              <h2 id="quote-form-heading">
                                  Tell us about your project
                              </h2>

                              <p>
                                  Give us the details you have and our engineering
                                  team will take it from there.
                              </p>
                          </div>

                      </div>


                      {status === 'success' && (
                          <div className="contact-form-status contact-form-success" role="status">
                              <strong>✓ Quote request sent successfully!</strong>
                              <p>Our engineering team will review your request and contact you with the next steps.</p>
                          </div>
                      )}

                      {status === 'error' && (
                          <div className="contact-form-status contact-form-error" role="alert">
                              <strong>✕ {errorMsg}</strong>
                          </div>
                      )}

                      {status !== 'success' && (

                      <form className="quote-form" onSubmit={handleSubmit} encType="multipart/form-data" aria-labelledby="quote-form-heading">

                          <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                              <label htmlFor="quote-website">Website</label>
                              <input id="quote-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                          </div>

                          {/* ROW 1 */}

                          <div className="quote-form-row">

                              <div className="quote-field">

                                  <label htmlFor="quote-name">
                                      Your Name
                                  </label>

                                  <input id="quote-name" type="text" name="name" placeholder="Your full name" autoComplete="name" maxLength={100} required={true} defaultValue="" />


                              </div>


                              <div className="quote-field">

                                  <label htmlFor="quote-company">
                                      Company Name
                                  </label>

                                  <input id="quote-company" type="text" name="company" placeholder="Your company name" autoComplete="organization" maxLength={150} defaultValue="" />


                              </div>

                          </div>


                          {/* ROW 2 */}

                          <div className="quote-form-row">

                              <div className="quote-field">

                                  <label htmlFor="quote-email">
                                      Email Address
                                  </label>

                                  <input id="quote-email" type="email" name="email" placeholder="your@email.com" autoComplete="email" maxLength={254} required={true} defaultValue="" />


                              </div>


                              <div className="quote-field">

                                  <label htmlFor="quote-phone">
                                      Phone Number
                                  </label>

                                  <input id="quote-phone" type="tel" name="phone" placeholder="+20 100 000 0000" autoComplete="tel" maxLength={40} defaultValue="" />


                              </div>

                          </div>


                          {/* PROJECT / PRODUCT */}

                          <div className="quote-field">

                              <label htmlFor="quote-project">
                                  Project / Product
                              </label>

                              <input id="quote-project" type="text" name="project" placeholder="What are you looking to manufacture?" maxLength={200} required={true} defaultValue="" />


                          </div>


                          {/* REQUIREMENTS */}

                          <div className="quote-field">

                              <label htmlFor="quote-requirements">
                                  Tell us about your requirements
                              </label>

                              <textarea id="quote-requirements" name="requirements" placeholder="Tell us anything you know about the project — dimensions, material, quantity, application, drawings, or any other requirements..." required={true}></textarea>


                          </div>


                          {/* FILE UPLOAD */}

                          <div className="quote-field">

                              <label id="quote-files-label">
                                  Upload Files
                                  <span className="quote-optional">
                                      OPTIONAL
                                  </span>
                              </label>

                              <label htmlFor="quote-files" className="quote-upload" id="quote-files-instructions">

                                  <div className="quote-upload-icon" aria-hidden="true">
                                      +
                                  </div>

                                  <div className="quote-upload-text">

                                      <strong id="quote-files-title">
                                          Add drawings, CAD files or images
                                      </strong>

                                      <span id="quote-files-description">
                                          Accepted: JPG/JPEG, PNG, PDF, DWG, DXF,
                                          STEP/STP and IGES/IGS. Maximum 5 files,
                                          10 MiB each and 25 MiB total.
                                      </span>

                                  </div>

                              </label>

                              <input
                                  id="quote-files"
                                  className="quote-file-input"
                                  type="file"
                                  name="files[]"
                                  aria-labelledby="quote-files-label quote-files-instructions"
                                  multiple={true}
                                  accept=".jpg,.jpeg,.png,.pdf,.dwg,.dxf,.step,.stp,.iges,.igs"
                                  aria-describedby={fileError ? 'quote-files-description quote-files-error' : 'quote-files-description'}
                                  aria-invalid={fileError ? true : undefined}
                                  onChange={handleFileChange}
                              />

                              {fileError && (
                                  <p id="quote-files-error" className="quote-file-error" role="alert">
                                      {fileError}
                                  </p>
                              )}

                              {selectedFiles.length > 0 && (
                                  <div className="quote-selected-files" aria-live="polite">
                                      <p className="quote-selected-files-header">
                                          {selectedFiles.length} of {MAX_QUOTE_FILES} files selected
                                      </p>

                                      <ul className="quote-selected-files-list">
                                          {selectedFiles.map((file, index) => (
                                              <li
                                                  className="quote-selected-file"
                                                  key={`${file.name}-${file.size}-${file.lastModified}-${index}`}
                                              >
                                                  <span className="quote-selected-file-copy">
                                                      <span className="quote-selected-file-name">{file.name}</span>
                                                      <span className="quote-selected-file-size">{formatFileSize(file.size)}</span>
                                                  </span>

                                                  <button
                                                      type="button"
                                                      className="quote-remove-file"
                                                      onClick={() => removeSelectedFile(index)}
                                                      disabled={status === 'sending'}
                                                      aria-label={`Remove ${file.name}`}
                                                  >
                                                      Remove
                                                  </button>
                                              </li>
                                          ))}
                                      </ul>
                                  </div>
                              )}


                          </div>


                          {/* SUBMIT */}

                          <p className="form-privacy-note">
                              We use your information and attachments to review this request. See our{' '}
                              <SiteLink href="/privacy.php">privacy policy</SiteLink>.
                          </p>

                          <div className="quote-submit-area">

                              <div className="quote-submit-note">
                                  Our engineering team will review your request
                                  and contact you with the next steps.
                              </div>

                              <button type="submit" className="quote-submit" disabled={status === 'sending'}>

                                  <span>
                                      {status === 'sending' ? 'SENDING...' : 'REQUEST QUOTATION'}
                                  </span>

                                  <span className="quote-submit-arrow" aria-hidden="true">
                                      {status === 'sending' ? '⟳' : '→'}
                                  </span>

                              </button>

                          </div>

                      </form>

                      )}

                  </div>

              </div>

          </section>

      </main>
    </>
  );
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.ceil(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
