import { cn } from "@/lib/utils"

function Table({ className, ...props }) {
  return (
    <div
      data-slot="table-container"
      className="relative bg-[#2a2a2a] rounded-xl w-full mx-auto overflow-x-auto text-white text-2xl font-onest align-items-center overflow-hidden shadow-2xl border border-neutral-700/50"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }) {
  return (
    <thead
      data-slot="table-header"
      className={cn("bg-[#333333] border-b border-neutral-600", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-[#2d2d2d] border-t border-neutral-700 font-medium",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-neutral-700/50 transition-all duration-200 hover:bg-[#333333] hover:shadow-lg group",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-12 px-6 text-left align-middle font-semibold text-white uppercase tracking-wider text-xs font-onest [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-6 py-4 align-middle text-neutral-200 font-onest group-hover:text-white transition-colors [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
}
