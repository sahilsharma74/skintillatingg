"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TREATMENTS_DATA, Treatment } from "@/data/treatments";

// Grouping 26 treatments into 4 clean categories as requested
interface CategoryGroup {
  name: string;
  treatmentIds: string[];
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    name: "SKIN & FACIAL AESTHETICS",
    treatmentIds: [
      "dermal-fillers",
      "microdermabrasion",
      "co2-laser",
      "acne-and-scars",
      "chemical-peel",
      "prp",
      "medi-facial",
      "lip-filler",
      "hifu",
      "microneedling",
      "q-switch",
      "permanent-makeup",
      "tattoo-removal",
    ],
  },
  {
    name: "HAIRCARE",
    treatmentIds: [
      "hair-prp",
      "hair-transplant",
      "hairfall",
      "mesotherapy",
      "gfc-hair",
      "derma-roller",
      "hair-laser",
      "hair-oxigenation",
      "cocktail-therapy",
      "qr-678",
      "exosome-therapy",
    ],
  },
  {
    name: "BODY / CONTOURING",
    treatmentIds: ["lipolysis"],
  },
  {
    name: "HAIR REMOVAL",
    treatmentIds: ["laser-hair-reduction"],
  },
];

function BookConsultationForm() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Multi-select state for treatments (storing treatment titles or IDs)
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
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

  // Handle URL Pre-selection (e.g. /book-consultation?service=HIFU or ?treatment=laser-hair-reduction)
  useEffect(() => {
    const serviceParam = searchParams.get("service") || searchParams.get("treatment") || searchParams.get("select");
    if (serviceParam) {
      const paramLower = serviceParam.toLowerCase();
      const matched = TREATMENTS_DATA.find(
        (t) =>
          t.id.toLowerCase() === paramLower ||
          t.slug.toLowerCase() === paramLower ||
          t.title.toLowerCase() === paramLower ||
          t.title.toLowerCase().includes(paramLower)
      );

      if (matched && !selectedTreatments.includes(matched.title)) {
        setSelectedTreatments([matched.title]);
      }
    }
  }, [searchParams]);

  // Toggle treatment selection
  const toggleTreatment = (title: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next.selectedTreatments;
      return next;
    });

    if (selectedTreatments.includes(title)) {
      setSelectedTreatments((prev) => prev.filter((item) => item !== title));
    } else {
      setSelectedTreatments((prev) => [...prev, title]);
    }
  };

  // Clear all selections
  const clearAllSelections = () => {
    setSelectedTreatments([]);
  };

  // Remove individual treatment chip
  const removeTreatment = (title: string) => {
    setSelectedTreatments((prev) => prev.filter((item) => item !== title));
  };

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
    if (currentStep === 1) {
      if (selectedTreatments.length === 0) {
        setErrors({ selectedTreatments: "Please select at least one treatment you'd like to discuss." });
        return;
      }
    }
    if (currentStep === 2 && !validateStep2()) return;
    if (currentStep === 3 && !validateStep3()) return;
    setErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const treatmentsFormattedList =
    selectedTreatments.length > 0 ? selectedTreatments.join(", ") : "General Consultation";

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Akshaya Jain Clinic Team,\n\nI have requested a consultation.\n\n` +
      `Reference Number: ${referenceNumber}\n` +
      `Name: ${personalDetails.fullName}\n` +
      `Selected Treatments (${selectedTreatments.length}): ${treatmentsFormattedList}\n` +
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
            Request your diagnostic appointment with Dr. Akshaya Jain at our Koregaon Park sanctuary. Select all therapies you would like to explore.
          </p>
        </div>
      </section>

      {/* Main Wizard Container */}
      <section className="px-[20px] md:px-[80px] max-w-[1440px] mx-auto py-12">
        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="w-full px-[20px] md:px-[80px] -mx-[20px] md:-mx-[80px] rounded-2xl py-0">
            <div className="max-w-2xl mx-auto bg-[#F5F5DC] border border-[#657A6A]/40 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-2xl animate-in fade-in duration-500 text-[#17251E]">
              <div className="w-16 h-16 bg-[#1C3329] border border-[#C9A227] rounded-full flex items-center justify-center mx-auto text-[#F5F5DC]">
                <span className="material-symbols-outlined text-4xl text-[#C9A227]">task_alt</span>
              </div>
              <div>
                <span className="font-label-caps text-xs text-[#344C3D] tracking-widest block uppercase mb-1 font-semibold">
                  REFERENCE CODE: {referenceNumber}
                </span>
                <h2 className="font-display text-[32px] md:text-[40px] text-[#17251E]">
                  Consultation Request Received
                </h2>
              </div>
              <p className="font-body-md text-[#344C3D] text-base leading-relaxed">
                Your consultation request has been received. Our clinical team will contact you shortly to review your selected treatments and confirm your requested date and time.
              </p>

              <div className="bg-[#F5F5DC] border border-[#657A6A] rounded-xl p-6 text-left space-y-3 font-body-md text-sm text-[#17251E] shadow-sm">
                <div className="flex justify-between border-b border-[#657A6A]/30 pb-2">
                  <span className="text-[#344C3D]">Patient Name:</span>
                  <span className="text-[#17251E] font-semibold">{personalDetails.fullName}</span>
                </div>
                <div className="border-b border-[#657A6A]/30 pb-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-[#344C3D]">Selected Treatments ({selectedTreatments.length}):</span>
                    <span className="text-[#17251E] font-semibold">{selectedTreatments.length} Selected</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedTreatments.map((t) => (
                      <span
                        key={t}
                        className="bg-[#1C3329] text-[#F5F5DC] text-xs px-2.5 py-1 rounded font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between border-b border-[#657A6A]/30 pb-2">
                  <span className="text-[#344C3D]">Requested Date:</span>
                  <span className="text-[#17251E] font-semibold">{schedule.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#344C3D]">Requested Time Slot:</span>
                  <span className="text-[#17251E] font-semibold">{schedule.preferredTime}</span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <a
                  href={`https://wa.me/918669813636?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1C3329] text-[#F5F5DC] font-button text-[14px] py-4 rounded hover:bg-[#17251E] transition-colors flex items-center justify-center gap-2 block font-medium shadow-md"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  Continue on WhatsApp
                </a>

                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <Link
                    href="/"
                    className="border border-[#657A6A] text-[#17251E] font-button text-xs px-6 py-3 rounded hover:bg-[#657A6A]/10"
                  >
                    Back to Home
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-[#657A6A] text-[#17251E] font-button text-xs px-6 py-3 rounded hover:bg-[#657A6A]/10"
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
                { step: 1, title: "01 — Treatments" },
                { step: 2, title: "02 — Details" },
                { step: 3, title: "03 — Schedule" },
                { step: 4, title: "04 — Goals" },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    currentStep === item.step
                      ? "bg-[#1C3329] border-[#1C3329] text-[#F5F5DC] font-semibold shadow-md"
                      : currentStep > item.step
                      ? "bg-[#657A6A] border-[#657A6A] text-[#F5F5DC]"
                      : "bg-[#F5F5DC] border-[#657A6A]/40 text-[#344C3D]"
                  }`}
                >
                  <span className="font-label-caps text-[11px] md:text-xs block truncate">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full px-[20px] md:px-[80px] -mx-[20px] md:-mx-[80px] rounded-2xl py-0">
              <div className="max-w-5xl mx-auto bg-[#F5F5DC] border border-[#657A6A]/40 rounded-2xl p-6 md:p-10 shadow-2xl text-[#17251E]">
                {/* STEP 1 — MULTI-SELECT TREATMENTS */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 bg-[#657A6A]/15 border border-[#657A6A]/40 rounded text-[#344C3D] font-label-caps text-[10px] tracking-widest uppercase mb-2 font-semibold">
                        WHAT WOULD YOU LIKE TO DISCUSS?
                      </div>
                      <h2 className="font-display text-[26px] md:text-[34px] text-[#17251E] mb-2 font-normal">
                        Select Treatments for Your Consultation
                      </h2>
                      <p className="font-body-md text-sm text-[#344C3D]">
                        Select one or more treatments you'd like to discuss during your consultation.
                      </p>
                    </div>

                    {/* Top Information Box (Live Counter Banner & Summary Bar) */}
                    <div className="bg-[#F5F5DC] border border-[#657A6A] rounded-xl p-4 md:p-5 shadow-sm space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#657A6A]/30 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#657A6A] animate-pulse"></span>
                          <span className="font-display text-base md:text-lg text-[#17251E]">
                            {selectedTreatments.length === 0
                              ? "Select the treatments you'd like to discuss."
                              : selectedTreatments.length === 1
                              ? "1 treatment selected"
                              : `${selectedTreatments.length} treatments selected`}
                          </span>
                        </div>
                        {selectedTreatments.length > 0 && (
                          <button
                            type="button"
                            onClick={clearAllSelections}
                            className="font-label-caps text-xs text-[#344C3D] hover:text-[#17251E] tracking-wider uppercase underline underline-offset-4 transition-colors font-semibold"
                          >
                            CLEAR SELECTION
                          </button>
                        )}
                      </div>

                      {/* Selected Treatment Chips */}
                      {selectedTreatments.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedTreatments.map((title) => (
                            <span
                              key={title}
                              className="inline-flex items-center gap-2 bg-[#1C3329] text-[#F5F5DC] text-xs px-3 py-1.5 rounded-full font-medium shadow-sm transition-all animate-in fade-in duration-200"
                            >
                              <span>{title}</span>
                              <button
                                type="button"
                                onClick={() => removeTreatment(title)}
                                className="w-4 h-4 rounded-full bg-[#F5F5DC]/20 hover:bg-[#F5F5DC]/40 text-[#F5F5DC] flex items-center justify-center text-xs transition-colors"
                                title={`Remove ${title}`}
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {errors.selectedTreatments && (
                      <div className="bg-red-50 border border-red-300 rounded-lg p-3 text-red-700 text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">error</span>
                        {errors.selectedTreatments}
                      </div>
                    )}

                    {/* Category Groups Grid */}
                    <div className="space-y-10">
                      {CATEGORY_GROUPS.map((group) => {
                        const groupTreatments = group.treatmentIds
                          .map((id) => TREATMENTS_DATA.find((t) => t.id === id))
                          .filter((t): t is Treatment => Boolean(t));

                        if (groupTreatments.length === 0) return null;

                        return (
                          <div key={group.name} className="space-y-4">
                            <div className="flex items-center gap-3 border-b border-[#657A6A]/40 pb-2">
                              <h3 className="font-label-caps text-xs md:text-sm font-semibold tracking-widest text-[#344C3D] uppercase">
                                {group.name}
                              </h3>
                              <span className="text-xs text-[#344C3D]/70 font-body-md">
                                ({groupTreatments.length})
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {groupTreatments.map((treatment) => {
                                const isSelected = selectedTreatments.includes(treatment.title);
                                return (
                                  <div
                                    key={treatment.id}
                                    onClick={() => toggleTreatment(treatment.title)}
                                    className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between select-none ${
                                      isSelected
                                        ? "bg-[#1C3329] border-[#C9A227] shadow-lg ring-1 ring-[#C9A227] text-[#F5F5DC]"
                                        : "bg-[#F5F5DC] border-[#657A6A] hover:border-[#17251E] text-[#17251E]"
                                    }`}
                                  >
                                    <div>
                                      <div className="flex items-start justify-between gap-2 mb-2">
                                        <h4
                                          className={`font-display text-base md:text-lg leading-snug font-normal ${
                                            isSelected ? "text-[#F5F5DC]" : "text-[#17251E]"
                                          }`}
                                        >
                                          {treatment.title}
                                        </h4>
                                        <div
                                          className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors text-xs ${
                                            isSelected
                                              ? "bg-[#C9A227] border-[#C9A227] text-[#17251E] font-bold"
                                              : "border-[#657A6A] bg-transparent text-transparent"
                                          }`}
                                        >
                                          ✓
                                        </div>
                                      </div>

                                      <p
                                        className={`font-body-md text-xs line-clamp-2 leading-relaxed mb-3 ${
                                          isSelected ? "text-[#F5F5DC]/90" : "text-[#344C3D]"
                                        }`}
                                      >
                                        {treatment.excerpt}
                                      </p>
                                    </div>

                                    {treatment.procedureOverview?.duration && (
                                      <div
                                        className={`pt-2 border-t text-[11px] font-label-caps uppercase tracking-wider ${
                                          isSelected
                                            ? "border-[#F5F5DC]/20 text-[#C9A227]"
                                            : "border-[#657A6A]/20 text-[#344C3D]"
                                        }`}
                                      >
                                        Duration: {treatment.procedureOverview.duration}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
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
                      <h2 className="font-display text-[26px] md:text-[32px] text-[#17251E] mb-2 font-normal">
                        Your Personal Information
                      </h2>
                      <p className="font-body-md text-sm text-[#344C3D]">
                        Please provide your contact details so our clinic team can get in touch.
                      </p>
                    </div>

                    {/* Selected Treatments Quick Review */}
                    <div className="bg-[#F5F5DC] border border-[#657A6A] rounded-xl p-4">
                      <span className="font-label-caps text-xs text-[#344C3D] uppercase font-semibold block mb-2">
                        Selected Treatments for Consultation ({selectedTreatments.length}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTreatments.map((t) => (
                          <span
                            key={t}
                            className="bg-[#1C3329] text-[#F5F5DC] text-xs px-2.5 py-1 rounded-full font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={personalDetails.fullName}
                          onChange={(e) =>
                            setPersonalDetails({ ...personalDetails, fullName: e.target.value })
                          }
                          placeholder="e.g. Ananya Sharma"
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] placeholder-[#344C3D]/60 focus:outline-none focus:border-[#17251E]"
                        />
                        {errors.fullName && (
                          <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={personalDetails.phone}
                          onChange={(e) =>
                            setPersonalDetails({ ...personalDetails, phone: e.target.value })
                          }
                          placeholder="e.g. 0000000000"
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] placeholder-[#344C3D]/60 focus:outline-none focus:border-[#17251E]"
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={personalDetails.email}
                          onChange={(e) =>
                            setPersonalDetails({ ...personalDetails, email: e.target.value })
                          }
                          placeholder="e.g. ananya@example.com"
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] placeholder-[#344C3D]/60 focus:outline-none focus:border-[#17251E]"
                        />
                        {errors.email && (
                          <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Preferred Contact Method
                        </label>
                        <select
                          value={personalDetails.contactMethod}
                          onChange={(e) =>
                            setPersonalDetails({ ...personalDetails, contactMethod: e.target.value })
                          }
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] focus:outline-none focus:border-[#17251E]"
                        >
                          <option value="WhatsApp" className="bg-[#F5F5DC] text-[#17251E]">
                            WhatsApp
                          </option>
                          <option value="Phone Call" className="bg-[#F5F5DC] text-[#17251E]">
                            Phone Call
                          </option>
                          <option value="Email" className="bg-[#F5F5DC] text-[#17251E]">
                            Email
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 — SCHEDULE REQUEST */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-[26px] md:text-[32px] text-[#17251E] mb-2 font-normal">
                        Preferred Date & Time Slot
                      </h2>
                      <p className="font-body-md text-sm text-[#344C3D]">
                        Select your preferred date for a clinic appointment. (This is a request; our team will confirm final slot availability).
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          value={schedule.preferredDate}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) =>
                            setSchedule({ ...schedule, preferredDate: e.target.value })
                          }
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] focus:outline-none focus:border-[#17251E]"
                        />
                        {errors.preferredDate && (
                          <p className="text-red-600 text-xs mt-1">{errors.preferredDate}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Preferred Time Slot
                        </label>
                        <select
                          value={schedule.preferredTime}
                          onChange={(e) =>
                            setSchedule({ ...schedule, preferredTime: e.target.value })
                          }
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] focus:outline-none focus:border-[#17251E]"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)" className="bg-[#F5F5DC] text-[#17251E]">
                            Morning (10:00 AM - 1:00 PM)
                          </option>
                          <option value="Afternoon (1:00 PM - 4:00 PM)" className="bg-[#F5F5DC] text-[#17251E]">
                            Afternoon (1:00 PM - 4:00 PM)
                          </option>
                          <option value="Evening (4:00 PM - 7:00 PM)" className="bg-[#F5F5DC] text-[#17251E]">
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
                      <h2 className="font-display text-[26px] md:text-[32px] text-[#17251E] mb-2 font-normal">
                        Aesthetic Goals & Summary
                      </h2>
                      <p className="font-body-md text-sm text-[#344C3D]">
                        Review your consultation summary and share any specific goals for Dr. Akshaya Jain.
                      </p>
                    </div>

                    {/* Consultation Summary Box */}
                    <div className="bg-[#F5F5DC] text-[#17251E] border border-[#657A6A] rounded-xl p-5 space-y-3 font-body-md text-sm shadow-sm">
                      <h3 className="font-label-caps text-xs uppercase font-bold tracking-wider text-[#17251E] border-b border-[#17251E]/20 pb-2">
                        YOUR CONSULTATION SUMMARY
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <span className="font-semibold text-xs uppercase text-[#344C3D]">
                            Selected Treatments ({selectedTreatments.length}):
                          </span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 pl-1 text-xs md:text-sm font-medium text-[#17251E]">
                          {selectedTreatments.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-[#17251E]/20 pt-3 text-xs">
                        <div>
                          <span className="text-[#344C3D]">Name:</span>{" "}
                          <span className="font-semibold text-[#17251E]">{personalDetails.fullName}</span>
                        </div>
                        <div>
                          <span className="text-[#344C3D]">Date:</span>{" "}
                          <span className="font-semibold text-[#17251E]">{schedule.preferredDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Aesthetic Goals & Primary Concerns
                        </label>
                        <textarea
                          rows={3}
                          value={goals.aestheticGoals}
                          onChange={(e) =>
                            setGoals({ ...goals, aestheticGoals: e.target.value })
                          }
                          placeholder="e.g. Skin glow improvement, hair loss density recovery, dynamic wrinkle softening..."
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] placeholder-[#344C3D]/60 focus:outline-none focus:border-[#17251E]"
                        ></textarea>
                      </div>

                      <div>
                        <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-semibold">
                          Additional Notes / Medical History Highlights
                        </label>
                        <textarea
                          rows={2}
                          value={goals.concerns}
                          onChange={(e) => setGoals({ ...goals, concerns: e.target.value })}
                          placeholder="e.g. Sensitive skin, previous laser treatments, ongoing topical medications..."
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded p-3.5 text-sm text-[#17251E] placeholder-[#344C3D]/60 focus:outline-none focus:border-[#17251E]"
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={goals.consent}
                            onChange={(e) => setGoals({ ...goals, consent: e.target.checked })}
                            className="mt-1 accent-[#1C3329] w-4 h-4 rounded"
                          />
                          <span className="font-body-md text-xs text-[#344C3D] leading-relaxed">
                            I agree to share these details with Skintillatingg clinic for the purpose of scheduling a confidential medical consultation. *
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="text-red-600 text-xs mt-1">{errors.consent}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="border border-[#657A6A] text-[#17251E] font-button text-xs px-6 py-3 rounded hover:bg-[#657A6A]/10 font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="bg-[#1C3329] text-[#F5F5DC] font-button text-[14px] px-8 py-3.5 rounded hover:bg-[#17251E] transition-colors font-medium shadow-md"
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
                      className="border border-[#657A6A] text-[#17251E] font-button text-xs px-6 py-3 rounded hover:bg-[#657A6A]/10 font-semibold disabled:opacity-30"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#1C3329] text-[#F5F5DC] font-button text-[14px] px-8 py-3.5 rounded hover:bg-[#17251E] transition-colors font-medium shadow-md"
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

export default function BookConsultationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1C3329] text-[#F5F5DC] flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-10 h-10 border-2 border-[#AEB9A9] border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="font-label-caps text-xs tracking-widest text-[#F5F5DC]/70 uppercase">
              Loading Consultation Portal...
            </p>
          </div>
        </div>
      }
    >
      <BookConsultationForm />
    </Suspense>
  );
}
