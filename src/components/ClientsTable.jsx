import { EditIcon, Eye, Search, Trash } from "lucide-react"
import Button from "./Button"


import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/TableConfig"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export const ClientsTable = () =>  {
  return (
    <>
      <div className="w-full space-y-6 px-13 pb-10">
        <div className="flex items-center justify-between gap-4">
          <div className='flex items-center gap-x-5'>
            <div className='relative w-full sm:w-64 md:w-80'>
                <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-3'>
                  <button className='p-1 focus:outline-none text-black md:text-black'><Search className="h-5 w-5 text-[#5b5b5b]"/></button>
                </span>
                
                <input type="text" className='w-full text-white py-2.5 px-6 pl-12 rounded-xl shadow-sm outline-none hidden md:block focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 transition-all bg-[#2a2a2a] font-onest'/>
            </div>
          </div>

          <div>
            <Button onClick={() => alert("First button clicked")} 
            id="create-client-button"
            children={
              "+ Create Client"
            }
            disabled={ false }

            className="bg-[#967be7] hover:bg-[#8a70da] active:bg-[#7d5fcf] text-white font-onest font-bold py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
            />
          </div>
        </div>


        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell>{invoice.project}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => alert("Edit invoice")}
                      className="p-1.5 rounded-lg bg-[#967be7]/10 text-[#967be7] transition-all"
                      title="Edit"
                    >
                      <EditIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => alert("Delete invoice")}
                      className="p-1.5 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-600 transition-all"
                      title="Delete"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => alert("View invoice")}
                      className="p-1.5 rounded-lg bg-[#967be7]/10 text-[#967be7] transition-all"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div> 
    </>
  )
}
