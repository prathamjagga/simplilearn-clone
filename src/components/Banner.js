import React from 'react'

 const Banner = () => {
    return (
        <>
<div id="homeBanner">
  <div className="banner">
    <div className="container">
      <div className="left-clm">
        <h1>
          {" "}
          {/* */}World’s #1 <br /> Online Bootcamp
        </h1>
        <ul>
          <li>
            <b>2,000,000</b> careers advanced
          </li>
          <li>
            <b>1,500</b> live classes every month
          </li>
          <li>
            <b>85%</b> report career benefits including promotion or a new job
          </li>
        </ul>
        <a href="#post-graduate-programs" className="btn">
          Explore Programs
        </a>
      </div>
      <div className="right-clm">
        <a href aria-label="Play video" rel="noopener" className="play-anim" />
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Banner;
