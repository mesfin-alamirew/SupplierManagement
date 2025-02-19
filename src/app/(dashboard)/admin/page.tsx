import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttandanceChart'
import Card from '@/components/Card'
import CountChart from '@/components/CountChart'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row '>
      {/* LEFT */}
      <div className='w-full lg;w-2/3 flex flex-col gap-8'>
        {/* CARDS */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <Card  type='user1'/>
          <Card  type='user2'/>
          <Card  type='user3'/>
          <Card  type='user4'/>
        </div>
        {/* MIDDLE CHART */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHRT */}
          <div className='w-full lg:w-2/3 h-[450px]'>
          <AttendanceChart />
          </div>
           
        </div>
        {/*BOTTOM CHART  */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage
