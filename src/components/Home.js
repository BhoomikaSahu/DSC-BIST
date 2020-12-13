import React from "react";
import topBanner from "../resources/Home/header-bg.png";
import dscLogo from "../resources/Home/vertical-light-logo.svg";
import homeHero from "../resources/Home/Home-hero-img.svg";
import gear from "../resources/Home/gear.svg";
import googleDev from "../resources/Home/google-dev.svg";
import blue from "../resources/Home/home-4blue.svg";
import reward from "../resources/Home/reward.svg";
import people from "../resources/Home/people.svg";
import bar from "../resources/Home/bar-chart-2.svg";

import award from "../resources/Home/award.svg";
import user from "../resources/Home/users.svg";
import checkCircle from "../resources/Home/check-circle.svg";

import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* 1 Home - 1 start */}
      <section className="section-home-1">
        <div className="row m-0 bg-grey top-main-container">
          <div className="col-12 col-lg-8 p-0">
            <img
              src={topBanner}
              class="img-fluid top-banner"
              alt="topbanner"
            />
          </div>

          <div className="col-12 col-lg-4 p-0 bg-grey my-lg-auto py-2 top-container">
            <img
              src={dscLogo}
              class="img-container top-dsc-logo"
              alt="dsclogo"
            />

            <a
              href="https://dsc.community.dev/bansal-institute-of-science-and-technology-bhopal/"
              className="chapter-link"
            >
              <button className="btn-purple mx-auto d-lg-block d-flex mt-2">
                Chapter
              </button>
            </a>
          </div>
        </div>
        <h4 className="sub-heading text-center mt-2">
          Helping students bridge the gap between
          <span className="text-purple">
            &nbsp;theory
          </span>
          &nbsp;and
          <span className="text-purple">
            &nbsp;practice
          </span>
        </h4>

        <div className="floating-anim mx-auto d-lg-flex d-block ">
          <img
            src={gear}
            alt=""
            className="gear d-lg-block d-none"
          />
          <img
            src={homeHero}
            alt=""
            className=" img-fluid mx-auto mt-lg-0 mt-5"
          />
        </div>
      </section>
      {/* 1 Home - 1 end */}

      {/* 2 Home - 2 Start */}

      <section className="section-home-2 d-lg-flex d-block justify-content-center align-items-center">
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-12 text-center">
              <img
                className="img-fluid mt-5"
                src={dscLogo}
                alt="google-dev"
              />
            </div>
            <div className="col-12 text-center">
              <p className="sub-heading">
                Developer Student clubs is a
                flagship program by &nbsp;
                <span>
                  <img
                    className=" google-dev"
                    src={googleDev}
                    alt="google-dev"
                  />
                </span>
              </p>
            </div>
            <div className="col-12">
              <p className="text-center">
                Developer Student Clubs are
                university based community groups
                for students interested in Google
                developer technologies.Students
                from all undergraduate or graduate
                programs with an interest in
                growing as a developer are
                welcome. By joining a DSC,
                students grow their knowledge in a
                peer-to-peer learning environment
                and build solutions for local
                businesses and their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Home - 2 End */}

      {/* 3 Home - 3 Start */}
      <section className="section-home-3 d-lg-flex d-block justify-content-center align-items-center">
        <div className="container">
          <h2 className="heading text-center mb-5">
            Opportunities DSCs provide students
            with
          </h2>

          <div className="row mx-lg-5 mx-0 mt-2">
            <div className="col-lg-6 col-12">
              <ul>
                <li className="sub-heading mb-lg-5 mb-2">
                  Grow their knowledge on
                  developer technologies and more
                  through peer to peer workshops
                  and events.
                </li>
                <li className="sub-heading">
                  Gain relevant industry
                  experience by solving problems
                  for local organizations with
                  technology based solutions.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-12">
              <ul>
                <li className="sub-heading mb-lg-5 mb-2">
                  Showcase their prototypes and
                  solutions to their local
                  community and industry leaders.
                </li>
                <li className="sub-heading">
                  Getting inspiration to become
                  world-class developers and
                  changemakers from sharing
                  others' success stories.
                </li>
              </ul>
            </div>
          </div>
          <div class="card-group mx-lg-5 mx-3">
            <div class="card mx-lg-2">
              <div class="card-body text-center">
                <p className="text-center">
                  <img src={award} />
                </p>
                <h4 className="text-center">
                  Why DSC?
                </h4>
                <p className="text-center">
                  For students to learn
                  development skills, solve
                  problems through technology and
                  inspire them to be world class
                  developers and changemakers.
                </p>
              </div>
            </div>
            <div class="card mx-lg-2">
              <p className="text-center">
                <img src={user} />
              </p>
              <h4 className="text-center">
                Target Audience
              </h4>
              <p className="text-center">
                DSC activities are targeted at
                University students and any others
                including faculty members who want
                to learn development skills & work
                to solve real-life problems.
              </p>
            </div>
            <div class="card mx-lg-2">
              <div class="card-body text-center">
                <p className="text-center">
                  <img src={checkCircle} />
                </p>
                <h4 className="text-center">
                  Concept of DSC
                </h4>
                <p className="text-center">
                The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 Home - 3 end */}

      {/* 4 Home - 4 start */}
      <section className="section-home-4">
        <div className="centre-img">
          <div className="container">
            <h4 className="sub-heading text-muted text-centre mb-5 heading-1">
              Google's developer community programs empower you to :
          </h4>
          </div>
          <img
            src={blue}
            alt="Responsive image"
            className="centre-img"
          />
          <img
            src={people}
            alt=""
            className="inner-image"
          />
          <img
            src={bar}
            alt=""
            className="inner-image-c"
          />
          <img
            src={reward}
            alt=""
            className="inner-image-l"
          />
          <h10 className="centre-left">
            Connect with fellow developers in your area.
            </h10>
          <h10 className="centre-text">
            Get inspired by those around you, hear from industry experts, and solve problems together.
            </h10>
          <h10 className="centre-right">
            Learn new skills through in-person training sessions and workshops.
            </h10>
        </div>
      </section>
    </>
  );
};

export default Home;
