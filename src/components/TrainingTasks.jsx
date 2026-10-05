import React, { useState } from 'react'
import SectionHeader from './SectionHeader'

const departments = [
  {
    id: 'reservations',
    label: 'Reservations',
    tasks: [
      'Taking a Reservation by Phone or at the Front Desk',
      'Revising a Reservation Step by Step',
      'Suggesting Alternative Room Options and Upselling',
      'Handling a Group Reservation',
      'No-Shows, Complimentary Rooms and House Use',
      'Reservation Correspondence and Email Enquiries',
      'Building and Using the Guest History File',
      'The Selling Strategy: Rates, Availability and Room Inventory',
      'Working in the Property Management System: Reservations, Rates and Reports',
    ],
  },
  {
    id: 'front-office',
    label: 'Front Office',
    tasks: [
      'Meeting a Hotel Representative at the Airport',
      'The Guest Arrives at the Hotel',
      'Welcoming a Guest Who Has a Reservation',
      'Welcoming a Guest Who Has No Reservation',
      'Checking In VIPs, Loyalty Members and Return Guests',
      'Securing the Stay with a Credit Card',
      'Filling Out the Registration Form',
      'Checking In a Large Tour Group',
      'Room and Suite Types and Rate Categories',
      "The Hotel's Loyalty Programme and Its Members",
      'Recreation Facilities: Pool, Gym, Spa and Sauna, and Their Terms of Use',
      'Taking Messages for a Guest',
      'Handling a Request for Child Care or Babysitting',
      "The Guest's Departure Experience",
      'Checking Out Long-Stay Guests, Crews and Conventions',
      'Checking a Guest Out: A Dispute About the Bill',
      'Exchanging Currency',
      'Front Desk Cashiering: Rebates, Paid-Outs and the Float',
      'Working in the Property Management System: Front Desk Functions',
      'Three Steps of Service in Front Office',
      'Exceeding Guests Expectations in Front Office',
    ],
  },
  {
    id: 'concierge',
    label: 'Concierge',
    tasks: [
      'Escorting a Guest to the Room',
      'Orienting a Guest to the Room and Sharing Key Hotel Information',
      'Helping a Guest Ship a Parcel',
      "Parking a Guest's Car",
      'Key Control at the Valet Desk and Car Park',
      'The Business Centre: What It Offers',
      'In-Room Entertainment',
      'Explaining the Details of a Hotel Tour',
      'Advising Guests on Nearby Restaurants',
      'Arranging a Taxi or Courtesy Car',
      'Directing Guests to Nearby Tourist Attractions',
      'Safe Deposit and Storing Guest Valuables',
      'Storing Luggage After Check-Out',
    ],
  },
  {
    id: 'housekeeping',
    label: 'Housekeeping',
    tasks: [
      "Making Up a Guest Room and Asking the Guest's Consent to Clean",
      'Bringing Extra Amenities to the Room and Explaining Any Charges',
      'Taking an Order for Housekeeping Services',
      'Delivering an Order and the Standard for Entering a Guest Room',
      'The Housekeeping Office: Keys, Room Status and Logs',
      'Room Set-Ups and Service for Suites, VIP and Loyalty Guests',
      'Uniforms and Linen: Issuing and Control',
      'Public Area Cleaning',
    ],
  },
  {
    id: 'laundry',
    label: 'Laundry',
    tasks: [
      'The Hotel Laundry Service: Timings, Terms and Conditions',
      'Processing Guest Laundry and House Linen',
      'Laundry Equipment and Chemical Control',
    ],
  },
  {
    id: 'fb-restaurants',
    label: 'F&B Restaurants',
    tasks: [
      'Signing for Drinks and Snacks',
      'Taking a Restaurant Reservation by Phone',
      'When No Table Is Available: Looking After Waiting Guests',
      'Greeting and Seating Guests in the Restaurant',
      'Table Set-Ups, Amenities and Suite Service Standards',
      'Taking a Beverage Order and Serving Beverages',
      'Taking a Meal Order and Explaining the Menu',
      'Serving Food and Drinks',
      'Taking Dessert and Coffee Orders',
      'Presenting the Bill and Taking Payment',
      'Handling Payment When the Guest Is Dissatisfied',
      'Handling a Credit Card Problem at Payment',
      "The Hotel's Food and Beverage Outlets and How They Differ",
      'The Kitchen and Stewarding: How the Back of House Works',
      'Three Steps of Service in F&B',
    ],
  },
  {
    id: 'banquets',
    label: 'Banquets & Events',
    tasks: ['Booking the Hotel for Future Conferences and Events'],
  },
  {
    id: 'security',
    label: 'Security',
    tasks: [
      "Lost and Found and the Hotel's Policy",
      'Helping an Injured Guest: First Aid and Hotel Policy',
      'Getting Medical Care for a Guest: Doctor on Call and Ambulance',
      "Emergency Calls and the Switchboard's Role",
    ],
  },
  {
    id: 'telephones',
    label: 'Telephones',
    tasks: [
      'Telephone Skills at the Switchboard',
      'Connecting Calls and Using the Hotel Directory',
      'Wake-Up Calls and Operator-Assisted Calls',
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    tasks: [
      "The Night Audit and the Day's Closing Reports",
      'Credit Policy and Guest Credit Limits',
      'Cost Control and the Monthly Profit and Loss Statement',
      'Month-End Operating Equipment Inventory',
      'Accounting Records and IT System Controls',
    ],
  },
  {
    id: 'marketing-sales',
    label: 'Marketing & Sales',
    tasks: [
      'Market Segments and How the Sales Team Is Organised',
      'Selling Skills: Transient and Group Solicitation',
      'Direct Marketing, Promotions and Special Events',
      'Social Media and Public Relations for the Hotel',
      'The Sales Account Database and the Marketing Plan',
    ],
  },
  {
    id: 'materials',
    label: 'Materials',
    tasks: [
      'Purchasing: Specifications, Suppliers and Orders',
      'Requisitioning and Issuing from the Store',
      'Month-End in the Store: Counting and Closing',
    ],
  },
  {
    id: 'human-resources',
    label: 'Human Resources',
    tasks: [
      'Staff Facilities: The Staff House and the Cafeteria',
      'Employment Documentation and Government Procedures',
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    tasks: [
      'Attending a Guest Maintenance Request in the Room',
      'Preventive Maintenance and the Room Check',
    ],
  },
  {
    id: 'all-departments',
    label: 'All Departments',
    tasks: [
      'Dealing with a Dissatisfied Guest and Service Recovery',
      'Dealing with Fussy or Noisy Guests',
      'When a Guest Reports a Problem',
      'Grooming and Hygiene for Hospitality Professionals',
      'A Checklist of Good Hospitality Practices',
      'Common Terms and Items in the Hospitality Business',
    ],
  },
]

const stats = [
  { value: '100', label: 'Topics' },
  { value: '15', label: 'Minutes Each' },
  { value: String(departments.length), label: 'Departments' },
]

export default function TrainingTasks() {
  const [activeId, setActiveId] = useState(departments[0].id)
  const activeDepartment =
    departments.find((department) => department.id === activeId) || departments[0]

  return (
    <section id="training-tasks" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(4,23,47,0.07),transparent_35%)]" />

      <div className="relative site-container site-section">
        <SectionHeader
          eyebrow="Department Training"
          title="100 Department-Wise 15-Minute Training Tasks"
          description="Each 15-Minutes Training Session is a brief for On-Job-Training. The sessions can be offered both on-site and online."
        />

        <div className="section-content grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm shadow-[#04172f]/5"
            >
              <p className="text-4xl font-semibold text-[#04172f]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-md shadow-[#04172f]/5">
          <div className="border-b border-slate-200 bg-[#04172f] px-5 py-5 sm:px-7 sm:py-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ea580c]">
              Browse by Department
            </p>
            <p className="mt-1.5 text-sm text-white/75">
              Select a department to view its 15-minute briefing tasks.
            </p>
          </div>

          <div className="border-b border-slate-200 bg-white px-3 py-5 sm:px-5 sm:py-6">
            <div
              className="flex gap-2.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Training task departments"
            >
              {departments.map((department) => {
                const isActive = department.id === activeId

                return (
                  <button
                    key={department.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(department.id)}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'border-[#ea580c] bg-[#ea580c] text-white shadow-sm shadow-orange-600/30'
                        : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-[#ea580c]/50 hover:bg-white hover:text-[#04172f]'
                    }`}
                  >
                    {department.label}
                    <span
                      className={`ml-2 text-[11px] font-medium ${
                        isActive ? 'text-white/80' : 'text-slate-400'
                      }`}
                    >
                      {department.tasks.length}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div key={activeDepartment.id} className="fade-in-up p-5 sm:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow text-[#ea580c]">Active Department</p>
                <h3 className="mt-1 text-2xl font-semibold text-[#04172f] sm:text-3xl">
                  {activeDepartment.label}
                </h3>
              </div>
              <p className="text-sm font-medium text-slate-500">
                {activeDepartment.tasks.length}{' '}
                {activeDepartment.tasks.length === 1 ? 'task' : 'tasks'} · 15 minutes each
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-[4.5rem_1fr] border-b border-slate-200 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:px-5">
                <span>S.No.</span>
                <span>15-Minute Brief Task</span>
              </div>

              <ul className="divide-y divide-slate-100">
                {activeDepartment.tasks.map((task, index) => (
                  <li
                    key={`${activeDepartment.id}-${index + 1}`}
                    className="grid grid-cols-[4.5rem_1fr] items-start gap-3 px-4 py-4 transition-colors duration-150 hover:bg-orange-50/50 sm:px-5"
                  >
                    <span className="pt-0.5 text-sm font-semibold tabular-nums text-[#ea580c]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-6 text-slate-700 sm:text-[0.95rem]">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
