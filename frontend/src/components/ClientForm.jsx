import { XCircle } from "lucide-react";
import { useState } from "react"
import { createClient } from "../../services/api";

const ClientForm = ({ onClose, onClientCreated }) => {
  const [ formData, setFormData ] = useState({
    
    name: '',
    company: '',
    email: '',
    phone: '', 
    status: '',
    priority: '',
    project: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = async (event) => {
    console.log("Form submitted", formData);
    event.preventDefault();

    try {
      const createdClient = await createClient(formData);
      alert('Data saved successfully!');
      onClientCreated(createdClient);


      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '', 
        status: '',
        priority: '',
        project: '',
      });

      onClose();
        
    } catch (error) {
      console.error('Error saving data:', error);
      alert('An error occurred.');
    }

  };


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">

      <form 
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] rounded-2xl border border-neutral-800 shadow-2xl p-8 space-y-6">
        <div className="flex w-full max-w-2xl justify-between items-start">
          <div>
            <h1 className="text-white font-bold text-3xl font-onest mb-2">
              New client
            </h1>
            <p className="text-neutral-400 font-onest">
              Fill in the information below to create a new client
            </p>
          </div>

          <button 
              type="button"
              onClick={onClose}
              className="p-2 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-200 font-onest"
            >
              <XCircle />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-neutral-300 font-medium font-onest text-sm">
              Name 
              <span className="text-[#C8E678]">*</span> 
            </label>
            <input
              name="name" 
              type="text"
              id="name"
              required
              placeholder="Ada Lovelace"
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 outline-none transition-all font-onest"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-neutral-300 font-medium font-onest text-sm">
              Company
              <span className="text-[#C8E678]">*</span>
            </label>
            <input
              name="company" 
              type="text"
              id="company"
              required
              placeholder="Acme Corp"
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 outline-none transition-all font-onest"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

    
          <div className="space-y-2">
            <label htmlFor="email" className="text-neutral-300 font-medium font-onest text-sm">
              Email
              <span className="text-[#C8E678]">*</span>
            </label>
            <input
              name="email" 
              type="email"
              id="email"
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 outline-none transition-all font-onest"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        
          <div className="space-y-2">
            <label 
              htmlFor="phone" 
              className="text-neutral-300 font-medium font-onest text-sm"
            >
              Phone
              <span className="text-[#C8E678]">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              id="phone"
              required
              placeholder="+1 (555) 123-4567"
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 outline-none transition-all font-onest"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="status" 
              className="text-neutral-300 font-medium font-onest text-sm"
            >
              Status
              <span className="text-[#C8E678]">*</span>
            </label>
            <select 
              name="status" 
              id="status" 
              required
              value={formData.status} 
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-2.5 text-white focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 outline-none transition-all font-onest appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#2a2a2a]">Select status...</option>
              <option value="active" className="bg-[#2a2a2a]">Active</option>
              <option value="lead" className="bg-[#2a2a2a]">Lead</option>
              <option value="inactive" className="bg-[#2a2a2a]">Inactive</option>
            </select>
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="priority" 
              className="text-neutral-300 font-medium font-onest text-sm"
            >
              Priority
              <span className="text-[#C8E678]">*</span>
            </label>
            <select 
              name="priority" 
              id="priority" 
              required
              value={formData.priority} 
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-2.5 text-white focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 outline-none transition-all font-onest appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#2a2a2a]">Select priority...</option>
              <option value="high" className="bg-[#2a2a2a]">High</option>
              <option value="medium" className="bg-[#2a2a2a]">Medium</option>
              <option value="low" className="bg-[#2a2a2a]">Low</option>
            </select>
          </div>
        </div>

          <div className="space-y-2">
            <label 
              htmlFor="project" 
              className="text-neutral-300 font-medium font-onest text-sm"
            >
              Project
              <span className="text-[#C8E678]">*</span>
            </label>
            <input
              name="project" 
              type="text"
              id="project"
              required
              placeholder="Website Redesign"
              className="w-full bg-[#1a1a1a] border border-neutral-700 rounded-xl px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 outline-none transition-all font-onest"
              value={formData.project}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <button 
              type="submit" 
              className="flex-1 bg-[#967be7] hover:bg-[#8a70da] active:bg-[#7d5fcf] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#967be7]/5 transition-all duration-200 font-onest"
            >
              Create Client
            </button>
          </div>
      </form>
    </div> 
  )
}


export default ClientForm;