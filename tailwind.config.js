/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  safelist: [
    "bg-blue-600", "bg-blue-700", "bg-green-600", "bg-green-700",
    "text-blue-600", "text-blue-700", "text-slate-500", "text-white", "text-slate-800", "text-slate-700", "text-slate-600", "text-amber-400", "text-blue-100", "text-blue-200",
    "rounded-md", "rounded-lg", "rounded-xl",
    "border", "border-slate-300", "border-slate-200", "border-b",
    "focus:ring-blue-500", "focus:border-blue-500",
    "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl",
    "hover:bg-blue-700", "hover:bg-green-700", "hover:text-blue-100", "hover:bg-blue-600",
    "transition-colors", "font-semibold", "font-bold", "font-medium", "font-normal",
    "text-sm", "text-xs", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-6xl",
    "w-full", "p-3", "p-5", "px-3", "py-2", "px-4", "px-5", "py-2.5", "pb-5", "pl-10",
    "mb-1", "mb-2", "mb-3", "mb-4", "mb-6", "mt-4", "mt-8", "mr-2", "mr-3", "ml-4",
    "flex", "inline-flex", "grid",
    "space-x-3", "space-x-1", "space-y-2", "space-y-3", "space-y-4", "gap-6", "gap-8", "gap-5", "gap-3",
    "justify-center", "justify-between", "items-center",
    "hidden", "md:block", "lg:flex", "lg:hidden",
    "container", "mx-auto",
    "fixed", "top-0", "left-0", "right-0", "z-[150]",
    "antialiased", "bg-slate-100", "bg-white", "bg-blue-700", "bg-slate-50",
    "tracking-tight", "leading-tight",
    "col-span-1", "lg:col-span-1", "lg:col-span-2", "md:grid-cols-2", "lg:grid-cols-3", "grid-cols-1", "grid-cols-2",
    "max-h-96", "overflow-y-auto", "pr-2", "modal-body-scrollable", // For legal updates feed
    "list-decimal", "list-inside", // For dilemma options
    "prose", "prose-xs", "max-w-none", // For AI analysis
    "relative", // For search input
    "absolute", "inset-y-0", // For search icon
    "self-start", "sm:self-center", // For AI scenario button
    "bg-teal-50", "border-teal-300", "text-teal-700", "text-teal-800", // For AI scenario container
    "list-none", // For external resources
    // Add more problematic classes here as identified
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
