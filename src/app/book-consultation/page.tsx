"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/effects/ScrollReveal";
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

  // Search & Category Filter state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

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

  // Custom Luxury Calendar State
  const now = new Date();
  const [calendarYear, setCalendarYear] = useState<number>(now.getFullYear());
  const [calendarMonth, setCalendarMonth] = useState<number>(now.getMonth());

  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Category Filter Pill Definitions
  const CATEGORIES = [
    { id: "ALL", label: "ALL TREATMENTS" },
    { id: "SKIN & FACIAL AESTHETICS", label: "SKIN & FACIAL" },
    { id: "HAIRCARE", label: "HAIRCARE" },
    { id: "BODY / CONTOURING", label: "BODY" },
    { id: "HAIR REMOVAL", label: "HAIR REMOVAL" },
  ];

  // Helper function: Check if treatment matches searchQuery
  const matchesSearch = (treatment: Treatment, groupName: string) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      treatment.title.toLowerCase().includes(q) ||
      treatment.excerpt.toLowerCase().includes(q) ||
      treatment.category.toLowerCase().includes(q) ||
      groupName.toLowerCase().includes(q)
    );
  };

  // Helper function: Count matching treatments for a category ID
  const getCategoryCount = (categoryId: string) => {
    let count = 0;
    CATEGORY_GROUPS.forEach((group) => {
      if (categoryId !== "ALL" && group.name !== categoryId) return;
      const groupTreatments = group.treatmentIds
        .map((id) => TREATMENTS_DATA.find((t) => t.id === id))
        .filter((t): t is Treatment => Boolean(t));
      count += groupTreatments.filter((t) => matchesSearch(t, group.name)).length;
    });
    return count;
  };

  // Total matching treatments in current view
  const totalMatchingTreatments = getCategoryCount(activeCategory);

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

  // Interactive Stepper Click Handler
  const handleStepClick = (targetStep: number) => {
    if (targetStep === currentStep) return;

    // Allow instant backward navigation
    if (targetStep < currentStep) {
      setErrors({});
      setCurrentStep(targetStep);
      return;
    }

    // Forward navigation requires preceding step validation
    if (targetStep > currentStep) {
      // Validate Step 1
      if (selectedTreatments.length === 0) {
        setErrors({ selectedTreatments: "Please select at least one treatment you'd like to discuss." });
        setCurrentStep(1);
        return;
      }
      // If jumping to Step 3 or 4, validate Step 2
      if (targetStep > 2 && !validateStep2()) {
        setCurrentStep(2);
        return;
      }
      // If jumping to Step 4, validate Step 3
      if (targetStep > 3 && !validateStep3()) {
        setCurrentStep(3);
        return;
      }

      setErrors({});
      setCurrentStep(targetStep);
    }
  };

  // Calendar Event Generator Helpers
  const getGoogleCalendarUrl = () => {
    const dateStr = schedule.preferredDate || new Date().toISOString().split("T")[0];
    const cleanDate = dateStr.replace(/-/g, "");

    let startHour = "100000";
    let endHour = "110000";
    if (schedule.preferredTime.includes("Afternoon")) {
      startHour = "130000";
      endHour = "140000";
    } else if (schedule.preferredTime.includes("Evening")) {
      startHour = "160000";
      endHour = "170000";
    }

    const startIso = `${cleanDate}T${startHour}`;
    const endIso = `${cleanDate}T${endHour}`;

    const title = encodeURIComponent("Skintillatingg Consultation — Dr. Akshaya Jain");
    const details = encodeURIComponent(
      `Consultation Request with Dr. Akshaya Jain.\n\n` +
        `Reference Number: ${referenceNumber}\n` +
        `Selected Treatments: ${selectedTreatments.join(", ")}\n` +
        `Patient Name: ${personalDetails.fullName}`
    );
    const location = encodeURIComponent("Skintillatingg Medical Aesthetics, Koregaon Park, Pune");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  const downloadIcsFile = () => {
    const dateStr = schedule.preferredDate || new Date().toISOString().split("T")[0];
    const cleanDate = dateStr.replace(/-/g, "");

    let startHour = "100000";
    let endHour = "110000";
    if (schedule.preferredTime.includes("Afternoon")) {
      startHour = "130000";
      endHour = "140000";
    } else if (schedule.preferredTime.includes("Evening")) {
      startHour = "160000";
      endHour = "170000";
    }

    const startIso = `${cleanDate}T${startHour}`;
    const endIso = `${cleanDate}T${endHour}`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Skintillatingg//Consultation Booking//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `SUMMARY:Skintillatingg Consultation — Dr. Akshaya Jain`,
      `DESCRIPTION:Consultation Request with Dr. Akshaya Jain.\\nReference: ${referenceNumber}\\nSelected Treatments: ${selectedTreatments.join(", ")}\\nPatient: ${personalDetails.fullName}`,
      `LOCATION:Skintillatingg Medical Aesthetics\\, Koregaon Park\\, Pune`,
      `DTSTART:${startIso}`,
      `DTEND:${endIso}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `Skintillatingg-Consultation-${referenceNumber || "Request"}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <ScrollReveal direction="up" delay={100} showGoldLine goldLinePosition="bottom" className="max-w-3xl pb-4">
          <div>
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
        </ScrollReveal>
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

              {/* 1-Click "Add to Calendar" Integration */}
              <div className="bg-[#657A6A]/10 border border-[#657A6A]/40 rounded-xl p-4 space-y-3">
                <span className="font-label-caps text-xs text-[#344C3D] uppercase font-bold tracking-wider block text-center">
                  📅 ADD CONSULTATION TO YOUR CALENDAR
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1C3329] text-[#F5F5DC] hover:bg-[#17251E] font-button text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm transition-all text-center"
                  >
                    <span className="material-symbols-outlined text-sm text-[#C9A227]">calendar_today</span>
                    <span>Google Calendar</span>
                  </a>
                  <button
                    type="button"
                    onClick={downloadIcsFile}
                    className="border border-[#1C3329] text-[#17251E] hover:bg-[#1C3329]/10 font-button text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-sm transition-all text-center"
                  >
                    <span className="material-symbols-outlined text-sm text-[#1C3329]">download</span>
                    <span>Apple / Outlook (.ics)</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 space-y-4">
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
            {/* Step Progress Bar (Interactive Stepper) */}
            <div className="grid grid-cols-4 gap-2 mb-12">
              {[
                { step: 1, title: "01 — Treatments" },
                { step: 2, title: "02 — Details" },
                { step: 3, title: "03 — Schedule" },
                { step: 4, title: "04 — Goals" },
              ].map((item) => {
                const isCurrent = currentStep === item.step;
                const isCompleted = item.step < currentStep;

                return (
                  <button
                    type="button"
                    key={item.step}
                    onClick={() => handleStepClick(item.step)}
                    className={`p-3 rounded-lg border text-center transition-all cursor-pointer group flex flex-col items-center justify-center gap-1 ${
                      isCurrent
                        ? "bg-[#1C3329] border-[#1C3329] text-[#F5F5DC] font-semibold shadow-md ring-2 ring-[#C9A227]/50"
                        : isCompleted
                        ? "bg-[#657A6A] border-[#657A6A] text-[#F5F5DC] hover:bg-[#1C3329] hover:border-[#1C3329] hover:shadow-lg"
                        : "bg-[#F5F5DC] border-[#657A6A]/40 text-[#344C3D] hover:bg-[#657A6A]/10"
                    }`}
                    title={
                      isCompleted
                        ? `Click to jump back to ${item.title}`
                        : isCurrent
                        ? `Current step: ${item.title}`
                        : `Jump to ${item.title}`
                    }
                  >
                    <div className="flex items-center justify-center gap-1.5 w-full">
                      {isCompleted && (
                        <span className="material-symbols-outlined text-xs text-[#C9A227] font-bold">
                          check_circle
                        </span>
                      )}
                      <span className="font-label-caps text-[11px] md:text-xs block truncate">
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
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
                        Select one or more treatments you&apos;d like to discuss during your consultation.
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

                    {/* Live Search Input & Category Filter Pills */}
                    <div className="space-y-4 bg-[#F5F5DC] border border-[#657A6A]/50 rounded-xl p-4 md:p-5 shadow-sm">
                      {/* Live Search Input Bar */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#344C3D]">
                          <span className="material-symbols-outlined text-xl">search</span>
                        </div>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search treatments by name, concern, or keyword (e.g. HIFU, Laser, Peel, PRP)..."
                          className="w-full bg-[#F5F5DC] border border-[#657A6A]/60 rounded-lg pl-11 pr-24 py-3 text-sm text-[#17251E] placeholder-[#344C3D]/60 focus:outline-none focus:border-[#17251E] focus:ring-1 focus:ring-[#17251E] transition-all shadow-inner"
                        />
                        {searchQuery ? (
                          <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute inset-y-0 right-3 flex items-center gap-1.5 text-xs text-[#344C3D] hover:text-[#17251E] font-medium"
                          >
                            <span className="bg-[#657A6A]/20 hover:bg-[#657A6A]/40 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors">✕</span>
                            <span>Clear</span>
                          </button>
                        ) : (
                          <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-xs text-[#344C3D]/70 font-medium">
                            {totalMatchingTreatments} available
                          </div>
                        )}
                      </div>

                      {/* Category Filter Pills */}
                      <div className="flex flex-wrap gap-2 pt-1 border-t border-[#657A6A]/20">
                        {CATEGORIES.map((cat) => {
                          const count = getCategoryCount(cat.id);
                          const isActive = activeCategory === cat.id;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setActiveCategory(cat.id)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-label-caps tracking-wider transition-all flex items-center gap-1.5 select-none ${
                                isActive
                                  ? "bg-[#1C3329] text-[#F5F5DC] font-semibold shadow-sm ring-1 ring-[#C9A227]"
                                  : "bg-[#657A6A]/15 text-[#344C3D] hover:bg-[#657A6A]/30 hover:text-[#17251E] border border-[#657A6A]/40"
                              }`}
                            >
                              <span>{cat.label}</span>
                              <span
                                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                                  isActive ? "bg-[#C9A227] text-[#17251E]" : "bg-[#657A6A]/30 text-[#344C3D]"
                                }`}
                              >
                                {count}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Zero Results Fallback State */}
                    {totalMatchingTreatments === 0 ? (
                      <div className="bg-[#F5F5DC] border border-dashed border-[#657A6A] rounded-xl p-8 md:p-10 text-center space-y-4 my-6">
                        <div className="w-14 h-14 rounded-full bg-[#657A6A]/20 flex items-center justify-center mx-auto text-[#344C3D]">
                          <span className="material-symbols-outlined text-3xl">search_off</span>
                        </div>
                        <div>
                          <h3 className="font-display text-xl text-[#17251E] mb-1">
                            No Treatments Found
                          </h3>
                          <p className="font-body-md text-sm text-[#344C3D] max-w-md mx-auto">
                            No therapies matched &quot;{searchQuery}&quot;
                            {activeCategory !== "ALL" ? ` in category "${activeCategory}"` : ""}.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery("");
                            setActiveCategory("ALL");
                          }}
                          className="inline-flex items-center gap-2 bg-[#1C3329] text-[#F5F5DC] px-5 py-2.5 rounded-lg text-xs font-button hover:bg-[#17251E] transition-colors shadow-sm font-semibold"
                        >
                          <span className="material-symbols-outlined text-base">refresh</span>
                          Reset Search &amp; Filters
                        </button>
                      </div>
                    ) : (
                      /* Category Groups Grid */
                      <div className="space-y-10">
                        {CATEGORY_GROUPS.map((group) => {
                          if (activeCategory !== "ALL" && group.name !== activeCategory) {
                            return null;
                          }

                          const groupTreatments = group.treatmentIds
                            .map((id) => TREATMENTS_DATA.find((t) => t.id === id))
                            .filter((t): t is Treatment => Boolean(t))
                            .filter((t) => matchesSearch(t, group.name));

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
                    )}
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

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                      {/* Custom Skintillatingg Luxury Calendar (8 Cols) */}
                      <div className="lg:col-span-7 bg-[#F5F5DC] border-2 border-[#1C3329]/30 rounded-2xl p-5 md:p-6 shadow-md space-y-4">
                        {/* Calendar Header & Month Nav */}
                        <div className="flex items-center justify-between border-b border-[#657A6A]/30 pb-3">
                          <div>
                            <span className="font-label-caps text-[10px] text-[#C9A227] tracking-widest uppercase block font-bold">
                              CLINIC APPOINTMENT CALENDAR
                            </span>
                            <h3 className="font-display text-xl md:text-2xl text-[#17251E] font-medium">
                              {MONTH_NAMES[calendarMonth]} {calendarYear}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                if (calendarMonth === 0) {
                                  setCalendarMonth(11);
                                  setCalendarYear((y) => y - 1);
                                } else {
                                  setCalendarMonth((m) => m - 1);
                                }
                              }}
                              className="w-9 h-9 rounded-lg bg-[#1C3329] text-[#F5F5DC] hover:bg-[#17251E] hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-sm"
                              title="Previous Month"
                            >
                              ‹
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (calendarMonth === 11) {
                                  setCalendarMonth(0);
                                  setCalendarYear((y) => y + 1);
                                } else {
                                  setCalendarMonth((m) => m + 1);
                                }
                              }}
                              className="w-9 h-9 rounded-lg bg-[#1C3329] text-[#F5F5DC] hover:bg-[#17251E] hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-sm"
                              title="Next Month"
                            >
                              ›
                            </button>
                          </div>
                        </div>

                        {/* Weekday Header Row */}
                        <div className="grid grid-cols-7 text-center gap-1 font-label-caps text-xs text-[#344C3D] font-bold tracking-wider py-1 border-b border-[#657A6A]/20">
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
                            <div key={day} className={idx === 1 ? "text-red-800/70" : ""}>
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1.5 pt-1">
                          {/* Filler empty cells before 1st of month */}
                          {Array.from({
                            length: new Date(calendarYear, calendarMonth, 1).getDay(),
                          }).map((_, i) => (
                            <div key={`empty-${i}`} className="h-10 md:h-11" />
                          ))}

                          {/* Days of Month */}
                          {Array.from({
                            length: new Date(calendarYear, calendarMonth + 1, 0).getDate(),
                          }).map((_, i) => {
                            const dayNum = i + 1;
                            const dObj = new Date(calendarYear, calendarMonth, dayNum);
                            const isoString = `${calendarYear}-${String(calendarMonth + 1).padStart(
                              2,
                              "0"
                            )}-${String(dayNum).padStart(2, "0")}`;

                            const isSelected = schedule.preferredDate === isoString;
                            const today = new Date();
                            const isToday =
                              dObj.getFullYear() === today.getFullYear() &&
                              dObj.getMonth() === today.getMonth() &&
                              dObj.getDate() === today.getDate();

                            const isPast =
                              dObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                            const isMonday = dObj.getDay() === 1;
                            const isDisabled = isPast || isMonday;

                            return (
                              <button
                                key={dayNum}
                                type="button"
                                disabled={isDisabled}
                                onClick={() => {
                                  setSchedule({ ...schedule, preferredDate: isoString });
                                  setErrors((prev) => {
                                    const next = { ...prev };
                                    delete next.preferredDate;
                                    return next;
                                  });
                                }}
                                className={`h-10 md:h-11 rounded-lg text-xs md:text-sm font-semibold transition-all flex flex-col items-center justify-center relative ${
                                  isSelected
                                    ? "bg-[#1C3329] text-[#F5F5DC] border-2 border-[#C9A227] shadow-lg ring-2 ring-[#C9A227]/40 scale-105"
                                    : isToday
                                    ? "border-2 border-[#C9A227] text-[#17251E] bg-[#C9A227]/10 hover:bg-[#1C3329] hover:text-[#F5F5DC]"
                                    : isDisabled
                                    ? "opacity-30 text-[#657A6A] bg-[#657A6A]/5 cursor-not-allowed border-transparent"
                                    : "bg-[#F5F5DC] text-[#17251E] border border-[#657A6A]/40 hover:bg-[#1C3329] hover:text-[#F5F5DC] hover:border-[#1C3329] cursor-pointer"
                                }`}
                                title={
                                  isMonday
                                    ? "Clinic closed on Mondays"
                                    : isPast
                                    ? "Past date unavailable"
                                    : `Select ${MONTH_NAMES[calendarMonth]} ${dayNum}, ${calendarYear}`
                                }
                              >
                                <span>{dayNum}</span>
                                {isMonday && (
                                  <span className="text-[9px] leading-tight text-red-700/80 font-normal">
                                    Closed
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Quick Presets & Date Status Bar */}
                        <div className="pt-3 border-t border-[#657A6A]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[11px] font-label-caps text-[#344C3D] font-bold">
                              Quick Select:
                            </span>
                            {[
                              { label: "Tomorrow", offset: 1 },
                              { label: "In 3 Days", offset: 3 },
                              { label: "Next Sunday", offset: 7 },
                            ].map((preset) => (
                              <button
                                key={preset.label}
                                type="button"
                                onClick={() => {
                                  const target = new Date();
                                  target.setDate(target.getDate() + preset.offset);
                                  if (target.getDay() === 1) target.setDate(target.getDate() + 1); // skip Monday
                                  const isoStr = `${target.getFullYear()}-${String(
                                    target.getMonth() + 1
                                  ).padStart(2, "0")}-${String(target.getDate()).padStart(2, "0")}`;
                                  setSchedule({ ...schedule, preferredDate: isoStr });
                                  setCalendarMonth(target.getMonth());
                                  setCalendarYear(target.getFullYear());
                                  setErrors((prev) => {
                                    const next = { ...prev };
                                    delete next.preferredDate;
                                    return next;
                                  });
                                }}
                                className="px-2.5 py-1 rounded-md text-[11px] font-label-caps bg-[#657A6A]/15 text-[#17251E] hover:bg-[#1C3329] hover:text-[#F5F5DC] border border-[#657A6A]/40 transition-colors"
                              >
                                {preset.label}
                              </button>
                            ))}
                          </div>

                          {schedule.preferredDate ? (
                            <div className="bg-[#1C3329] text-[#F5F5DC] px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-sm">
                              <span className="material-symbols-outlined text-sm text-[#C9A227]">
                                check_circle
                              </span>
                              <span>{schedule.preferredDate}</span>
                            </div>
                          ) : (
                            <span className="text-xs text-red-600 font-medium animate-pulse">
                              * Select a date from calendar
                            </span>
                          )}
                        </div>

                        {errors.preferredDate && (
                          <div className="bg-red-50 border border-red-300 rounded-lg p-2.5 text-red-700 text-xs flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">error</span>
                            <span>{errors.preferredDate}</span>
                          </div>
                        )}
                      </div>

                      {/* Preferred Time Slot (5 Cols) */}
                      <div className="lg:col-span-5 bg-[#F5F5DC] border border-[#657A6A]/50 rounded-2xl p-5 md:p-6 shadow-sm space-y-4 flex flex-col justify-between">
                        <div>
                          <label className="block font-label-caps text-xs text-[#17251E] uppercase mb-2 font-bold tracking-wider">
                            PREFERRED TIME SLOT *
                          </label>
                          <p className="text-xs text-[#344C3D] mb-4">
                            Choose your preferred time range for your in-clinic consultation.
                          </p>

                          <div className="space-y-3">
                            {[
                              {
                                slot: "Morning (10:00 AM - 1:00 PM)",
                                title: "Morning Consultation",
                                time: "10:00 AM — 1:00 PM",
                                icon: "wb_twilight",
                              },
                              {
                                slot: "Afternoon (1:00 PM - 4:00 PM)",
                                title: "Afternoon Consultation",
                                time: "1:00 PM — 4:00 PM",
                                icon: "light_mode",
                              },
                              {
                                slot: "Evening (4:00 PM - 7:00 PM)",
                                title: "Evening Consultation",
                                time: "4:00 PM — 7:00 PM",
                                icon: "dark_mode",
                              },
                            ].map((item) => {
                              const isSlotSelected = schedule.preferredTime === item.slot;
                              return (
                                <button
                                  key={item.slot}
                                  type="button"
                                  onClick={() =>
                                    setSchedule({ ...schedule, preferredTime: item.slot })
                                  }
                                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
                                    isSlotSelected
                                      ? "bg-[#1C3329] border-[#1C3329] text-[#F5F5DC] shadow-md ring-2 ring-[#C9A227]"
                                      : "bg-[#F5F5DC] border-[#657A6A]/50 text-[#17251E] hover:bg-[#657A6A]/10 hover:border-[#1C3329]"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span
                                      className={`material-symbols-outlined text-xl ${
                                        isSlotSelected ? "text-[#C9A227]" : "text-[#344C3D]"
                                      }`}
                                    >
                                      {item.icon}
                                    </span>
                                    <div>
                                      <span className="font-semibold text-sm block">
                                        {item.title}
                                      </span>
                                      <span
                                        className={`text-xs block ${
                                          isSlotSelected ? "text-[#F5F5DC]/80" : "text-[#344C3D]"
                                        }`}
                                      >
                                        {item.time}
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                                      isSlotSelected
                                        ? "bg-[#C9A227] border-[#C9A227] text-[#17251E] font-bold"
                                        : "border-[#657A6A] group-hover:border-[#1C3329]"
                                    }`}
                                  >
                                    {isSlotSelected && "✓"}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#657A6A]/20 bg-[#657A6A]/10 rounded-xl p-3.5 text-xs text-[#344C3D] space-y-1">
                          <div className="flex items-center gap-1.5 font-bold text-[#17251E]">
                            <span className="material-symbols-outlined text-sm text-[#C9A227]">
                              info
                            </span>
                            <span>Clinic Hours & Policy</span>
                          </div>
                          <p className="leading-relaxed">
                            Tue – Sun: 10:00 AM – 7:00 PM (Closed Mondays). Our medical team will contact you to confirm final slot alignment.
                          </p>
                        </div>
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

      {/* Sticky Mobile Floating Action Bar (Step 1) */}
      {!isSubmitted && currentStep === 1 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#1C3329]/95 backdrop-blur-md border-t border-[#C9A227]/40 shadow-2xl md:hidden transition-all duration-300 animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <div className="flex items-center gap-2 text-[#F5F5DC]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227] animate-pulse"></span>
              <div>
                <div className="font-display text-sm font-semibold leading-tight text-[#F5F5DC]">
                  {selectedTreatments.length === 0
                    ? "Select Treatments"
                    : `${selectedTreatments.length} ${selectedTreatments.length === 1 ? "Treatment" : "Treatments"} Selected`}
                </div>
                <div className="font-label-caps text-[10px] text-[#F5F5DC]/70 uppercase tracking-wider">
                  {selectedTreatments.length === 0 ? "Tap cards above to select" : "Ready for next step"}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={selectedTreatments.length === 0}
              className="bg-[#C9A227] hover:bg-[#b59020] text-[#17251E] font-button text-xs px-5 py-3 rounded-lg font-bold shadow-md flex items-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            >
              <span>Proceed to Details</span>
              <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

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
