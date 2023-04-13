import pic5 from '../assets/pic5.jpg'

const Sponsor = () => {
  return (
    <div id='support us' className="pt-[6rem]">
        <h2 className="text-5xl text-center">Support Us</h2>
        <p className='text-center text-xl mt-4 px-[20%]'>The estimated value of each car is around $7 000. This year, we hope to bring on an additional car to our garage as our previous car gets ready to retire.</p>
        <div className='flex flex-col lg:flex-row px-[5%] mt-8 gap-4 items-center'>
          <div className='w-[80%] lg:w-[30%] mt-4'>
            <h3 className='text-3xl mb-4 text-center lg:text-left'>Groups</h3>
            <p>Students have the opportunity to join the following groups.<br/><br/>As a subsidiary of LHSS Technology and Engineering, members develop valuable skills: electrical and mechanical engineering and AutoCAD. As much as we focus on engineering, EVC is a team-based club.</p>
          </div>
          <div className='w-[70%] lg:w-[35%] flex flex-col gap-4'>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Mechanical</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Electrical</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Data Management</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Software</div>
          </div>
          <div className='w-[70%] lg:w-[35%] flex flex-col gap-4'>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Design</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Outreach</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Engineering</div>
            <div className='p-4 w-full border-blue border-[1px] rounded-sm text-center'>Woodworking</div>
          </div>
        </div>
        <div className='mt-[4rem] px-[5%] flex-col lg:flex-row flex items-center justify-between gap-8'>
          <div className='w-[80%] lg:w-[60%]'>
            <h3 className='text-3xl mb-4 text-center lg:text-left'>Sponsorship Prospectus</h3>
            <p>In order to continue to offer this experience to current and future students of LHSS, we are seeking sponsorship from individuals, businesses, corporations, and organizations. Our team would appreciate any financial support that you are able to provide us. We are also open to any support by supplying us with any of the listed materials that can be found in our <a href='/package.pdf'>prospectus</a>. 
            <br/><br/>Additionally, mentors with experience in any of the groups found on the <a href='/package.pdf'>prospectus</a> visiting for a workshop or talk would be greatly appreciated.<br/><br/>Sponsor us today and support the future innovators of tech. </p>
            <button onClick={() => window.location.href='/package.pdf'} className='mt-4 mr-4'>View Sponsorship Package</button>
            <button onClick={() => window.open('https://docs.google.com/document/d/1ikCvpgrNkIX4J_g4hpdmcniawIHCKofy_OtoMjwNDHM/edit')} className='mt-4'>Sponsor Instructions</button>
          </div>
          <img src={pic5} alt='pic5' className='w-[70%] lg:w-[30%] h-auto object-cover rounded-2xl'></img>
        </div> 
    </div>
  )
}

export default Sponsor