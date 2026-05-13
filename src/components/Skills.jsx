import Image from 'next/image';

export default function Skills() {
  const skills = [
    { name: "React", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp5e4Rivyxwi0rfADI-5w0tl-u-gvpVixSMyUr4Rs6Bn-1RPO6DNojtaqXmZBTzkxmyy-PCyZJt2h0B3uHkDl5x8L-6WjOpwS8MY9PztStz1fguOOaCNxfVfTcKBlpxQusNu1sCl5528h9-U8r6KHrB8KUHPJD0SI282ElWJ8efDFNqE7jcHx3Zs9HPf9gHIqBGKUlwv4sEgY1hLtuYpTvGEKBcmUHRSWB4Rs9xwyVEVGXKhQeD7L_SieYG9PFe5DpmGF9Mlih6_Y" },
    { name: "Node", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJMmXj6GXewkVpvpZa0rw4OYEnsMZjuHdRdznKeUhQR_0bQm2pw6aPVA3Y_4Z3HrhV6x0tWhxnRleneW9dxJ9Mp14u1DtPGprOZxQnWq1vYtaFpQWdB_A_tDIkTQ7Fkkk4WWBzwomC79M0f03oic7t13c8EAbYjJJNBwe9jczfV7vaOT5PP-0lxweiC3cNDXE-Pk83YM2rY49lwpqGNTiEr1kcIN3Em-HsL85LsGdbiVmdn45z4gWLfLR601AtJ7ScgIAVCj9umM" },
    { name: "Mongo", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLb_ign3ik54QSTxYo8ukG7v4LEenpUkOvOUw1M261t2EmgFuIIYeXYC_92olB2Cpfy_SOgXvNSDqIER7S8_5n2Oz7so51RT8obXrF1wSmsPVdh9LUGKDsoFxGJEMy3ZZ9Pmb7UXFM5ncn1VkO5NBnSpho3R3y1iEUNDIAcgTo9T81YIXjKauj31C4DDGnKu11Z3y-KB6IHfCSFIlXY7aAOjm8jHgxB4ZxvynyzmFx4v8Og2j-NHv8XUlMuR-YxsRpyNFBgA21MCI" },
    { name: "Tailwind", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLlWNkNhW2B8jOrOtyE7IU08VVcFfD23gEz3Xf-GwE7weLIlkISsUNkLUBYt5_xoBhAakotQAbPm_fQwwdUcnwi1g8A-qbntlYPbR9n7WOXPY7hC-jM3w4HhSH4B0Nu5pyckQpATfoK_74E-x2kEzNzTlUJLEnII1OFsEP0UGSL6bjRqVUpB93AMSqZ5PiaRvWtdNpOv56Ny16vkoGvHFVcm_FYCDokLqXkjd2lc62KDh-lB8Q6IAzpoJ8e5MzyAKi7rCDzHby_IA" },
    { name: "Figma", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxLQaVoIuJUPpBmUnhVDK6w9EnIo1YxvCu8jwndKMX3RVTRpXgSEbZ8UfkuhAPTOvgBG006zjy05qoIv12e9vMg8lC0xwP-plSgARLLDVgAmg8hjrVMz9BOG54wcGzEimQ-q4tT5Ax519fdUEMODeepyX24H56HA2va9DHD3mXQTv1RUu8PK8R7b-uhzlhU6b5pUBS-OaOlXMeOzKkY1Q6b5sXB7ty1TPBbUygQYQ4MQTZl1ebm7yl1hpoQMO0FfcVawpSgDGvbf8" },
    { name: "Webflow", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYIEMPisw7nlaYgRkNCwNaoyaTdX3oI694lf79C0nyM8LqQR_siRYXQgzlkdepI83h5JkKZlU_yXrPtQUQoZjJHcW-xECG-UFbd_iga8KBtNe2tRP4karQQdV_X802pjhSiKz5YlNvHOIOEeys4MbEKuU2TsPf7LocJ_jajVHnDLquGZ2dCVyOMyoI8dMI3YlN9fWPk89T-frbzKOdag1tcsd-xi8mLlkPtkVhaNFJ1DXmQptSgN-rWMqHPtF54CvLHGsTn0Dq6-4" },
    { name: "JS", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuf5vcF1acn7VXwI9CCSjgMw2xXZsZ2Rdu2RCnacgU_njIKJeWfAuOJn8d1cE3qcY5EGkJybRK1cJ7r4jflFcfz7wT8iIPp-XXNF_Z4Y3oygOcH0MutgGtnLE1CZP5BlZ5H1d-eC5tkbXgP1JzZVBsrLkRUPVCLi4TUWYZW5aUj1IIN01RYyy8Xwxf54nsiAMbcnFwu7pVH9lX-Q9vSMUTqf2apMi18DNw__iYcP7GOvedK_AlpT1fDG6f2ETdu0H5aVi8CkBOh2Y" },
    { name: "TS", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEbE2ma6bJA0uiAMhjuFKRGPhqwySfaheZP3p3qLOgtyI5Gv0y4PFi_4kfilqSa51GI5kB8hAOZ3ln0MTusPhTI2bLlzI-E-SYySSdgKVu90sxP1JAMemD2701eKpIOGyXQqMznOB0R2LQUKOCAtbW1ZvPJpJImmxKJe5S2QjTVMRJXA0nqfAAcxze6BSl6myyNV6n4De6oDeAqV0cG8Y7eQ4EeEPqBeKyqJacMmU5yDDb4ncddTivmKMlbTiE4kliynXFWzdTcFY" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="portfolio">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 glass-card p-10 relative">
          <div className="absolute top-8 right-8">
            <div className="w-16 h-16 rounded-lg bg-[#0d0d0d] border border-white/10 flex items-center justify-center p-2">
              <Image 
                alt="Special Skill Icon" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWsOkPXcNiytYrzIoent2O2b08_rVg92xBPMvSV3zp_UXCKduUe5ldamLnvcCbz0hwiRN12LpRBVNVc9kV1v0SHwwfTv1uvlveJiG5m9vuiBJmCELOigKXFPKgzLJyzMhc5W37mynFXtUo_ukYz1S8Mniq9FF_L3L5xz3_nP008NFaqqv9t1yytzs326xBNW6-4rizg_I90hNasKZu_nxlLQT18yTlHijKHEE_CWGEJvP4FrpmncYyHChOTIV0gWZxLsLimt6cj_I"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
          <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">MY SKILLS</p>
          <h2 className="text-3xl font-bold mb-6">My Toolbox of <span className="text-brand-lime italic font-black">Skills & Experience</span></h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-12">
            I focus on full-stack web application development combining backend architecture, frontend development, UI/UX design, and SEO to build scalable, high-performing, and user-friendly solutions.
          </p>
          
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="w-12 h-12 bg-black border border-white/10 rounded flex items-center justify-center p-2 hover:border-brand-lime transition-colors group">
                <Image 
                  alt={skill.name} 
                  src={skill.icon} 
                  width={24}
                  height={24}
                  className="grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-end space-y-8">
          <div>
            <p className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mb-2">CLIENT TESTIMONIALS</p>
            <h2 className="text-4xl font-black">I&apos;ve received <br /> <span className="text-brand-lime">Glowing Reviews</span> <br /> from my clients!</h2>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-6 space-y-4">
              <p className="text-[10px] text-gray-400 italic">&quot;Developsajeeb did an amazing job managing the design of a site...&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                <span className="text-[10px] font-bold">Client Name</span>
              </div>
            </div>
            <div className="glass-card p-6 space-y-4">
              <p className="text-[10px] text-gray-400 italic">&quot;Quick to respond and quickly understood the job. Provided good...&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                <span className="text-[10px] font-bold">Client Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
