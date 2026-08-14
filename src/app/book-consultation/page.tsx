"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CONSULTATION_OPTIONS } from "@/data/booking";

export default function BookConsultationPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State Preservation across steps
  const [selectedConsultation, setSelectedConsultation] = useState<string>("");
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    phone: "",
    email: "",
    contactMethod: "WhatsApp",
  });
  const [schedule, setSchedule] = useState({
    preferredDate: "",
    preferredTime: "Morning (10:00 AM - 1:00 PM)",
  });
  const [goals, setGoals] = useState({
    aestheticGoals: "",
    concerns: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceNumber, setReferenceNumber] = useState<string>("");

  // Step 2 Validation
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!personalDetails.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!personalDetails.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-[#]?\d{8,15}$/.test(personalDetails.phone.replace(/[\s\-]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!personalDetails.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalDetails.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 3 Validation
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!schedule.preferredDate) newErrors.preferredDate = "Please select a preferred date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 4 Validation & Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goals.consent) {
      setErrors({ consent: "You must acknowledge privacy terms before submitting" });
      return;
    }
    setErrors({});

    // Generate dynamic reference number CIATN-2026-XXXX
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedRef = `CIATN-2026-${randomNum}`;
    setReferenceNumber(generatedRef);
    setIsSubmitted(true);
  };

  // Form Navigation handlers
  const handleNext = () => {
    if (currentStep === 1 && !selectedConsultation) return;
    if (currentStep === 2 && !validateStep2()) return;
    if (currentStep === 3 && !validateStep3()) return;
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Construct pre-filled WhatsApp message
  const selectedOptionTitle =
    CONSULTATION_OPTIONS.find((o) => o.id === selectedConsultation)?.title || "General Consultation";

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Akshaya Jain Clinic Team,\n\nI have requested a consultation.\n\n` +
    `Reference Number: ${referenceNumber}\n` +
    `Name: ${personalDetails.fullName}\n` +
    `Consultation Type: ${selectedOptionTitle}\n` +
    `Preferred Date: ${schedule.preferredDate}\n` +
    `Preferred Time: ${schedule.preferredTime}\n\n` +
    `Please confirm my appointment details.`
  );

  return (
    <main className="min-h-screen bg-[#1C3329] text-[#F5F5DC] overflow-x-hidden pt-20">
      <Navbar />

      {/* Header */}
      <section className="relative px-[20px] md:px-[80px] max-w-[1440px] mx-auto pt-12 md:pt-16 pb-8 border-b border-[#657A6A]/30">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-[#657A6A]/30 border border-[#AEB9A9]/40 rounded text-[#F5F5DC] font-label-caps text-xs tracking-widest uppercase mb-4 font-semibold">
            BESPOKE APPOINTMENT REQUEST
          </div>
          <h1 className="font-display text-[38px] md:text-[54px] leading-tight text-[#F5F5DC] font-normal mb-4">
            Book a <span className="italic text-[#F5F5DC]">Consultation</span>
          </h1>
          <p className="font-body-md text-[#F5F5DC]/90 text-base md:text-lg">
            Request your diagnostic appointment with Dr. Akshaya Jain at our Koregaon Park sanctuary.
          </p>
        </div>
      </section>

      {/* Main Wizard Container */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-12">
        {isSubmitted ? (
          /* Confirmation Screen wrapped in canvas side areas */
          <div className="w-full px-[20px] md:px-[80px] -mx-[20px] md:-mx-[80px] rounded-2xl py-0">
            <div className="max-w-2xl mx-auto bg-[#1C3329] border border-[#AEB9A9]/40 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-2xl animate-in fade-in duration-500">
            <div className="w-16 h-16 bg-[#657A6A]/30 border border-[#AEB9A9] rounded-full flex items-center justify-center mx-auto text-[#F5F5DC]">
              <span className="material-symbols-outlined text-4xl">task_alt</span>
            </div>
            <div>
              <span className="font-label-caps text-xs text-[#F5F5DC] tracking-widest block uppercase mb-1 font-semibold">
                REFERENCE CODE: {referenceNumber}
              </span>
              <h2 className="font-display text-[32px] md:text-[40px] text-[#F5F5DC]">
                Consultation Request Received
              </h2>
            </div>
            <p className="font-body-md text-[#F5F5DC]/90 text-base leading-relaxed">
              Your consultation request has been received. Our team will contact you shortly to confirm your requested date and time details.
            </p>

            <div className="bg-[#F5F5DC] border border-[#657A6A]/20 rounded-xl p-6 text-left space-y-3 font-body-md text-sm text-[#1C3329] shadow-md">
              <div className="flex justify-between border-b border-[#657A6A]/20 pb-2">
                <span>Patient Name:</span>
                <span className="text-[#17251E] font-semibold">{personalDetails.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#657A6A]/20 pb-2">
                <span>Consultation Type:</span>
                <span className="text-[#17251E] font-semibold">{selectedOptionTitle}</span>
              </div>
              <div className="flex justify-between border-b border-[#657A6A]/20 pb-2">
                <span>Requested Date:</span>
                <span className="text-[#17251E] font-semibold">{schedule.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Requested Time Slot:</span>
                <span className="text-[#17251E] font-semibold">{schedule.preferredTime}</span>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <a
                href={`https://wa.me/918669813636?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F5F5DC] text-[#17251E] font-button text-[14px] py-4 rounded hover:bg-[#F5F5DC]/90 transition-colors flex items-center justify-center gap-2 block font-medium shadow-md"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Continue on WhatsApp
              </a>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  href="/"
                  className="border border-[#AEB9A9]/40 text-[#F5F5DC]/90 font-button text-xs px-6 py-3 rounded hover:text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#657A6A]/30"
                >
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#AEB9A9]/40 text-[#F5F5DC]/90 font-button text-xs px-6 py-3 rounded hover:text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#657A6A]/30"
                >
                  Contact Clinic
                </Link>
              </div>
            </div>
          </div>
          </div>
        ) : (
          /* Multi-step Form Wizard */
          <div className="w-full">
            {/* Step Progress Bar */}
            <div className="grid grid-cols-4 gap-2 mb-12">
              {[
                { step: 1, title: "01 — Consultation" },
                { step: 2, title: "02 — Details" },
                { step: 3, title: "03 — Schedule" },
                { step: 4, title: "04 — Goals" },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`p-3 rounded-lg border text-center transition-all ${currentStep === item.step
                    ? "bg-[#657A6A] border-[#AEB9A9] text-[#F5F5DC] font-semibold shadow-md"
                    : currentStep > item.step
                      ? "bg-[#1C3329] border-[#AEB9A9]/40 text-[#F5F5DC]/80"
                      : "bg-[#1C3329]/80 border-[#657A6A]/20 text-[#F5F5DC]/50"
                    }`}
                >
                  <span className="font-label-caps text-[11px] md:text-xs block truncate">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full px-[20px] md:px-[80px] -mx-[20px] md:-mx-[80px] rounded-2xl py-0">
              <div className="max-w-4xl mx-auto bg-[#1C3329] border border-[#AEB9A9]/40 rounded-2xl p-6 md:p-10 shadow-2xl">
              {/* STEP 1 — CONSULTATION TYPE */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-[26px] md:text-[32px] text-[#F5F5DC] mb-2">
                      Select Consultation Focus
                    </h2>
                    <p className="font-body-md text-sm text-[#F5F5DC]/90">
                      Choose the primary aesthetic or medical service for your diagnostic visit.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {CONSULTATION_OPTIONS.map((option) => {
                      const isSelected = selectedConsultation === option.id;
                      return (
                        <div
                          key={option.id}
                          onClick={() => setSelectedConsultation(option.id)}
                          className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${isSelected
                            ? "bg-[#F5F5DC] border-[#17251E] shadow-lg ring-1 ring-[#17251E]"
                            : "bg-[#F5F5DC] border-[#657A6A]/20 hover:border-[#17251E]/40 hover:bg-[#F5F5DC]/95"
                            }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-label-caps text-[11px] uppercase font-semibold text-[#17251E]">
                              {option.category}
                            </span>
                            <span className="font-body-md text-xs text-[#1C3329]">
                              {option.duration}
                            </span>
                          </div>
                          <h3 className="font-display text-lg text-[#17251E] mb-2">
                            {option.title}
                          </h3>
                          <p className="font-body-md text-xs leading-relaxed text-[#1C3329]">
                            {option.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2 — PERSONAL DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-[26px] md:text-[32px] text-[#F5F5DC] mb-2">
                      Your Personal Information
                    </h2>
                    <p className="font-body-md text-sm text-[#F5F5DC]/90">
                      Please provide your contact details so our clinic team can get in touch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={personalDetails.fullName}
                        onChange={(e) =>
                          setPersonalDetails({ ...personalDetails, fullName: e.target.value })
                        }
                        placeholder="e.g. Ananya Sharma"
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#F5F5DC]"
                      />
                      {errors.fullName && (
                        <p className="text-red-300 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={personalDetails.phone}
                        onChange={(e) =>
                          setPersonalDetails({ ...personalDetails, phone: e.target.value })
                        }
                        placeholder="e.g. 8669813636"
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#F5F5DC]"
                      />
                      {errors.phone && (
                        <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={personalDetails.email}
                        onChange={(e) =>
                          setPersonalDetails({ ...personalDetails, email: e.target.value })
                        }
                        placeholder="e.g. ananya@example.com"
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#F5F5DC]"
                      />
                      {errors.email && (
                        <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Preferred Contact Method
                      </label>
                      <select
                        value={personalDetails.contactMethod}
                        onChange={(e) =>
                          setPersonalDetails({ ...personalDetails, contactMethod: e.target.value })
                        }
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] focus:outline-none focus:border-[#F5F5DC]"
                      >
                        <option value="WhatsApp" className="bg-[#1C3329] text-[#F5F5DC]">WhatsApp</option>
                        <option value="Phone Call" className="bg-[#1C3329] text-[#F5F5DC]">Phone Call</option>
                        <option value="Email" className="bg-[#1C3329] text-[#F5F5DC]">Email</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 — SCHEDULE REQUEST */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-[26px] md:text-[32px] text-[#F5F5DC] mb-2">
                      Preferred Date & Time Slot
                    </h2>
                    <p className="font-body-md text-sm text-[#F5F5DC]/90">
                      Select your preferred date for a clinic appointment. (This is a request; our team will confirm final slot availability).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={schedule.preferredDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) =>
                          setSchedule({ ...schedule, preferredDate: e.target.value })
                        }
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] focus:outline-none focus:border-[#F5F5DC]"
                      />
                      {errors.preferredDate && (
                        <p className="text-red-300 text-xs mt-1">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Preferred Time Slot
                      </label>
                      <select
                        value={schedule.preferredTime}
                        onChange={(e) =>
                          setSchedule({ ...schedule, preferredTime: e.target.value })
                        }
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] focus:outline-none focus:border-[#F5F5DC]"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)" className="bg-[#1C3329] text-[#F5F5DC]">
                          Morning (10:00 AM - 1:00 PM)
                        </option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-[#1C3329] text-[#F5F5DC]">
                          Afternoon (1:00 PM - 4:00 PM)
                        </option>
                        <option value="Evening (4:00 PM - 7:00 PM)" className="bg-[#1C3329] text-[#F5F5DC]">
                          Evening (4:00 PM - 7:00 PM)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4 — GOALS & CONSENT */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-[26px] md:text-[32px] text-[#F5F5DC] mb-2">
                      Aesthetic Goals & Notes
                    </h2>
                    <p className="font-body-md text-sm text-[#F5F5DC]/90">
                      Share any specific concerns or questions for Dr. Akshaya Jain before your consultation.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Aesthetic Goals & Primary Concerns
                      </label>
                      <textarea
                        rows={3}
                        value={goals.aestheticGoals}
                        onChange={(e) =>
                          setGoals({ ...goals, aestheticGoals: e.target.value })
                        }
                        placeholder="e.g. Skin glow improvement, hair loss density recovery, dynamic wrinkle softening..."
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#F5F5DC]"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block font-label-caps text-xs text-[#F5F5DC]/90 uppercase mb-2 font-semibold">
                        Additional Notes / Medical History Highlights
                      </label>
                      <textarea
                        rows={2}
                        value={goals.concerns}
                        onChange={(e) => setGoals({ ...goals, concerns: e.target.value })}
                        placeholder="e.g. Sensitive skin, previous laser treatments, ongoing topical medications..."
                        className="w-full bg-[#1C3329] border border-[#AEB9A9]/40 rounded p-3.5 text-sm text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:border-[#F5F5DC]"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={goals.consent}
                          onChange={(e) => setGoals({ ...goals, consent: e.target.checked })}
                          className="mt-1 accent-[#F5F5DC] w-4 h-4 rounded"
                        />
                        <span className="font-body-md text-xs text-[#F5F5DC]/90 leading-relaxed">
                          I agree to share these details with Skintillatingg clinic for the purpose of scheduling a confidential medical consultation. *
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-red-300 text-xs mt-1">{errors.consent}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="border border-[#AEB9A9]/40 text-[#F5F5DC]/90 font-button text-xs px-6 py-3 rounded hover:text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#657A6A]/30"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-3.5 rounded hover:bg-[#F5F5DC]/90 transition-colors font-medium shadow-md"
                    >
                      Submit Consultation Request
                    </button>
                  </div>
                </form>
              )}

              {/* Wizard Steps Navigation Bar (Steps 1, 2, 3) */}
              {currentStep < 4 && (
                <div className="pt-8 mt-8 border-t border-[#657A6A]/30 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="border border-[#AEB9A9]/40 text-[#F5F5DC]/90 font-button text-xs px-6 py-3 rounded hover:text-[#F5F5DC] hover:border-[#F5F5DC] hover:bg-[#657A6A]/30 disabled:opacity-30"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentStep === 1 && !selectedConsultation}
                    className="bg-[#F5F5DC] text-[#17251E] font-button text-[14px] px-8 py-3.5 rounded hover:bg-[#F5F5DC]/90 transition-colors disabled:opacity-50 font-medium shadow-md"
                  >
                    Next Step
                  </button>
                </div>
              )}
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
