export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F9F5F1] rounded-2xl w-full min-h-screen h-full">
      <div className="bg-[#D7BEFC] text-center font-semibold underline hidden sm:block">
        <p className="py-4">Link → Try Riley risk free with our 7-day free trial!</p>
      </div>

      <div className="w-full h-full overflow-hidden relative">
        <img
          className="w-[704px] h-[848px] absolute -z-10"
          src="/assets/images/clouds.png"
          alt="clouds"
        />

        <nav className="border-b border-gray-300">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <a href="/" aria-label="Riley home">
              <img src="/assets/icons/riley.icon.svg" alt="logo" className="h-16" />
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-lg text-[#5934C5] font-semibold hover:text-black"
              >
                Features & Pricing
              </a>
              <a href="#" className="text-lg text-[#5934C5] font-semibold hover:text-black">
                Blog
              </a>
              <a href="#" className="text-lg text-[#5934C5] font-semibold hover:text-black">
                What's New
              </a>
              <a
                href="#"
                className="text-lg text-white px-6 py-1 font-semibold rounded-[20px] border-2 border-[#5934C5] bg-[#5934C5] hover:shadow-lg transition cursor-pointer p-6"
              >
                Get Started For Free
              </a>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <a
                href="#"
                className="inline-block bg-[#5934C5] text-center text-white w-[100px] h-[50px] font-semibold text-sm px-2 py-4 rounded-full shadow"
              >
                Try For $0
              </a>

              <button className="flex items-center" aria-label="Open menu" type="button">
                <img src="/assets/icons/menu.svg" alt="menu" className="size-11" />
              </button>
            </div>
          </div>
        </nav>

        <section className="relative pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-8 pt-16 md:pt-24">
              <div className="flex flex-col items-center md:items-start md:flex-1">
                <img className="md:hidden w-32 mb-6" src="/assets/icons/minibro.svg" alt="" />

                <h3 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 leading-tight">
                  Parent Confidently <br />
                  <span className="flex flex-row justify-center md:justify-start items-center gap-2">
                    with{" "}
                    <img className="hidden md:inline w-12" src="/assets/icons/minibro.svg" alt="" />
                    Riley
                  </span>
                </h3>

                <p className="pt-4 text-gray-700 text-base sm:text-lg">
                  The only parenting app you'll ever need. <br />
                  24/7 expert-backed support, smart tracking, and <br />
                  advice tailored to your life.{" "}
                  <span className="font-bold">
                    Smarter than every baby <br /> book, and adapted to you.
                  </span>
                </p>

                <div className="mt-8 flex flex-col items-center md:items-start">
                  <a
                    href="#"
                    className="inline-block bg-[#5934C5] text-center text-white w-[224px] h-[56px] font-medium px-6 py-3 rounded-full shadow"
                  >
                    Get started For Free
                  </a>
                  <p className="flex items-center pt-2 gap-[10px] text-sm text-gray-600">
                    Available on:
                    <img className="w-[14px] h-[16px]" src="/assets/icons/applelogo.svg" alt="" />
                  </p>
                </div>
              </div>

              <div className="w-full md:flex md:flex-1 md:justify-end">
                <img
                  src="/assets/images/section1.png"
                  alt="main1"
                  className="w-[500px] md:w-[1280px] md:h-[1115px] md:absolute md:-right-[180px] md:-top-[200px] md:z-10"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#D7BEFC] mt-8 py-3 w-full relative">
          <div className="marquee">
            <div className="marquee-track flex items-center justify-center gap-16">
              <img src="/assets/icons/NBC logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/Axios logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/Bump logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/Finsmes logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/TC logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/Glamour logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/NBC logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/Axios logo.svg" alt="" className="w-32 h-6" />
              <img src="/assets/icons/Bump logo.svg" alt="" className="w-32 h-6" />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#F9F5F1] py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Parenting isn't one-size-fits-all.
            <br />
            <span className="font-normal">Your support shouldn't be, either.</span>
          </h2>
          <img src="/assets/icons/characters.svg" alt="characters" className="w-[1740px] mb-6" />
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Riley learns and remembers what matters: your baby’s growth stage, tracking logs, and past
            wins
            <br />
            to give guidance that fits your family.{" "}
            <span className="font-semibold">Support that thinks, adapts, and grows with you.</span>
          </p>
        </div>
      </section>

      <section className="bg-[#D7BEFC] rounded-2xl mx-4 md:mx-6 py-16 md:py-20 relative overflow-visible z-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 leading-snug">
            What Parenting Superpower
            <br />
            Do You Need Today?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {[
              ["/assets/icons/butilocka.svg", "Survive the newborn stage"],
              ["/assets/icons/mesyac.svg", "Get help with naps and sleep"],
              ["/assets/icons/kubiki.svg", "Support baby development"],
              ["/assets/icons/lyalka.svg", "Navigating toddler tantrums"],
              ["/assets/icons/salat.svg", "Starting solid foods"],
              ["/assets/icons/korablik.svg", "Build a routine"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center justify-between bg-white py-4 px-6 rounded-full font-medium text-gray-800 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img src={icon} alt="" className="w-5 h-5" />
                  {label}
                </div>
                <span className="text-[#5934C5] text-lg">→</span>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/assets/icons/minibro2.svg"
          alt="riley"
          className="absolute -bottom-10 left-8 md:left-16 w-24 md:w-28 z-10"
        />
      </section>

      <section className="bg-[#F9F5F1] py-24 text-center relative overflow-hidden z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-14">
            Here's How <span className="italic font-normal">Real</span> Users Talk to Riley:
          </h3>

          <img src="/assets/images/Background.png" alt="Background" className="mx-auto" />

          <div className="mt-14">
            <a
              href="#"
              className="bg-[#5934C5] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition"
            >
              Talk to Riley
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm text-gray-500 mb-3">Our Clinical Advisory Board</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Designed with Experts, for Real Families
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-16">
            <span className="font-semibold">Our Clinical Advisory Board</span> includes{" "}
            <span className="font-medium">pediatricians, therapists, and specialists</span>, who help
            us keep Riley grounded in real, <span className="font-semibold">evidence-based support.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="flex flex-col items-center">
              <div className="relative mb-5">
                <img
                  src="/assets/images/woman1.png"
                  alt="Dr. Lily Jay"
                  className="relative size-45 object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-800">Dr. Lily Jay</h4>
              <p className="text-sm text-gray-600">PsyD, PMH-C, Perinatal Health</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative mb-5">
                <img
                  src="/assets/images/woman2.png"
                  alt="Dr. Kate Roche"
                  className="relative size-45 object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-800">Dr. Kate Roche</h4>
              <p className="text-sm text-gray-600">MD, Child Neurology</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBFA] py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-16">How Riley Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center max-w-sm mx-auto">
              <img src="/assets/icons/purple-family.svg" alt="Built on science" className="mb-6 size-50" />
              <h3 className="font-medium text-gray-800 mb-3">Built on science that matters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When answering your questions, Riley draws from the latest child development research,
                expert-reviewed sources that are vetted by our Clinical Advisory Board.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-sm mx-auto">
              <img src="/assets/icons/blue-family.svg" alt="Tech that learns" className="mb-6 size-50" />
              <h3 className="font-medium text-gray-800 mb-3">
                Powered by tech that learns and grows with you
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once you start using Riley, it doesn’t just log or respond to you, it safely remembers.
                From tracking to what’s worked in the past, Riley learns from you to offer relevant guidance.
              </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-sm mx-auto">
              <img src="/assets/icons/pink-family.svg" alt="Clarity with individuality" className="mb-6 size-50" />
              <h3 className="font-medium text-gray-800 mb-3">
                Clarity without ignoring your individuality
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every family is different, Riley gets that! You’ll receive clear, science-backed guidance that respects your
                individual parenting style and real-life context.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <a
              href="#"
              className="bg-[#5934C5] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition"
            >
              Get Started For Free
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F7F4] py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm text-gray-500 mb-3">Real Reviews, Real Families</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">Why Parents Love Riley</h2>

          <div className="bg-[#D7BEFC] rounded-2xl py-12 px-8 max-w-3xl mx-auto shadow-sm">
            <img src="/assets/icons/stars.svg" alt="stars" className="mx-auto mb-6" />
            <p className="text-lg text-gray-800 font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
              “10 days into having our newborn, we’ve already developed the habit of saying{" "}
              <span className="italic">‘Hm, not sure. Ask Riley’</span> multiple times a day. Not sure what we’d do without
              having Riley to back our instincts.”
            </p>
            <img src="/assets/icons/minicloud.svg" alt="user" className="mx-auto mb-3" />
            <p className="text-gray-700 text-sm">Max L., Dad of Baby R (1 mo)</p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition" aria-label="Review page 1" />
            <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition" aria-label="Review page 2" />
          </div>

          <div className="mt-12">
            <a
              href="#"
              className="bg-[#5934C5] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition"
            >
              Join the club
            </a>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#FF93AB] via-[#FF9C7F] via-[#FFA168] to-[#F9F5F1] py-4">
        <section className="bg-white rounded-2xl mx-8 mt-10 py-24 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gray-600 mb-2">Parenting is hard. Riley makes it easier.</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-14">
              One App for All Your Parenting Needs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex justify-center items-center">
                <img src="/assets/icons/card1.svg" alt="24/7 Personalized Support" className="rounded-xl w-full h-auto" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex justify-center items-center">
                <img src="/assets/icons/card2.svg" alt="Smart, Predictive Tracking" className="rounded-xl w-full h-auto" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex justify-center items-center">
                <img src="/assets/icons/card3.svg" alt="Tips Tailored Just for You" className="rounded-xl w-full h-auto" />
              </div>
            </div>

            <a
              href="#"
              className="inline-block bg-[#5934C5] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition"
            >
              Get Started For Free
            </a>
          </div>
        </section>

        <div className="w-full h-full mx-auto overflow-x-auto">
          <div className="bg-[#F9F5F1] min-w-[1150px] p-6 rounded-2xl m-4 sm:m-10">
            <table className="border-separate w-full h-full min-w-[1000px]">
              <tbody>
                <tr>
                  <th className="w-[340px] inter-light text-[#2E2A42] text-center">Feature/Benefit</th>
                  <th className="w-[80px] inter-light text-[#2E2A42] text-center">Riley</th>
                  <th className="w-[115px] inter-light text-[#2E2A42] text-center">Google Search</th>
                  <th className="w-[80px] inter-light text-[#2E2A42] text-center">Reddit</th>
                  <th className="w-[100px] inter-light text-[#2E2A42] text-center">ChatGPT</th>
                  <th className="w-[80px] inter-light text-[#2E2A42] text-center">Claude</th>
                  <th className="w-[145px] inter-light text-[#2E2A42] text-center">Other Tracking Apps</th>
                  <th className="w-[165px] inter-light text-[#2E2A42] text-center">Podcasts, Books & Blogs</th>
                </tr>

                <tr>
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                </tr>

                <tr>
                  <th>
                    <div className="flex items-center justify-center bg-white inter text-[#2E2A42] text-[20px] w-[340px] text-center py-[14px] rounded-l-xl overflow-hidden">
                      24/7 Instant Answers
                    </div>
                  </th>
                  {["check", "check", "check", "check", "check", "uncheck"].map((state, idx) => (
                    <td key={idx} className="bg-white py-[14px] border-l border-black">
                      <img className="mx-auto" src={`/assets/icons/${state}.svg`} alt="" />
                    </td>
                  ))}
                  <td>
                    <div className="bg-white w-[165px] h-full py-[14px] border-l border-black rounded-r-xl flex items-center justify-center">
                      <img className="mx-auto" src="/assets/icons/uncheck.svg" alt="" />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                </tr>

                <tr>
                  <th>
                    <div className="text-sm flex items-center justify-center bg-white rounded-l-xl inter text-[#2E2A42] text-[20px] w-[340px] text-center py-[14px]">
                      Expert-Vetted, Science Backed Support
                    </div>
                  </th>
                  {["check", "uncheck", "uncheck", "uncheck", "uncheck", "uncheck"].map((state, idx) => (
                    <td key={idx} className="bg-white py-[14px] border-l border-black">
                      <img className="mx-auto" src={`/assets/icons/${state}.svg`} alt="" />
                    </td>
                  ))}
                  <td>
                    <div className="bg-white w-[165px] h-full py-[14px] border-l border-black rounded-r-xl flex items-center justify-center">
                      <img className="mx-auto" src="/assets/icons/check.svg" alt="" />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                </tr>

                <tr>
                  <th>
                    <div className="text-sm rounded-l-xl bg-white flex items-center justify-center inter text-[#2E2A42] text-[20px] w-[340px] text-center py-[14px]">
                      Guidance Tailored to You &amp; Your Family
                    </div>
                  </th>
                  {["check", "uncheck", "uncheck", "uncheck", "uncheck", "uncheck"].map((state, idx) => (
                    <td key={idx} className="bg-white py-[14px] border-l border-black">
                      <img className="mx-auto" src={`/assets/icons/${state}.svg`} alt="" />
                    </td>
                  ))}
                  <td>
                    <div className="flex items-center justify-center bg-white w-[165px] h-full py-[14px] border-l border-black rounded-r-xl">
                      <img className="mx-auto" src="/assets/icons/uncheck.svg" alt="" />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                </tr>

                <tr>
                  <th>
                    <div className="text-sm rounded-l-xl bg-white h-full flex justify-center items-center inter text-[#2E2A42] text-[20px] w-[340px] text-center py-[14px]">
                      Proactively Turns Tracking Into Tips
                    </div>
                  </th>
                  {["check", "uncheck", "uncheck", "uncheck", "uncheck", "uncheck"].map((state, idx) => (
                    <td key={idx} className="bg-white py-[14px] border-l border-black">
                      <img className="mx-auto" src={`/assets/icons/${state}.svg`} alt="" />
                    </td>
                  ))}
                  <td>
                    <div className="bg-white flex justify-center items-center w-[165px] h-full py-[14px] border-l border-black rounded-r-xl">
                      <img className="mx-auto" src="/assets/icons/uncheck.svg" alt="" />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                  <td className="py-3" />
                </tr>

                <tr>
                  <th>
                    <div className="text-sm bg-white rounded-l-xl h-full flex justify-center items-center inter text-[#2E2A42] text-[20px] w-[340px] text-center py-[14px] rounded-r-xl">
                      All-In-One Tracking &amp; Support
                    </div>
                  </th>
                  {["check", "uncheck", "uncheck", "uncheck", "uncheck", "check"].map((state, idx) => (
                    <td key={idx} className="bg-white py-[14px] border-l border-black">
                      <img className="mx-auto" src={`/assets/icons/${state}.svg`} alt="" />
                    </td>
                  ))}
                  <td>
                    <div className="bg-white h-full flex justify-center items-center w-[165px] py-[14px] border-l border-black rounded-r-xl">
                      <img className="mx-auto" src="/assets/icons/uncheck.svg" alt="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="relative w-full h-[90vh] mt-10 bg-cover bg-center flex items-center justify-center">
        <img
          className="w-[1840px] h-[948px] absolute -z-10 object-cover"
          src="/assets/images/Section.png"
          alt="clouds"
        />

        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            We’re Here to Make <br /> Things Clear
          </h1>
        </div>

        <div className="hidden md:block">
          <div className="absolute top-60 left-60 bg-white shadow-md rounded-xl px-4 py-2 flex items-center gap-2">
            <img src="/assets/icons/avatar1.svg" className="w-6 h-6 rounded-full" alt="" />
            <p className="text-xl text-gray-800">
              How do I know I can <br /> trust Riley?
            </p>
          </div>

          <div className="absolute top-[180px] right-[200px] bg-white shadow-md rounded-xl px-4 py-2 flex items-center gap-2">
            <img src="/assets/icons/avatar2.svg" className="w-6 h-6 rounded-full" alt="" />
            <p className="text-xl text-gray-800">
              How is Riley different <br /> from ChatGPT or other <br /> parenting apps?
            </p>
          </div>

          <div className="absolute bottom-[260px] left-[340px] bg-white shadow-md rounded-xl px-4 py-2 flex items-center gap-2">
            <img src="/assets/icons/avatar3.svg" className="w-6 h-6 rounded-full" alt="" />
            <p className="text-xl text-gray-800">
              Do I need to track <br /> everything for Riley to <br /> work?
            </p>
          </div>

          <div className="absolute bottom-[220px] right-[380px] bg-white shadow-md rounded-xl px-4 py-2 flex items-center gap-2">
            <img src="/assets/icons/avatar4.svg" className="w-6 h-6 rounded-full" alt="" />
            <p className="text-xl text-gray-800">
              Are you going to keep <br /> my kid’s data private?
            </p>
          </div>

          <div className="absolute top-[320px] right-[300px] bg-white shadow-md rounded-xl px-4 py-2 flex items-center gap-2">
            <img src="/assets/icons/avatar5.svg" className="w-6 h-6 rounded-full" alt="" />
            <p className="text-xl text-gray-800">What can’t I ask Riley?</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8 px-4 md:hidden z-20">
          {[
            ["/assets/icons/avatar1.svg", "How do I know I can trust Riley?"],
            ["/assets/icons/avatar2.svg", "How is Riley different from other parenting apps?"],
            ["/assets/icons/avatar3.svg", "Do I need to track everything for Riley to work?"],
            ["/assets/icons/avatar4.svg", "Are you going to keep my kid’s data private?"],
            ["/assets/icons/avatar5.svg", "What can’t I ask Riley?"],
          ].map(([avatar, text]) => (
            <div key={text} className="bg-white shadow-md rounded-xl px-4 py-3 flex items-center gap-2">
              <img src={avatar} className="w-6 h-6 rounded-full" alt="" />
              <p className="text-base text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white rounded-3xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 mb-2">Insightful Reads for Modern Parents</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Explore the Riley Blog</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-3 py-1 bg-[#FFD6A7] font-semibold rounded-full text-sm">Development</span>
            <span className="px-3 py-1 bg-[#F1F5F9] font-semibold rounded-full text-sm">Feeding</span>
            <span className="px-3 py-1 bg-[#FFC9C9] font-semibold rounded-full text-sm">Health</span>
            <span className="px-3 py-1 bg-[#F1F5F9] font-semibold rounded-full text-sm">News</span>
            <span className="px-3 py-1 bg-[#F1F5F9] font-semibold rounded-full text-sm">Pregnancy</span>
            <span className="px-3 py-1 bg-[#E7E5E4] font-semibold rounded-full text-sm">Sleep</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/assets/images/motherchild1.png"
                alt="Baby Witching Hour"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-left">
                <a href="#" className="text-lg font-semibold text-gray-900 hover:text-purple-600 block mb-2">
                  Baby Witching Hour: What It Is, When and Why It Happens, and How to Manage It
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/assets/images/motherchild2.png"
                alt="1 Month Old Sleep Guide"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-left">
                <a href="#" className="text-lg font-semibold text-gray-900 hover:text-purple-600 block mb-2">
                  1 Month Old Sleep Guide: Bedtime and Nap Schedules
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/assets/images/motherchild3.png"
                alt="16 Month Old Sleep Schedule"
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-left">
                <a href="#" className="text-lg font-semibold text-gray-900 hover:text-purple-600 block mb-2">
                  16 Month Old Sleep Schedule: How Much Should a 16 Month Old Sleep?
                </a>
              </div>
            </div>
          </div>

          <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
            Explore the blog
          </button>
        </div>
      </section>

      <footer className="relative w-full bg-cover bg-center pt-24 pb-10">
        <img
          className="w-[1740px] h-[848px] absolute -z-10"
          src="/assets/images/Background decoration.png"
          alt="clouds"
        />

        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            We are raising a generation
            <br className="hidden md:block" />
            of confident parents.
          </h2>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition">
            Get support that gets you
          </button>
        </div>

        <div className="flex justify-center mb-16">
          <img src="/assets/images/characters2.svg" alt="characters" className="w-[380px] md:w-[680px]" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6 gap-10 border-t border-gray-200 pt-10">
          <div className="flex flex-col items-start w-full md:w-1/3">
            <p className="text-gray-700 mb-3">Stay in the loop with Riley’s newsletter.</p>
            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 rounded-r-full">
                Sign up
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center md:items-end gap-8 text-end text-[#5934C5] font-semibold text-sm">
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-purple-600">
                Blog
              </a>
              <a href="#" className="hover:text-purple-600">
                Pricing
              </a>
              <a href="#" className="hover:text-purple-600">
                Editorial Process
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-purple-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-600">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-600">
                Support
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
            <p className="text-gray-700 mb-3">Get the App</p>
            <img src="/assets/icons/AppStore (2).svg" alt="Download on the App Store" className="w-36" />
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          <img src="/assets/icons/rileylogob.svg" alt="Riley logo" className="mx-auto mb-2 w-28" />
          <p>© {year} Riley</p>
        </div>
      </footer>
    </div>
  );
}

