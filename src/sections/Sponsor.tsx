const Sponsor = () => {
  return (
    <div id='support us' className="mt-[5rem]">
        <h2 className="text-5xl text-center">Support Us</h2>
        <p className='text-center text-xl mt-4 px-[20%]'>The estimated value of each car is around $7 000. This year, we hope to bring on an additional car to our garage as our previous car gets ready to retire.</p>
        <div className='flex px-[5%] mt-8 gap-4 items-center'>
          <div className='w-[30%] p-8 mt-4'>
            <h3 className='text-3xl mb-4'>Groups</h3>
            <p>Students have the opportunity to join the following groups.<br/><br/>As a subsidiary of SJAM Technology and Engineering, members develop valuable skills: electrical and mechanical engineering and AutoCAD. As much as we focus on engineering, EVC is a team-based club.</p>
          </div>
          <div className='w-[35%] flex flex-col gap-4'>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Mechanical</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Electrical</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Data Management</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Software</div>
          </div>
          <div className='w-[35%] flex flex-col gap-4'>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Design</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Outreach</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Engineering</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Woodworking</div>
          </div>
        </div>
        <div className='mt-12 px-[20%] flex justify-between'>
          <div>
            <h3 className='text-3xl'>Sponsorship Prospectus</h3>
            <p>Sponsor us today and support the future innovators of tech. </p>
          </div>
          <button onClick={() => window.location.href='/package.pdf'}>View Sponsorship Package</button>
        </div> 
    </div>
  )
}

export default Sponsor